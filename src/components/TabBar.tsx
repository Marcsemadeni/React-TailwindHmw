export type TabId = 'dashboard' | 'mini' | 'profile'

type Props = {
  tabs: { id: TabId; label: string }[]
  active: TabId
  onChange: (id: TabId) => void
}

export default function TabBar({ tabs, active, onChange }: Props) {
  return (
    <div role="tablist" className="flex gap-1 overflow-x-auto border-b border-line bg-white px-4">
      {tabs.map((t) => (
        <button
          key={t.id}
          role="tab"
          aria-selected={active === t.id}
          onClick={() => onChange(t.id)}
          className={`cursor-pointer whitespace-nowrap border-b-2 px-4 py-3 text-sm font-semibold transition-colors ${
            active === t.id
              ? 'border-primary text-primary'
              : 'border-transparent text-muted hover:text-ink'
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  )
}
