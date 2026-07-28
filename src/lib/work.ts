import { createClient } from './supabase/server'
import { createPublicClient } from './supabase/public'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!

export type WorkItem = {
  id: string
  title: string
  slug: string
  category: string
  year: string
  badge: string | null
  thumbnail_path: string | null
  description: string
  published: boolean
  sort_order: number
  layout: unknown | null
}

export type WorkItemImage = {
  id: string
  work_item_id: string
  storage_path: string
  caption: string
  sort_order: number
}

/** Public URL for a file in the 'work' storage bucket. */
export function workAssetUrl(path: string | null | undefined): string {
  if (!path) return ''
  return `${SUPABASE_URL}/storage/v1/object/public/work/${path}`
}

/** Published work items, newest sort first — for the public /work grid. */
export async function getPublishedWorkItems(): Promise<WorkItem[]> {
  try {
    // Cookieless public client → this page can be cached/ISR instead of dynamic.
    const supabase = createPublicClient()
    const { data, error } = await supabase
      .from('work_items')
      .select('*')
      .eq('published', true)
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: false })
    if (error) throw error
    return (data ?? []) as WorkItem[]
  } catch {
    // DB unreachable / not configured — the site still renders its hardcoded work.
    return []
  }
}

/**
 * A single item by id, INCLUDING drafts, for the admin preview. Relies on the
 * caller's authenticated session — RLS only returns the row to the owner.
 */
export async function getWorkItemForPreview(
  id: string
): Promise<{ item: WorkItem; images: WorkItemImage[] } | null> {
  try {
    const supabase = await createClient()
    const { data: item } = await supabase.from('work_items').select('*').eq('id', id).maybeSingle()
    if (!item) return null
    const { data: images } = await supabase
      .from('work_item_images')
      .select('*')
      .eq('work_item_id', item.id)
      .order('sort_order', { ascending: true })
    return { item: item as WorkItem, images: (images ?? []) as WorkItemImage[] }
  } catch {
    return null
  }
}

/** A single published item + its gallery, for the auto-generated detail page. */
export async function getWorkItemBySlug(
  slug: string
): Promise<{ item: WorkItem; images: WorkItemImage[] } | null> {
  try {
    // Public, published-only read → cookieless so the detail page can be cached.
    const supabase = createPublicClient()
    const { data: item } = await supabase
      .from('work_items')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .maybeSingle()
    if (!item) return null
    const { data: images } = await supabase
      .from('work_item_images')
      .select('*')
      .eq('work_item_id', item.id)
      .order('sort_order', { ascending: true })
    return { item: item as WorkItem, images: (images ?? []) as WorkItemImage[] }
  } catch {
    return null
  }
}
