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
    label: 'The medium amplifies the person: rings widen around them.',
    draw: (m) => (
      <>
        <Human /> <Medium /> <Loop m={m} bottom={INK} />
        <circle cx={40} cy={68} r={30} style={INK} opacity={0.55} />
        <circle cx={40} cy={68} r={40} style={INK} opacity={0.25} />
      </>
    ),
  },
  'invisible-work': {
    label: 'Hidden workers beneath the medium keep it running.',
    h: 132,
    draw: (m) => (
      <>
        <Human /> <Medium /> <Loop m={m} />
        <Human x={188} y={64} s={0.5} style={INK} dash={DASH} />
        <Human x={212} y={64} s={0.5} style={INK} dash={DASH} />
      </>
    ),
  },
  'lawful-behaviour': {
    label: 'The action is measured along a ruler and predicted by a law.',
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
  foraging: {
    label: 'The person hops between patches of information, following scent to the richest one.',
    draw: (m) => (
      <>
        <Human />
        <Medium x={148} y={18} size={22} dots={false} dash={DASH} />
        <Medium x={198} y={14} size={22} dots={false} dash={DASH} />
        <Medium x={182} y={58} size={38} style={INK} />
        <path d="M64 54 Q100 36 146 32 M172 26 Q184 18 196 22 M208 38 Q212 48 204 54" style={INK} strokeDasharray="1 4" markerEnd={m.ink} />
        <path d="M178 84 Q122 98 66 74" style={BASE} markerEnd={m.base} />
      </>
    ),
  },
  'mental-models': {
    label: 'The person acts on an imagined, slightly wrong version of the medium.',
    draw: (m) => (
      <>
        <Human /> <Medium /> <Loop m={m} />
        <circle cx={53} cy={35} r={2} style={INK} />
        <circle cx={60} cy={27} r={3} style={INK} />
        <ellipse cx={86} cy={17} rx={22} ry={13} style={INK} />
        <rect x={78} y={10} width={15} height={14} rx={3} style={INK} strokeDasharray="2 2" transform="rotate(-12 85 17)" />
      </>
    ),
  },
  'distributed-cognition': {
    label: 'A boundary drawn around person and medium together: the thinking system.',
    draw: (m) => (
      <>
        <Human /> <Medium /> <Loop m={m} />
        <rect x={10} y={22} width={222} height={80} rx={24} style={INK} strokeDasharray="5 4" />
      </>
    ),
  },
  'situated-action': {
    label: 'A straight dashed plan, and the winding path the action actually takes.',
    draw: (m) => (
      <>
        <Human /> <Medium />
        <path d="M66 52 L170 52" style={BASE} strokeDasharray={DASH} />
        <path d="M66 52 C84 28 96 66 114 44 S142 26 150 50 S164 58 170 52" style={INK} markerEnd={m.ink} />
        <path d={BOTTOM} style={BASE} markerEnd={m.base} />
      </>
    ),
  },
  gulfs: {
    label: 'Both arrows break across a gap between intention and effect.',
    draw: (m) => (
      <>
        <Human /> <Medium />
        <path d="M66 52 Q86 42 104 40" style={INK} />
        <path d="M136 40 Q154 42 170 52" style={INK} markerEnd={m.ink} />
        <path d="M170 72 Q154 80 136 82" style={INK} />
        <path d="M104 82 Q86 80 66 72" style={INK} markerEnd={m.ink} />
        <path d="M112 30 L112 92 M128 30 L128 92" style={BASE} strokeDasharray="2 3" />
        <text x={120} y={20} textAnchor="middle" fontSize={8} style={{ fill: 'var(--hq-faint)' }}>
          execution
        </text>
        <text x={120} y={106} textAnchor="middle" fontSize={8} style={{ fill: 'var(--hq-faint)' }}>
          evaluation
        </text>
      </>
    ),
  },
  reification: {
    label: 'An abstraction leaves the medium as an object the person can grasp.',
    draw: (m) => (
      <>
        <Human /> <Medium />
        <path d="M178 60 L150 60" style={BASE} strokeDasharray={DASH} />
        <g style={INK}>
          <path d="M118 56 L132 56 L132 70 L118 70 Z" />
          <path d="M118 56 L124 50 L138 50 L132 56 M138 50 L138 64 L132 70" />
        </g>
        <path d="M66 60 L110 60" style={INK} markerEnd={m.ink} />
      </>
    ),
  },
  representation: {
    label: 'The same data as a table and as a chart; only the chart reaches the person easily.',
    draw: (m) => (
      <>
        <Human />
        <Medium x={172} y={20} size={30} dots={false} dash={DASH} />
        <text x={187} y={39} textAnchor="middle" fontSize={8} fontFamily="var(--font-sans)" style={{ fill: 'var(--hq-faint)' }}>
          12 7 31
        </text>
        <Medium x={186} y={58} size={40} dots={false} style={INK} />
        <path d="M196 88 L196 78 M204 88 L204 72 M212 88 L212 66" style={INK} strokeWidth={3} strokeLinecap="butt" />
        <path d="M66 52 Q120 30 166 34" style={BASE} markerEnd={m.base} />
        <path d="M180 84 Q120 96 66 74" style={INK} strokeWidth={2.2} markerEnd={m.ink} />
      </>
    ),
  },
  calm: {
    label: 'The medium sits faintly at the periphery, glowing rather than demanding attention.',
    draw: () => (
      <>
        <Human />
        <path d="M66 62 L150 62" style={BASE} strokeDasharray="1 4" />
        <Medium x={196} y={78} size={22} dots={false} dash="2 3" />
        <path d="M190 78 A18 18 0 0 1 224 72" style={INK} opacity={0.5} />
        <path d="M184 74 A26 26 0 0 1 230 64" style={INK} opacity={0.25} />
      </>
    ),
  },
  framing: {
    label: 'The arrow branches toward several possible problems, and one is chosen.',
    draw: (m) => (
      <>
        <Human />
        <Medium x={176} y={10} size={26} dots={false} dash={DASH} />
        <Medium x={188} y={46} size={30} style={INK} />
        <Medium x={176} y={86} size={26} dots={false} dash={DASH} />
        <path d="M66 56 Q110 56 128 56" style={INK} />
        <path d="M128 56 Q150 26 170 24" style={BASE} markerEnd={m.base} />
        <path d="M128 56 Q150 60 182 61" style={INK} markerEnd={m.ink} />
        <path d="M128 56 Q150 98 170 98" style={BASE} markerEnd={m.base} />
      </>
    ),
  },
  malleability: {
    label: 'The person reaches into the medium and reshapes it.',
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
  'common-ground': {
    label: 'Two people share one medium, with an arc of awareness between them.',
    draw: (m) => (
      <>
        <Human x={30} />
        <Human x={210} />
        <Medium x={104} y={48} size={32} />
        <path d="M54 72 L98 66" style={BASE} markerEnd={m.base} />
        <path d="M186 72 L142 66" style={BASE} markerEnd={m.base} />
        <path d="M44 30 Q120 -8 196 30" style={INK} strokeDasharray="1 4" markerEnd={m.ink} markerStart={m.ink} />
      </>
    ),
  },
  values: {
    label: 'The medium sits on a tipped scale: it leans to one side.',
    draw: (m) => (
      <>
        <Human /> <Loop m={m} />
        <g transform="rotate(-9 200 60)">
          <Medium />
        </g>
        <path d="M174 96 L228 88" style={INK} />
        <path d="M201 92 L195 104 L207 104 Z" style={INK} />
      </>
    ),
  },
  participation: {
    label: 'Several people, not one, help shape the medium.',
    h: 132,
    draw: (m) => (
      <>
        <Human /> <Medium /> <Loop m={m} />
        <Human x={110} y={62} s={0.55} style={INK} />
        <Human x={140} y={66} s={0.55} style={INK} />
        <path d="M120 104 Q160 104 182 84 M150 108 Q176 104 192 86" style={INK} markerEnd={m.ink} />
      </>
    ),
  },
  'building-is-knowing': {
    label: 'Building the medium itself gives off new knowledge.',
    draw: (m) => (
      <>
        <Human /> <Medium style={INK} /> <Loop m={m} />
        <path d="M200 36 L200 26" style={INK} strokeDasharray="2 2" />
        <path d="M200 2 L203 11 L212 14 L203 17 L200 26 L197 17 L188 14 L197 11 Z" style={{ ...INK, fill: 'var(--hq-ink)' }} />
      </>
    ),
  },
  pluralism: {
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
