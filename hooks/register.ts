import type { EngineInterface, Register, SessionRateLimit } from 'claude-code'

const LABEL: Record<string, string> = { five_hour: 'Munkamenet', seven_day: 'Heti' }
const WARN = [80, 95]
const warned = new Set<string>()

function show($: EngineInterface, limits: SessionRateLimit[]): void {
  const parts = limits
    .filter(l => l.kind in LABEL)
    .map(l => `${LABEL[l.kind]}: ${Math.round(l.percentUsed)}%`)
  $.ui.status(parts.length ? `Keret – ${parts.join(' · ')}` : undefined)

  for (const l of limits) {
    for (const t of WARN) {
      const key = `${l.kind}:${t}`
      if (l.percentUsed >= t && !warned.has(key)) {
        warned.add(key)
        $.ui.toast(`${LABEL[l.kind] ?? l.kind} keret: ${Math.round(l.percentUsed)}% elhasználva`)
      }
    }
  }
}

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const usage = await $.session.usage()
    show($, usage.rateLimits)
    return next(e)
  })

  on('session.measure', ($, e, next) => {
    show($, e.rateLimits)
    return next(e)
  })
}
