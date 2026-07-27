'use client'
/* eslint-disable @next/next/no-img-element -- admin UI: raw <img> for local previews of Supabase-hosted files is fine and simpler than next/image here */

import { useCallback, useEffect, useState, type ReactNode, type FormEvent } from 'react'
import type { Session } from '@supabase/supabase-js'
import { createClient } from '../../lib/supabase/client'

const OWNER_EMAIL = 'hello@blackrabbit-creative.com'
const CATEGORIES = ['Branding', 'Logo Design', 'Packaging', 'Graphic Design', 'Case Studies', 'Books']
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!

function assetUrl(path?: string | null) {
  return path ? `${SUPABASE_URL}/storage/v1/object/public/work/${path}` : ''
}
function slugify(s: string) {
  return s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
}

type Item = {
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
  layout?: unknown
}
type GalleryImg = { id: string; storage_path: string; caption: string; sort_order: number }

const supabase = createClient()

export function AdminApp() {
  const [session, setSession] = useState<Session | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setReady(true)
    })
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s))
    return () => sub.subscription.unsubscribe()
  }, [])

  if (!ready) return <Shell><p className="text-white/40">Loading…</p></Shell>
  if (!session) return <Shell><Login /></Shell>
  if (session.user.email?.toLowerCase() !== OWNER_EMAIL)
    return (
      <Shell>
        <p className="text-white/70 mb-4">
          Signed in as {session.user.email}, which isn&apos;t the admin account.
        </p>
        <button onClick={() => supabase.auth.signOut()} className="btn-ghost">Sign out</button>
      </Shell>
    )
  return <Dashboard email={session.user.email!} />
}

function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#060606] text-white px-6 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-lg font-black uppercase tracking-[0.1em]">Black Rabbit</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#7c5fe6] border border-[#7c5fe6]/40 px-2 py-1">
            Admin
          </span>
        </div>
        {children}
      </div>
      <style>{`
        .btn{background:#5b3fd6;color:#fff;padding:.65rem 1.25rem;font-size:11px;letter-spacing:.15em;text-transform:uppercase;font-weight:700;transition:background .2s}
        .btn:hover{background:#4a32b8}
        .btn:disabled{opacity:.5;cursor:not-allowed}
        .btn-ghost{background:rgba(255,255,255,.06);color:#fff;padding:.6rem 1.1rem;font-size:11px;letter-spacing:.15em;text-transform:uppercase;font-weight:700;border:1px solid rgba(255,255,255,.15)}
        .btn-ghost:hover{background:rgba(255,255,255,.12)}
        .field{width:100%;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.15);padding:.6rem .8rem;font-size:14px;color:#fff;outline:none}
        .field:focus{border-color:#7c5fe6}
        .label{display:block;font-size:10px;letter-spacing:.25em;text-transform:uppercase;color:rgba(255,255,255,.45);margin-bottom:.4rem}
      `}</style>
    </div>
  )
}

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState('')

  async function submit(e: FormEvent) {
    e.preventDefault()
    setBusy(true); setMsg('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setBusy(false)
    if (error) setMsg(error.message)
  }

  return (
    <div className="max-w-sm">
      <h1 className="text-2xl font-black uppercase tracking-[0.05em] mb-2">Sign in</h1>
      <p className="text-white/45 text-sm mb-8">Enter your admin email and password.</p>
      <form onSubmit={submit} className="flex flex-col gap-4">
        <div>
          <label className="label">Email</label>
          <input type="email" required autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} className="field" placeholder="you@company.com" />
        </div>
        <div>
          <label className="label">Password</label>
          <input type="password" required autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} className="field" placeholder="••••••••" />
        </div>
        <button className="btn" disabled={busy}>{busy ? 'Signing in…' : 'Sign in'}</button>
      </form>
      {msg && <p className="text-red-400 text-sm mt-4">{msg}</p>}
    </div>
  )
}

type FormState = {
  title: string; slug: string; category: string; year: string
  badge: string; description: string; published: boolean; thumbnail_path: string | null
}
const BLANK: FormState = {
  title: '', slug: '', category: CATEGORIES[0], year: '',
  badge: '', description: '', published: false, thumbnail_path: null,
}

function Dashboard({ email }: { email: string }) {
  const [items, setItems] = useState<Item[]>([])
  const [editing, setEditing] = useState<Item | 'new' | null>(null)
  const [msg, setMsg] = useState('')
  const [confirmDel, setConfirmDel] = useState<string | null>(null)

  const load = useCallback(async () => {
    const { data } = await supabase.from('work_items').select('*').order('sort_order').order('created_at', { ascending: false })
    setItems((data ?? []) as Item[])
  }, [])
  useEffect(() => { load() }, [load])

  async function togglePublish(it: Item) {
    await supabase.from('work_items').update({ published: !it.published, updated_at: new Date().toISOString() }).eq('id', it.id)
    load()
  }
  async function remove(it: Item) {
    // Two-click confirm — no native confirm() dialog (those get blocked in some browsers).
    if (confirmDel !== it.id) { setConfirmDel(it.id); return }
    setConfirmDel(null)
    const { error } = await supabase.from('work_items').delete().eq('id', it.id)
    if (error) { setMsg(`Could not delete: ${error.message}`); return }
    setMsg(`Deleted "${it.title}".`)
    load()
  }
  async function move(it: Item, dir: -1 | 1) {
    const idx = items.findIndex((x) => x.id === it.id)
    const swap = items[idx + dir]
    if (!swap) return
    await supabase.from('work_items').update({ sort_order: swap.sort_order }).eq('id', it.id)
    await supabase.from('work_items').update({ sort_order: it.sort_order }).eq('id', swap.id)
    load()
  }
  async function changePassword() {
    const pw = prompt('New password (at least 6 characters):')
    if (!pw) return
    if (pw.length < 6) { alert('Password must be at least 6 characters.'); return }
    const { error } = await supabase.auth.updateUser({ password: pw })
    alert(error ? `Could not update: ${error.message}` : 'Password updated.')
  }

  if (editing) {
    return <Editor email={email} item={editing === 'new' ? null : editing} onDone={(m) => { setEditing(null); setMsg(m); load() }} onCancel={() => setEditing(null)} />
  }

  return (
    <Shell>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black uppercase tracking-[0.05em]">Portfolio</h1>
          <p className="text-white/40 text-xs mt-1">
            {email} · <button onClick={changePassword} className="underline">change password</button> · <button onClick={() => supabase.auth.signOut()} className="underline">sign out</button>
          </p>
        </div>
        <button onClick={() => setEditing('new')} className="btn">+ Add item</button>
      </div>
      {msg && <p className="text-[#7c5fe6] text-sm mb-6">{msg}</p>}

      <div className="border-t border-white/10">
        {items.length === 0 && <p className="text-white/30 py-10 text-sm">No items yet. Add your first one.</p>}
        {items.map((it, i) => (
          <div key={it.id} className="flex items-center gap-4 py-4 border-b border-white/10">
            <div className="w-16 h-16 bg-white/5 shrink-0 overflow-hidden">
              {it.thumbnail_path && <img src={assetUrl(it.thumbnail_path)} alt="" className="w-full h-full object-cover" />}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-bold uppercase tracking-[0.04em] text-sm truncate">{it.title}</span>
                {!it.published && <span className="text-[9px] uppercase tracking-[0.2em] text-yellow-400/80 border border-yellow-400/30 px-1.5 py-0.5">Draft</span>}
              </div>
              <span className="text-white/40 text-xs">{it.category} · {it.year || '—'} · /work/{it.slug}</span>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <button onClick={() => move(it, -1)} disabled={i === 0} className="btn-ghost !px-2 !py-1 disabled:opacity-30">↑</button>
              <button onClick={() => move(it, 1)} disabled={i === items.length - 1} className="btn-ghost !px-2 !py-1 disabled:opacity-30">↓</button>
              <button onClick={() => window.open(`/admin/preview/${it.id}`, '_blank')} className="btn-ghost !px-3 !py-1">Preview</button>
              <button onClick={() => togglePublish(it)} className="btn-ghost !px-3 !py-1">{it.published ? 'Unpublish' : 'Publish'}</button>
              <button onClick={() => setEditing(it)} className="btn-ghost !px-3 !py-1">Edit</button>
              <button onClick={() => remove(it)} onBlur={() => setConfirmDel(null)} className={`btn-ghost !px-3 !py-1 !border-red-500/30 ${confirmDel === it.id ? '!bg-red-600 text-white' : 'text-red-300'}`}>{confirmDel === it.id ? 'Confirm?' : 'Del'}</button>
            </div>
          </div>
        ))}
      </div>
    </Shell>
  )
}

function Editor({ item, onDone, onCancel }: { email: string; item: Item | null; onDone: (m: string) => void; onCancel: () => void }) {
  const [f, setF] = useState<FormState>(
    item
      ? {
          title: item.title, slug: item.slug, category: item.category, year: item.year,
          badge: item.badge ?? '', description: item.description,
          published: item.published, thumbnail_path: item.thumbnail_path,
        }
      : { ...BLANK }
  )
  const [slugTouched, setSlugTouched] = useState(!!item)
  const [thumbFile, setThumbFile] = useState<File | null>(null)
  const [galleryFiles, setGalleryFiles] = useState<File[]>([])
  const [gallery, setGallery] = useState<GalleryImg[]>([])
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState('')
  const [layout, setLayout] = useState<unknown>(item?.layout ?? null)
  const [aiPrompt, setAiPrompt] = useState('')
  const [generating, setGenerating] = useState(false)
  const [aiMsg, setAiMsg] = useState('')

  useEffect(() => {
    if (item) supabase.from('work_item_images').select('*').eq('work_item_id', item.id).order('sort_order').then(({ data }) => setGallery((data ?? []) as GalleryImg[]))
  }, [item])

  async function generateLayout() {
    setGenerating(true); setAiMsg('')
    try {
      // Index order MUST match the renderer: thumbnail first, then gallery.
      const images = [
        ...(f.thumbnail_path ? [{ index: 0, caption: f.title }] : []),
        ...gallery.map((g, i) => ({ index: (f.thumbnail_path ? 1 : 0) + i, caption: g.caption })),
      ]
      const { data, error } = await supabase.functions.invoke('generate-work-layout', {
        body: { title: f.title, category: f.category, description: f.description, prompt: aiPrompt, images },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      const blocks = data?.blocks
      if (!Array.isArray(blocks) || !blocks.length) throw new Error('No layout returned. Try again.')
      setLayout(blocks)
      setAiMsg(`Layout generated (${blocks.length} sections). Save, then Preview to see it.`)
    } catch (e) {
      setAiMsg(e instanceof Error ? e.message : 'Generation failed.')
    } finally {
      setGenerating(false)
    }
  }

  function set<K extends keyof typeof f>(k: K, v: (typeof f)[K]) { setF((p) => ({ ...p, [k]: v })) }

  async function upload(file: File, prefix: string): Promise<string> {
    const ext = file.name.split('.').pop() || 'jpg'
    const path = `${prefix}/${Date.now()}-${Math.round(Math.random() * 1e6)}.${ext}`
    const { error } = await supabase.storage.from('work').upload(path, file, { upsert: false })
    if (error) throw error
    return path
  }

  async function save(e: FormEvent) {
    e.preventDefault()
    setBusy(true); setErr('')
    try {
      const base = f.slug || slugify(f.title)
      if (!f.title || !base) throw new Error('Please add a title.')

      // Make the slug unique so two items never collide (URLs must be unique).
      let slug = base
      let n = 2
      while (true) {
        const { data: clash } = await supabase
          .from('work_items').select('id').eq('slug', slug).maybeSingle()
        if (!clash || clash.id === item?.id) break
        slug = `${base}-${n++}`
      }

      let thumbnail_path = f.thumbnail_path
      if (thumbFile) thumbnail_path = await upload(thumbFile, slug)

      const payload = {
        title: f.title, slug, category: f.category, year: f.year,
        badge: f.badge || null, description: f.description,
        published: f.published, thumbnail_path, layout: layout ?? null,
        updated_at: new Date().toISOString(),
      }

      let itemId = item?.id
      if (item) {
        const { error } = await supabase.from('work_items').update(payload).eq('id', item.id)
        if (error) throw error
      } else {
        const { data, error } = await supabase.from('work_items').insert({ ...payload, sort_order: 0 }).select('id').single()
        if (error) throw error
        itemId = data.id
      }

      // new gallery uploads
      if (galleryFiles.length && itemId) {
        for (let i = 0; i < galleryFiles.length; i++) {
          const p = await upload(galleryFiles[i], slug)
          await supabase.from('work_item_images').insert({ work_item_id: itemId, storage_path: p, sort_order: gallery.length + i })
        }
      }
      onDone(item ? 'Item updated.' : 'Item added.')
    } catch (e2) {
      setErr(e2 instanceof Error ? e2.message : 'Something went wrong.')
      setBusy(false)
    }
  }

  async function removeGalleryImg(g: GalleryImg) {
    await supabase.from('work_item_images').delete().eq('id', g.id)
    setGallery((p) => p.filter((x) => x.id !== g.id))
  }

  return (
    <Shell>
      <button onClick={onCancel} className="text-white/40 text-xs uppercase tracking-[0.2em] mb-6">← Back</button>
      <h1 className="text-2xl font-black uppercase tracking-[0.05em] mb-8">{item ? 'Edit item' : 'New item'}</h1>
      <form onSubmit={save} className="flex flex-col gap-5 max-w-xl">
        <div>
          <label className="label">Title</label>
          <input required value={f.title} onChange={(e) => { set('title', e.target.value); if (!slugTouched) set('slug', slugify(e.target.value)) }} className="field" />
        </div>
        <div>
          <label className="label">URL slug — /work/{f.slug || 'your-slug'}</label>
          <input value={f.slug} onChange={(e) => { setSlugTouched(true); set('slug', slugify(e.target.value)) }} className="field" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label">Category</label>
            <select value={f.category} onChange={(e) => set('category', e.target.value)} className="field">
              {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="label">Year</label>
            <input value={f.year} onChange={(e) => set('year', e.target.value)} className="field" placeholder="2026" />
          </div>
        </div>
        <div>
          <label className="label">Badge (optional) — e.g. New, GDUSA 2025</label>
          <input value={f.badge} onChange={(e) => set('badge', e.target.value)} className="field" />
        </div>
        <div>
          <label className="label">Description (shown on the detail page)</label>
          <textarea value={f.description} onChange={(e) => set('description', e.target.value)} className="field" rows={5} />
        </div>
        <div>
          <label className="label">Thumbnail {f.thumbnail_path && '(replace)'}</label>
          {f.thumbnail_path && !thumbFile && <img src={assetUrl(f.thumbnail_path)} alt="" className="w-28 h-28 object-cover mb-2" />}
          <input type="file" accept="image/*" onChange={(e) => setThumbFile(e.target.files?.[0] ?? null)} className="text-white/70 text-sm" />
        </div>

        {item && (
          <div>
            <label className="label">Gallery images</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {gallery.map((g) => (
                <div key={g.id} className="relative">
                  <img src={assetUrl(g.storage_path)} alt="" className="w-20 h-20 object-cover" />
                  <button type="button" onClick={() => removeGalleryImg(g)} className="absolute -top-2 -right-2 bg-red-600 text-white w-5 h-5 text-xs">×</button>
                </div>
              ))}
            </div>
          </div>
        )}
        <div>
          <label className="label">{item ? 'Add gallery images' : 'Gallery images (save first, then add more)'}</label>
          <input type="file" accept="image/*" multiple onChange={(e) => setGalleryFiles(Array.from(e.target.files ?? []))} className="text-white/70 text-sm" />
        </div>

        {/* ── AI layout ── */}
        <div className="border border-[#7c5fe6]/30 bg-[#7c5fe6]/[0.06] p-5">
          <label className="label !text-[#a894f0]">Design the page with AI</label>
          {item ? (
            <>
              <p className="text-white/50 text-xs mb-3 leading-relaxed">
                Describe how you want it to look — the AI arranges your description
                and images into a custom page. Leave blank to let it decide.
              </p>
              <textarea
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                className="field mb-3"
                rows={3}
                placeholder="e.g. Lead with the packaging shots, feel premium, pull the award out as a highlight."
              />
              <div className="flex flex-wrap items-center gap-3">
                <button type="button" onClick={generateLayout} disabled={generating} className="btn">
                  {generating ? 'Designing…' : layout ? 'Regenerate layout' : 'Generate layout'}
                </button>
                {layout != null && (
                  <>
                    <span className="text-[#a894f0] text-xs">Custom layout active</span>
                    <button type="button" onClick={() => { setLayout(null); setAiMsg('Reverted to the simple template.') }} className="text-white/40 text-xs underline">
                      Clear (use simple template)
                    </button>
                  </>
                )}
              </div>
              {aiMsg && <p className="text-white/60 text-xs mt-3">{aiMsg}</p>}
            </>
          ) : (
            <p className="text-white/50 text-xs">Save the item first (with images), then generate an AI layout.</p>
          )}
        </div>

        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={f.published} onChange={(e) => set('published', e.target.checked)} />
          Published (visible on the site)
        </label>

        {err && <p className="text-red-400 text-sm">{err}</p>}
        <div className="flex gap-3">
          <button className="btn" disabled={busy}>{busy ? 'Saving…' : 'Save'}</button>
          <button type="button" onClick={onCancel} className="btn-ghost">Cancel</button>
        </div>
      </form>
    </Shell>
  )
}
