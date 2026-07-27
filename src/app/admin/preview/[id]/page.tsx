import { notFound, redirect } from 'next/navigation'
import { createClient } from '../../../../lib/supabase/server'
import { getWorkItemForPreview } from '../../../../lib/work'
import { WorkDetail } from '../../../work/WorkDetail'

export const dynamic = 'force-dynamic'
export const metadata = { robots: { index: false, follow: false } }

type Props = { params: Promise<{ id: string }> }

export default async function PreviewPage({ params }: Props) {
  const { id } = await params

  // Only the signed-in owner may preview drafts.
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin')

  const data = await getWorkItemForPreview(id)
  if (!data) notFound()

  return <WorkDetail item={data.item} images={data.images} draft={!data.item.published} />
}
