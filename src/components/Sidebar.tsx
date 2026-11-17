import Avatar from './Avatar'

type Props = { open: boolean; onClose: () => void }

const workspace = ['Overview', 'Employees', 'Projects', 'Reports']
const management = ['Settings', 'Help Center']

function Group({ title, items, active }: { title: string; items: string[]; active?: string }) {
  return (
    <div className="mt-6">
      <p className="px-3 text-[10px] font-semibold uppercase tracking-wider text-white/40">{title}</p>
      <ul className="mt-2 space-y-1">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium ${
                item === active ? 'bg-sidebar-active text-white' : 'text-white/70 hover:bg-white/5'
              }`}
            >
              {item === active && <span className="h-2 w-2 rounded-sm bg-accent" />}
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Sidebar({ open, onClose }: Props) {
  return (
    <>
      {open && <div className="fixed inset-0 z-20 bg-black/40 lg:hidden" onClick={onClose} />}
      <aside
        className={`fixed inset-y-0 left-0 z-30 flex w-56 flex-col bg-sidebar p-4 transition-transform lg:static lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center gap-2 px-2 pt-1">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-sm font-bold text-white">
            N
          </div>
          <span className="text-lg font-bold text-white">Northstar</span>
        </div>
        <Group title="Workspace" items={workspace} active="Overview" />
        <Group title="Management" items={management} />
        <div className="mt-auto flex items-center gap-2 border-t border-white/10 px-2 pt-4">
          <Avatar name="Casey Jordan" size="sm" tone="orange" />
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-white">Casey Jordan</p>
            <p className="truncate text-[10px] text-white/50">Administrator</p>
          </div>
        </div>
      </aside>
    </>
  )
}
