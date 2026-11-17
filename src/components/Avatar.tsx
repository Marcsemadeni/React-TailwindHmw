type Tone = 'blue' | 'orange' | 'purple' | 'green'
type Size = 'sm' | 'md' | 'lg'

const tones: Record<Tone, string> = {
  blue: 'bg-info-bg text-primary',
  orange: 'bg-orange-100 text-orange-800',
  purple: 'bg-purple-100 text-purple-800',
  green: 'bg-success-bg text-success',
}
const sizes: Record<Size, string> = {
  sm: 'h-7 w-7 text-[10px]',
  md: 'h-9 w-9 text-xs',
  lg: 'h-16 w-16 text-xl',
}

function initials(name: string): string {
  const letters = name.trim().split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase())
  return letters.join('') || '?'
}

type Props = { name: string; size?: Size; tone?: Tone }

export default function Avatar({ name, size = 'md', tone = 'blue' }: Props) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full font-semibold ${sizes[size]} ${tones[tone]}`}
    >
      {initials(name)}
    </div>
  )
}
