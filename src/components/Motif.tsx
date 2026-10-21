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

/** A small caption inside a diagram. `ink` for the idea's own addition, otherwise muted. */
const Note = ({ x, y, children, ink, anchor = 'middle' }: { x: number; y: number; children: string; ink?: boolean; anchor?: 'start' | 'middle' | 'end' }) => (
  <text x={x} y={y} textAnchor={anchor} fontSize={8.5} style={{ fill: ink ? 'var(--hq-ink)' : 'var(--hq-muted)' }}>
    {children}
  </text>
)
const Dot = ({ x, y, r = 2, ink }: { x: number; y: number; r?: number; ink?: boolean }) => (
  <circle cx={x} cy={y} r={r} style={{ fill: ink ? 'var(--hq-ink)' : 'var(--hq-faint)', stroke: 'none' }} />
)

const VARIANTS: Record<string, { label: string; h?: number; draw: (m: { ink: string; base: string }) => ReactNode }> = {
  // Two rows: the medium working alone with the person dropped (faint), against the person kept in the loop and enlarged.
  augmentation: {
    label: 'Two versions: automation, where the medium works alone and the person drops out; augmentation, where the person stays in the loop and grows more capable.',
    h: 132,
    draw: (m) => (
      <>
        <g opacity={0.45}>
          <Human x={44} y={-18} s={0.55} dash={DASH} />
          <Medium x={176} y={4} size={26} />
          <path d="M206 10 A9 9 0 1 1 206 24" style={BASE} markerEnd={m.base} />
          <Note x={110} y={22}>automation: works alone</Note>
        </g>
        <path d="M8 62 L232 62" style={BASE} strokeDasharray="1 3" />
        <Human x={44} y={36} s={0.75} style={INK} />
        <circle cx={44} cy={36 + 62 * 0.75} r={24} style={INK} opacity={0.35} />
        <Medium x={176} y={82} size={26} style={INK} />
        <path d="M74 88 Q122 78 170 90" style={INK} markerEnd={m.ink} />
        <path d="M170 102 Q122 112 74 102" style={INK} markerEnd={m.ink} />
        <Note x={120} y={126} ink>
          augmentation: the person grows
        </Note>
      </>
    ),
  },
  // A simple model of the person (Fitts' law) sits above the loop and predicts the action before it happens.
  models: {
    label: 'A simple model, Fitts’ law, sits above the loop and predicts how long the person’s action will take.',
    draw: (m) => (
      <>
        <Human /> <Medium /> <Loop m={m} top={INK} />
        <rect x={70} y={4} width={100} height={20} rx={5} style={INK} />
        <text x={120} y={18} textAnchor="middle" fontSize={9} fontStyle="italic" fontFamily="var(--font-serif)" style={{ fill: 'var(--hq-ink)' }}>
          T = a + b log₂(2D/W)
        </text>
        <path d="M120 24 L120 38" style={INK} strokeDasharray="2 2" markerEnd={m.ink} />
        <Note x={176} y={17} anchor="start" ink>
          model
        </Note>
        <Note x={120} y={104}>
          predicts the action
        </Note>
      </>
    ),
  },
  // Scattered findings come back from the medium; the work is arranging them into a structure.
  sensemaking: {
    label: 'Scattered pieces come back from the medium, and the person arranges them into a structure.',
    draw: (m) => (
      <>
        <Human /> <Medium dots={false} />
        {[[188, 50], [207, 47], [196, 63], [212, 70], [186, 72]].map(([x, y], i) => (
          <Dot key={i} x={x} y={y} />
        ))}
        <path d={TOP} style={BASE} markerEnd={m.base} />
        <path d="M172 76 Q140 92 112 86" style={BASE} markerEnd={m.base} />
        <g style={INK}>
          <path d="M86 66 L72 80 M86 66 L86 80 M86 66 L100 80" />
          <Dot x={86} y={64} r={2.6} ink />
          {[72, 86, 100].map((x) => (
            <Dot key={x} x={x} y={82} r={2.6} ink />
          ))}
        </g>
        <Note x={200} y={94}>
          scattered
        </Note>
        <Note x={86} y={100} ink>
          structure
        </Note>
      </>
    ),
  },
  // The action is aimed at the person's theory of the system (dashed), which differs from the system itself.
  'intuitive-theories': {
    label: 'The person aims their action at their own theory of the system, drawn dashed and slightly off from the real system.',
    draw: (m) => (
      <>
        <Human /> <Medium />
        <rect x={158} y={22} width={40} height={40} rx={8} style={INK} strokeDasharray={DASH} transform="rotate(-10 178 42)" />
        <path d="M66 50 Q110 30 152 38" style={INK} markerEnd={m.ink} />
        <path d={BOTTOM} style={BASE} markerEnd={m.base} />
        <Note x={170} y={14} ink>
          their theory
        </Note>
        <Note x={200} y={96}>
          the system
        </Note>
      </>
    ),
  },
  // Something held in the head moves into the medium and is retrieved when needed.
  offloading: {
    label: 'An item held in the head is offloaded into the medium and retrieved later, so head and medium think together.',
    draw: (m) => (
      <>
        <Human /> <Medium dots={false} />
        <rect x={36} y={44} width={8} height={8} rx={1.5} style={INK} strokeDasharray="1.5 1.5" />
        <rect x={194} y={54} width={12} height={12} rx={2} style={{ fill: 'var(--hq-ink)', stroke: 'none' }} />
        <path d={TOP} style={INK} markerEnd={m.ink} />
        <path d={BOTTOM} style={INK} markerEnd={m.ink} />
        <Note x={118} y={30} ink>
          offload
        </Note>
        <Note x={118} y={100} ink>
          retrieve
        </Note>
      </>
    ),
  },
  // The plan is a straight dashed route; the action bends around what the situation turns up.
  situated: {
    label: 'The plan is a straight dashed route; the action bends around what the situation turns up along the way.',
    draw: (m) => (
      <>
        <Human /> <Medium />
        <path d="M66 52 L170 52" style={BASE} strokeDasharray={DASH} />
        <Dot x={100} y={52} r={4} />
        <Dot x={140} y={52} r={4} />
        <path d="M66 52 C80 52 86 36 100 36 S112 52 120 52 S128 68 140 68 S160 52 170 52" style={INK} markerEnd={m.ink} />
        <Note x={118} y={24}>
          plan
        </Note>
        <Note x={140} y={84} ink>
          action
        </Note>
      </>
    ),
  },
  // The person acts on the object itself, and the object moves right there: action and result are one thing.
  'direct-manipulation': {
    label: 'The person grabs an object inside the medium and drags it; the object moves under their hand, so the action is its own result.',
    draw: (m) => (
      <>
        <Human />
        <rect x={140} y={28} width={90} height={64} rx={12} style={BASE} />
        <rect x={152} y={52} width={16} height={16} rx={3} style={INK} strokeDasharray="2 2" opacity={0.6} />
        <path d="M172 60 L190 60" style={INK} strokeDasharray="1 2" />
        <rect x={194} y={52} width={16} height={16} rx={3} style={{ fill: 'var(--hq-ink)', stroke: 'none' }} />
        <path d="M66 60 Q130 60 190 60" style={INK} markerEnd={m.ink} />
        <Note x={104} y={50} ink>
          drag the object
        </Note>
        <Note x={185} y={106}>
          it moves as you act
        </Note>
      </>
    ),
  },
  // An abstraction inside the medium is turned into an object the person can pick up.
  reification: {
    label: 'An abstraction inside the medium is turned into an object the person can see, hold and reuse.',
    draw: (m) => (
      <>
        <Human /> <Medium dots={false} />
        <text x={200} y={64} textAnchor="middle" fontSize={11} fontFamily="var(--font-serif)" fontStyle="italic" style={{ fill: 'var(--hq-muted)' }}>
          f(x)
        </text>
        <path d="M178 60 L146 60" style={BASE} strokeDasharray={DASH} markerEnd={m.base} />
        <g style={INK}>
          <path d="M118 56 L132 56 L132 70 L118 70 Z" />
          <path d="M118 56 L124 50 L138 50 L132 56 M138 50 L138 64 L132 70" />
        </g>
        <path d="M66 62 L110 62" style={INK} markerEnd={m.ink} />
        <Note x={200} y={96}>
          abstraction
        </Note>
        <Note x={128} y={88} ink>
          object
        </Note>
      </>
    ),
  },
  // The same numbers as a table and as a chart; only the chart lets the person see the pattern.
  representation: {
    label: 'The same numbers as a table and as a chart; through the chart the person sees what the table hides.',
    draw: (m) => (
      <>
        <Human />
        <Medium x={176} y={12} size={34} dots={false} dash={DASH} />
        <text x={193} y={32} textAnchor="middle" fontSize={8} style={{ fill: 'var(--hq-muted)' }}>
          12 7 31
        </text>
        <Medium x={176} y={62} size={40} dots={false} style={INK} />
        <path d="M188 94 L188 84 M196 94 L196 78 M204 94 L204 70" style={INK} strokeWidth={3} strokeLinecap="butt" />
        <path d="M172 30 Q120 34 66 52" style={BASE} strokeDasharray={DASH} markerEnd={m.base} />
        <path d="M172 84 Q120 92 66 74" style={INK} strokeWidth={2.2} markerEnd={m.ink} />
        <Note x={193} y={57}>
          table
        </Note>
        <Note x={196} y={114} ink>
          chart
        </Note>
      </>
    ),
  },
  // Attention goes to the task ahead; the medium glows quietly at the edge until it matters.
  background: {
    label: 'The person’s attention is on their task; the medium sits quietly at the edge of attention.',
    draw: () => (
      <>
        <Human />
        <path d="M60 46 L150 30 M60 56 L150 72" style={INK} opacity={0.35} />
        <rect x={150} y={36} width={30} height={30} rx={4} style={INK} />
        <Medium x={204} y={84} size={22} dots={false} dash="2 3" />
        <path d="M198 84 A18 18 0 0 1 232 78" style={INK} opacity={0.4} />
        <Note x={165} y={26} ink>
          focus
        </Note>
        <Note x={215} y={118}>
          periphery
        </Note>
      </>
    ),
  },
  // The person drags the medium's edge into a new shape that fits them.
  malleability: {
    label: 'The person drags the edge of the medium into a new shape that fits their needs.',
    draw: (m) => (
      <>
        <Human /> <Medium />
        <path d="M188 40 L216 40 Q230 40 230 54 L230 78 Q230 92 216 92 L188 92 Q180 92 180 84" style={INK} strokeDasharray={DASH} />
        <Dot x={230} y={92} r={3} ink />
        <path d={TOP} style={INK} markerEnd={m.ink} />
        <path d={BOTTOM} style={BASE} markerEnd={m.base} />
        <Note x={238} y={108} ink anchor="end">
          reshaped by its user
        </Note>
      </>
    ),
  },
  // The person writes their own program straight into the medium; no programmer stands in between.
  'end-user-programming': {
    label: 'The person writes their own program straight into the medium, without a programmer in between.',
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
        <g opacity={0.5}>
          <Human x={112} y={-10} s={0.45} dash="2 2" />
          <Note x={126} y={18} anchor="start">
            no programmer needed
          </Note>
        </g>
        <path d="M66 62 Q120 56 172 62" style={INK} markerEnd={m.ink} />
        <Note x={118} y={78} ink>
          writes their own
        </Note>
      </>
    ),
  },
  // Two people share one medium; their understandings overlap where they agree.
  'common-ground': {
    label: 'Two people work through a shared medium; their understandings overlap in a region of common ground.',
    draw: (m) => (
      <>
        <Human x={30} />
        <Human x={210} />
        <Medium x={104} y={62} size={32} />
        <path d="M54 80 L98 78" style={BASE} markerEnd={m.base} />
        <path d="M186 80 L142 78" style={BASE} markerEnd={m.base} />
        <circle cx={100} cy={28} r={20} style={INK} />
        <circle cx={140} cy={28} r={20} style={INK} />
        <path d="M120 12 A20 20 0 0 1 120 44 A20 20 0 0 1 120 12 Z" style={{ fill: 'var(--hq-ink)', stroke: 'none' }} opacity={0.2} />
        <Note x={120} y={58} ink>
          common ground
        </Note>
      </>
    ),
  },
  // People at different times meet through a record the medium keeps; no meeting could do that.
  'beyond-being-there': {
    label: 'One person now and another later meet through a lasting record the medium keeps, something no meeting could.',
    draw: (m) => (
      <>
        <Human x={30} />
        <Human x={210} dash={DASH} />
        <Medium x={100} y={44} size={40} dots={false} style={INK} />
        {[56, 64, 72].map((y, i) => (
          <path key={y} d={`M108 ${y} h${24 - i * 6}`} style={INK} />
        ))}
        <path d="M54 72 L94 66" style={BASE} markerEnd={m.base} />
        <path d="M146 66 L186 72" style={BASE} markerEnd={m.base} />
        <Note x={30} y={108}>
          now
        </Note>
        <Note x={210} y={108}>
          later
        </Note>
        <Note x={120} y={100} ink>
          record
        </Note>
      </>
    ),
  },
  // Different methods look at the same loop from different places, and each sees only part of it.
  meta: {
    label: 'Three methods, experiment, fieldwork and building, look at the same loop from different places and each see part of it.',
    h: 140,
    draw: (m) => {
      const Eye = ({ x, y }: { x: number; y: number }) => (
        <g style={INK}>
          <path d={`M${x - 9} ${y} Q${x} ${y - 7} ${x + 9} ${y} Q${x} ${y + 7} ${x - 9} ${y} Z`} />
          <Dot x={x} y={y} ink />
        </g>
      )
      return (
        <>
          <Human /> <Medium /> <Loop m={m} />
          <Eye x={120} y={14} />
          <Eye x={60} y={118} />
          <Eye x={200} y={118} />
          <path d="M112 22 L96 40 M128 22 L144 40 M66 110 L84 84 M194 110 L176 86" style={INK} opacity={0.4} strokeDasharray="1 3" />
          <Note x={146} y={17} anchor="start">
            experiment
          </Note>
          <Note x={60} y={134}>
            fieldwork
          </Note>
          <Note x={200} y={134}>
            building
          </Note>
        </>
      )
    },
  },
}

/** The plain loop, labelled, as the key to every variant. */
export function BaseMotif() {
  const text = (x: number, y: number, t: string, anchor: 'middle' | 'start' = 'middle') => (
    <text x={x} y={y} textAnchor={anchor} fontSize={8.5} style={{ fill: 'var(--hq-muted)' }}>
      {t}
    </text>
  )
  return (
    <Frame label="A person and a computational medium in a loop: the person acts on the medium, and the medium responds." h={124}>
      {(m) => (
        <>
          <Human style={INK} /> <Medium style={INK} />
          <path d={TOP} style={INK} markerEnd={m.ink} />
          <path d={BOTTOM} style={INK} markerEnd={m.ink} />
          {text(118, 30, 'action')}
          {text(118, 100, 'response')}
          {text(40, 108, 'person')}
          {text(200, 96, 'medium')}
        </>
      )}
    </Frame>
  )
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
