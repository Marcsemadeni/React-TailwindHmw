import type { ReactNode } from 'react'

type Props = { title: string; subtitle?: string; action?: ReactNode }

export default function PageHeader({ title, subtitle, action }: Props) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-3">
      <div>
        <h1 className="text-3xl font-bold text-ink">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-muted">{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}
