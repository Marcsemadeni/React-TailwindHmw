import type { ReactNode } from 'react'
import Card from './Card'

type Tone = 'success' | 'warning' | 'muted'
const tones: Record<Tone, string> = {
  success: 'text-success',
  warning: 'text-warning',
  muted: 'text-muted',
}

type Props = {
  label: string
  value: string | number
  subtext?: string
  subtextTone?: Tone
  icon?: ReactNode
}

export default function StatCard({ label, value, subtext, subtextTone = 'muted', icon }: Props) {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-2">
        <span className="text-xs text-muted">{label}</span>
        {icon}
      </div>
      <div className="mt-2 text-4xl font-bold text-ink">{value}</div>
      {subtext && <div className={`mt-2 text-xs ${tones[subtextTone]}`}>{subtext}</div>}
    </Card>
  )
}
