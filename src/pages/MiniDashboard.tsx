import Button from '../components/Button'
import Card from '../components/Card'
import PageHeader from '../components/PageHeader'
import StatCard from '../components/StatCard'
import StatusBadge, { type BadgeVariant } from '../components/StatusBadge'

type Project = { name: string; status: string; variant: BadgeVariant }

const projects: Project[] = [
  { name: 'Website Redesign', status: 'In Progress', variant: 'info' },
  { name: 'Mobile Application', status: 'Planning', variant: 'neutral' },
  { name: 'Customer Portal', status: 'Completed', variant: 'success' },
]

export default function MiniDashboard() {
  return (
    <div className="min-h-full bg-page p-6 sm:p-10">
      <h1 className="text-2xl font-bold text-ink">Exercise 2 / Mini Dashboard</h1>
      <p className="mt-1 text-xs text-muted">Reference design • Desktop</p>

      <div className="mx-auto mt-8 max-w-4xl space-y-6">
        <PageHeader
          title="Dashboard"
          subtitle="Welcome back, Alex"
          action={<Button>+ New Project</Button>}
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard label="Projects" value={12} />
          <StatCard label="Tasks" value={48} />
          <StatCard label="Team Members" value={8} />
        </div>

        <Card className="p-6">
          <h2 className="text-base font-bold text-ink">Recent Projects</h2>
          <ul className="mt-3 divide-y divide-line">
            {projects.map((p) => (
              <li key={p.name} className="flex items-center justify-between gap-3 py-3 text-sm text-ink">
                <span className="truncate">{p.name}</span>
                <StatusBadge variant={p.variant}>{p.status}</StatusBadge>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  )
}
