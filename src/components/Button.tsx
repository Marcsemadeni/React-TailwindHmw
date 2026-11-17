import type { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'accent' | 'outline'

const styles: Record<Variant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-hover border border-transparent',
  accent: 'bg-accent text-white hover:bg-accent-hover border border-transparent',
  outline: 'bg-white text-ink border border-line hover:bg-page',
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }

export default function Button({ variant = 'primary', className = '', ...rest }: Props) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-xs font-semibold transition-colors cursor-pointer ${styles[variant] ?? styles.primary} ${className}`}
      {...rest}
    />
  )
}
