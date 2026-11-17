import { useState, type ReactNode } from 'react'
import Avatar from '../components/Avatar'
import Button from '../components/Button'
import Card from '../components/Card'
import PageHeader from '../components/PageHeader'
import Sidebar from '../components/Sidebar'
import StatCard from '../components/StatCard'
import StatusBadge, { type BadgeVariant } from '../components/StatusBadge'

type Employee = {
  name: string
  email: string
  role: string
  status: string
  variant: BadgeVariant
  tone: 'orange' | 'blue' | 'purple' | 'green'
}

const employees: Employee[] = [
  { name: 'Avery Morgan', email: 'avery@northstar.co', role: 'UI Designer', status: 'Active', variant: 'success', tone: 'orange' },
  { name: 'Jordan Lee', email: 'jordan@northstar.co', role: 'Developer', status: 'Active', variant: 'success', tone: 'blue' },
  { name: 'Sam Rivera', email: 'sam@northstar.co', role: 'Product Manager', status: 'On Leave', variant: 'warning', tone: 'purple' },
  { name: 'Taylor Kim', email: 'taylor@northstar.co', role: 'Developer', status: 'Active', variant: 'success', tone: 'green' },
]

type Activity = { title: string; detail: string; tone: string }

const activity: Activity[] = [
  { title: 'Project completed', detail: 'Website refresh · 2h ago', tone: 'bg-success-bg text-success' },
  { title: 'New team member', detail: 'Morgan joined · Yesterday', tone: 'bg-info-bg text-info' },
  { title: 'Review requested', detail: 'Mobile app · Yesterday', tone: 'bg-warning-bg text-warning' },
]

function IconBubble({ tone, children }: { tone: string; children: ReactNode }) {
  return (
    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs ${tone}`}>
      {children}
    </span>
  )
}

export default function EmployeeDashboard() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex h-full bg-sidebar">
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="flex min-w-0 flex-1 flex-col overflow-auto bg-page lg:my-3 lg:mr-3 lg:rounded-xl">
        <header className="flex items-center gap-3 border-b border-line bg-white px-5 py-3">
          <button
            className="cursor-pointer rounded-md border border-line px-2 py-1 text-sm lg:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
          <p className="text-xs font-semibold text-ink">Workspace / Overview</p>
          <input
            type="search"
            placeholder="Search employees..."
            className="ml-auto w-40 rounded-lg border border-line bg-page px-3 py-1.5 text-xs outline-none focus:border-primary sm:w-56"
          />
          <Avatar name="Casey Jordan" size="sm" tone="orange" />
        </header>

        <div className="space-y-5 p-5 sm:p-7">
          <PageHeader
            title="Team overview"
            subtitle="Here's what's happening across your team today."
            action={<Button variant="accent">+ Add employee</Button>}
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              label="Total employees"
              value={48}
              subtext="+6 this month"
              subtextTone="success"
              icon={<IconBubble tone="bg-success-bg text-success">♙</IconBubble>}
            />
            <StatCard
              label="Active projects"
              value={12}
              subtext="+2 this month"
              subtextTone="success"
              icon={<IconBubble tone="bg-info-bg text-info">▤</IconBubble>}
            />
            <StatCard
              label="Tasks completed"
              value={186}
              subtext="+38% this week"
              subtextTone="success"
              icon={<IconBubble tone="bg-purple-100 text-purple-700">✓</IconBubble>}
            />
            <StatCard
              label="Pending reviews"
              value={7}
              subtext="Needs attention"
              subtextTone="warning"
              icon={<IconBubble tone="bg-warning-bg text-warning">!</IconBubble>}
            />
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_280px]">
            <Card className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-base font-bold text-ink">Team members</h2>
                  <p className="text-xs text-muted">People working across your organization</p>
                </div>
                <Button variant="outline">View all →</Button>
              </div>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[460px] text-left text-sm">
                  <thead>
                    <tr className="border-y border-line text-[10px] uppercase tracking-wider text-muted">
                      <th className="py-2 font-semibold">Employee</th>
                      <th className="py-2 font-semibold">Role</th>
                      <th className="py-2 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {employees.map((e) => (
                      <tr key={e.email}>
                        <td className="py-3">
                          <div className="flex items-center gap-3">
                            <Avatar name={e.name} tone={e.tone} />
                            <div className="min-w-0">
                              <p className="truncate text-xs font-semibold text-ink">{e.name}</p>
                              <p className="max-w-[160px] truncate text-[10px] text-muted">{e.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 text-xs text-ink">{e.role}</td>
                        <td className="py-3">
                          <StatusBadge variant={e.variant}>{e.status}</StatusBadge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-[11px] text-muted">Showing 4 of 48 employees</p>
            </Card>

            <Card className="flex flex-col p-5">
              <h2 className="text-base font-bold text-ink">Recent activity</h2>
              <p className="text-xs text-muted">Latest team updates</p>
              <ul className="mt-4 space-y-4">
                {activity.map((a) => (
                  <li key={a.title} className="flex items-start gap-3">
                    <IconBubble tone={a.tone}>•</IconBubble>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-ink">{a.title}</p>
                      <p className="truncate text-[10px] text-muted">{a.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-auto rounded-lg bg-success-bg px-3 py-2 text-[11px]">
                <p className="font-semibold text-success">Keep the team moving</p>
                <p className="text-success/80">Clock pending reviews this week.</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
