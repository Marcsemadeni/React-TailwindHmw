import type { ReactNode } from 'react'

type Props = { className?: string; children: ReactNode }

export default function Card({ className = '', children }: Props) {
  return (
    <div className={`rounded-card border border-line bg-white shadow-card ${className}`}>
      {children}
    </div>
  )
}
