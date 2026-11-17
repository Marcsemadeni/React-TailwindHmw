import type { ReactNode } from 'react'

export type BadgeVariant = 'success' | 'warning' | 'info' | 'neutral'

const styles: Record<BadgeVariant, string> = {
  success: 'bg-success-bg text-success',
  warning: 'bg-warning-bg text-warning',
  info: 'bg-info-bg text-info',
  neutral: 'bg-neutral-bg text-neutral',
}

type Props = { variant: BadgeVariant; children: ReactNode }

export default function StatusBadge({ variant, children }: Props) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-0.5 text-[11px] font-semibold ${styles[variant] ?? styles.neutral}`}
    >
      {children}
    </span>
  )
}
