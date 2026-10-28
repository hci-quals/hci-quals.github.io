import { useEffect, useState } from 'react'

/** Id of the section whose top has most recently scrolled under the sticky header. `sections` must be memoized. */
export function useCurrentSection(sections: { id: string }[]) {
  const [current, setCurrent] = useState<string | null>(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      let cur: string | null = null
      for (const s of sections) {
        const el = document.getElementById(s.id)
        if (el && el.getBoundingClientRect().top <= 140) cur = s.id
      }
      setCurrent(cur)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    // Capture scrolls from any scrolling pane, not just the window: on wide screens the page scrolls inside a pane.
    document.addEventListener('scroll', onScroll, { passive: true, capture: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('scroll', onScroll, { capture: true })
      window.removeEventListener('resize', onScroll)
    }
  }, [sections])
  return current
}

export function jumpTo(id: string) {
  const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  document.getElementById(id)?.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' })
}
