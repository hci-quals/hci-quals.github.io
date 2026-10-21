import { useId, type ReactNode } from 'react'

/*
 * The recurring diagram: a person (left) and a computational medium (right) in a loop of action and feedback.
 * The base is drawn quietly; each big idea adds its own complication in full ink.
 */

const INK = { stroke: 'var(--hq-ink)' }
const BASE = { stroke: 'var(--hq-faint)' }
const DASH = '3 3'

const Human = ({ x = 40, y = 0, s = 1, style = BASE, dash }: { x?: number; y?: number; s?: number; style?: object; dash?: string }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`} style={style} strokeDasharray={dash}>
    <circle cx={0} cy={48} r={9} />
    <path d="M-17 90 Q-17 66 0 66 Q17 66 17 90" />
  </g>
)

const Medium = ({ x = 180, y = 40, size = 40, style = BASE, dash, dots = true }: { x?: number; y?: number; size?: number; style?: object; dash?: string; dots?: boolean }) => {
  const step = size / 4
  return (
    <g style={style} strokeDasharray={dash}>
      <rect x={x} y={y} width={size} height={size} rx={size / 5} />
      {dots &&
        [1, 2, 3].flatMap((i) => [1, 2, 3].map((j) => <circle key={`${i}${j}`} cx={x + i * step} cy={y + j * step} r={1.1} style={{ fill: style === INK ? 'var(--hq-ink)' : 'var(--hq-faint)', stroke: 'none' }} />))}
    </g>
  )
}

function Frame({ label, h = 120, children }: { label: string; h?: number; children: (m: { ink: string; base: string }) => ReactNode }) {
  const id = useId().replace(/:/g, '')
  const m = { ink: `url(#${id}i)`, base: `url(#${id}b)` }
  return (
    <svg viewBox={`0 0 240 ${h}`} role="img" aria-label={label} className="h-auto w-full" fill="none" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
      <defs>
        {(['i', 'b'] as const).map((k) => (
          <marker key={k} id={`${id}${k}`} viewBox="0 0 10 10" refX={8} refY={5} markerWidth={7} markerHeight={7} orient="auto-start-reverse">
            <path d="M1 1 L9 5 L1 9" style={{ stroke: k === 'i' ? 'var(--hq-ink)' : 'var(--hq-faint)', fill: 'none' }} strokeWidth={1.4} />
          </marker>
        ))}
      </defs>
      {children(m)}
    </svg>
  )
}

const TOP = 'M66 52 Q120 34 170 52'
const BOTTOM = 'M170 72 Q120 90 66 72'

/** The plain loop, for reuse by variants that only add to it. */
const Loop = ({ m, top = BASE, bottom = BASE }: { m: { ink: string; base: string }; top?: object; bottom?: object }) => (
  <>
    <path d={TOP} style={top} markerEnd={top === INK ? m.ink : m.base} />
    <path d={BOTTOM} style={bottom} markerEnd={bottom === INK ? m.ink : m.base} />
  </>
)

const VARIANTS: Record<string, { label: string; h?: number; draw: (m: { ink: string; base: string }) => ReactNode }> = {
  augmentation: {
    label: 'The loop with the medium widens the person: rings grow around them.',
    draw: (m) => (
      <>
        <Human /> <Medium /> <Loop m={m} bottom={INK} />
        <circle cx={40} cy={68} r={30} style={INK} opacity={0.55} />
        <circle cx={40} cy={68} r={40} style={INK} opacity={0.25} />
      </>
    ),
  },
  models: {
    label: 'A law written above the loop predicts how long the action will take.',
    draw: (m) => (
      <>
        <Human /> <Medium /> <Loop m={m} top={INK} />
        <path d="M70 22 L166 22" style={INK} />
        {Array.from({ length: 9 }, (_, i) => (
          <path key={i} d={`M${70 + i * 12} 22 L${70 + i * 12} ${i % 2 ? 26 : 28}`} style={INK} />
        ))}
        <text x={118} y={14} textAnchor="middle" fontSize={9} fontStyle="italic" fontFamily="var(--font-serif)" style={{ fill: 'var(--hq-ink)' }}>
          T = a + b log₂(D/W + 1)
        </text>
      </>
    ),
  },
  sensemaking: {
    label: 'The person gathers scattered pieces from the medium and arranges them into a structure.',
    draw: (m) => (
      <>
        <Human /> <Medium dots={false} />
        {[[188, 50], [207, 47], [196, 63], [212, 70], [186, 72]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={2} style={{ fill: 'var(--hq-faint)', stroke: 'none' }} />
        ))}
        <path d={TOP} style={BASE} markerEnd={m.base} />
        <path d="M172 76 Q140 92 110 88" style={INK} markerEnd={m.ink} />
        <g style={INK}>
          <path d="M86 70 L72 82 M86 70 L86 84 M86 70 L100 82" />
          <circle cx={86} cy={68} r={2.6} style={{ fill: 'var(--hq-ink)', stroke: 'none' }} />
          {[72, 86, 100].map((x) => (
            <circle key={x} cx={x} cy={86} r={2.6} style={{ fill: 'var(--hq-ink)', stroke: 'none' }} />
          ))}
        </g>
      </>
    ),
  },
  'intuitive-theories': {
    label: 'The person acts on an imagined, slightly wrong version of the medium.',
    draw: (m) => (
      <>
        <Human /> <Medium /> <Loop m={m} />
        <circle cx={53} cy={35} r={2} style={INK} />
        <circle cx={60} cy={27} r={3} style={INK} />
        <ellipse cx={86} cy={17} rx={22} ry={13} style={INK} />
        <rect x={78} y={10} width={15} height={14} rx={3} style={INK} strokeDasharray="2 2" transform="rotate(-14 85 17)" />
      </>
    ),
  },
  offloading: {
    label: 'Something held in the head moves out into the medium, and person and medium think together.',
    draw: (m) => (
      <>
        <Human /> <Medium /> <Loop m={m} />
        <circle cx={40} cy={48} r={3} style={INK} strokeDasharray="1.5 1.5" />
        <path d="M46 36 Q120 -2 196 42" style={INK} markerEnd={m.ink} />
        <circle cx={200} cy={50} r={4} style={{ fill: 'var(--hq-ink)', stroke: 'none' }} />
        <rect x={10} y={4} width={222} height={98} rx={26} style={INK} opacity={0.35} strokeDasharray="4 4" />
      </>
    ),
  },
  situated: {
    label: 'The plan is a straight dashed line; the action bends around what the situation presents.',
    draw: (m) => (
      <>
        <Human /> <Medium />
        <path d="M66 52 L170 52" style={BASE} strokeDasharray={DASH} />
        <circle cx={100} cy={52} r={4} style={{ fill: 'var(--hq-faint)', stroke: 'none' }} />
        <circle cx={140} cy={52} r={4} style={{ fill: 'var(--hq-faint)', stroke: 'none' }} />
        <path d="M66 52 C80 52 86 36 100 36 S112 52 120 52 S128 68 140 68 S160 52 170 52" style={INK} markerEnd={m.ink} />
        <path d={BOTTOM} style={BASE} markerEnd={m.base} />
      </>
    ),
  },
  'direct-manipulation': {
    label: 'The distant medium and its long loop give way to a medium right at hand, where acting and seeing the result are one short step.',
    draw: (m) => (
      <>
        <Human />
        <g opacity={0.6}>
          <Medium dash={DASH} dots={false} />
          <path d="M138 40 Q156 40 170 50" style={BASE} strokeDasharray={DASH} />
          <path d="M170 74 Q156 84 138 84" style={BASE} strokeDasharray={DASH} />
        </g>
        <Medium x={100} y={45} size={34} style={INK} dots={false} />
        <rect x={111} y={56} width={12} height={12} rx={2} style={{ fill: 'var(--hq-ink)', stroke: 'none' }} />
        <path d="M64 62 L94 62" style={INK} markerEnd={m.ink} markerStart={m.ink} />
      </>
    ),
  },
  reification: {
    label: 'An abstraction inside the medium becomes an object the person can pick up.',
    draw: (m) => (
      <>
        <Human /> <Medium dots={false} />
        <text x={200} y={64} textAnchor="middle" fontSize={11} fontFamily="var(--font-serif)" fontStyle="italic" style={{ fill: 'var(--hq-faint)' }}>
          f(x)
        </text>
        <path d="M178 60 L144 60" style={BASE} strokeDasharray={DASH} markerEnd={m.base} />
        <g style={INK}>
          <path d="M118 56 L132 56 L132 70 L118 70 Z" />
          <path d="M118 56 L124 50 L138 50 L132 56 M138 50 L138 64 L132 70" />
        </g>
        <path d="M66 62 L110 62" style={INK} markerEnd={m.ink} />
      </>
    ),
  },
  representation: {
    label: 'The same numbers as a table and as a chart; only the chart reaches the person easily.',
    draw: (m) => (
      <>
        <Human />
        <Medium x={176} y={16} size={34} dots={false} dash={DASH} />
        <text x={193} y={36} textAnchor="middle" fontSize={8} style={{ fill: 'var(--hq-faint)' }}>
          12 7 31
        </text>
        <Medium x={176} y={62} size={40} dots={false} style={INK} />
        <path d="M188 94 L188 84 M196 94 L196 78 M204 94 L204 70" style={INK} strokeWidth={3} strokeLinecap="butt" />
        <path d="M172 34 Q120 38 66 54" style={BASE} strokeDasharray={DASH} markerEnd={m.base} />
        <path d="M172 84 Q120 92 66 74" style={INK} strokeWidth={2.2} markerEnd={m.ink} />
      </>
    ),
  },
  background: {
    label: 'The person looks ahead; the medium sits quietly at the edge of attention.',
    draw: () => (
      <>
        <Human />
        <path d="M66 52 L160 52" style={BASE} strokeDasharray="1 4" />
        <Medium x={196} y={78} size={22} dots={false} dash="2 3" />
        <path d="M190 78 A18 18 0 0 1 224 72" style={INK} opacity={0.5} />
        <path d="M184 74 A26 26 0 0 1 230 64" style={INK} opacity={0.25} />
      </>
    ),
  },
  malleability: {
    label: 'The person reaches into the medium and drags it into a new shape.',
    draw: (m) => (
      <>
        <Human /> <Medium />
        <path d="M188 40 L216 40 Q230 40 230 54 L230 78 Q230 92 216 92 L188 92 Q180 92 180 84" style={INK} strokeDasharray={DASH} />
        <circle cx={230} cy={92} r={3} style={{ ...INK, fill: 'var(--hq-ink)' }} />
        <path d={TOP} style={INK} markerEnd={m.ink} />
        <path d={BOTTOM} style={BASE} markerEnd={m.base} />
      </>
    ),
  },
  'end-user-programming': {
    label: 'The person writes into the medium: a few lines of their own program take shape inside it.',
    draw: (m) => (
      <>
        <Human /> <Medium style={INK} dots={false} />
        {[
          [188, 50, 24],
          [194, 58, 16],
          [194, 66, 20],
          [188, 74, 12],
        ].map(([x, y, w]) => (
          <path key={y} d={`M${x} ${y} h${w}`} style={INK} strokeWidth={2.4} />
        ))}
        <path d={TOP} style={INK} markerEnd={m.ink} />
        <path d={BOTTOM} style={BASE} markerEnd={m.base} />
      </>
    ),
  },
  'common-ground': {
    label: 'Two people share one medium; their thought bubbles overlap where they understand the same thing.',
    draw: (m) => (
      <>
        <Human x={30} />
        <Human x={210} />
        <Medium x={104} y={58} size={32} />
        <path d="M54 76 L98 74" style={BASE} markerEnd={m.base} />
        <path d="M186 76 L142 74" style={BASE} markerEnd={m.base} />
        <circle cx={100} cy={24} r={20} style={INK} />
        <circle cx={140} cy={24} r={20} style={INK} />
        <path d="M120 8 A20 20 0 0 1 120 40 A20 20 0 0 1 120 8 Z" style={{ fill: 'var(--hq-ink)', stroke: 'none' }} opacity={0.18} />
      </>
    ),
  },
  'beyond-being-there': {
    label: 'Two people at different times meet through a medium that keeps a lasting record, something no meeting could.',
    draw: (m) => (
      <>
        <Human x={30} />
        <Human x={210} dash={DASH} />
        <Medium x={100} y={44} size={40} dots={false} style={INK} />
        {[56, 64, 72].map((y, i) => (
          <path key={y} d={`M108 ${y} h${24 - i * 6}`} style={INK} />
        ))}
        <circle cx={140} cy={44} r={7} style={{ ...INK, fill: 'var(--hq-paper)' }} />
        <path d="M140 40 L140 44 L143 46" style={INK} />
        <path d="M54 72 L94 66" style={BASE} markerEnd={m.base} />
        <path d="M146 66 L186 72" style={BASE} markerEnd={m.base} />
      </>
    ),
  },
  meta: {
    label: 'Several observers watch the same loop from different positions, each seeing part of it.',
    h: 132,
    draw: (m) => {
      const Eye = ({ x, y }: { x: number; y: number }) => (
        <g style={INK}>
          <path d={`M${x - 9} ${y} Q${x} ${y - 7} ${x + 9} ${y} Q${x} ${y + 7} ${x - 9} ${y} Z`} />
          <circle cx={x} cy={y} r={2} style={{ fill: 'var(--hq-ink)', stroke: 'none' }} />
        </g>
      )
      return (
        <>
          <Human /> <Medium /> <Loop m={m} />
          <Eye x={120} y={12} />
          <Eye x={120} y={120} />
          <Eye x={232} y={116} />
          <path d="M112 20 L92 40 M128 20 L148 40 M114 112 L96 86 M126 112 L144 86 M226 110 L214 84" style={INK} opacity={0.4} strokeDasharray="1 3" />
        </>
      )
    },
  },
}

export function Motif({ idea }: { idea: string }) {
  const v = VARIANTS[idea]
  if (!v) return null
  return (
    <Frame label={v.label} h={v.h}>
      {v.draw}
    </Frame>
  )
}
