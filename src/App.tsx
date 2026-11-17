import { useState } from 'react'
import TabBar, { type TabId } from './components/TabBar'
import EmployeeDashboard from './pages/EmployeeDashboard'
import MiniDashboard from './pages/MiniDashboard'
import ProfileCard from './pages/ProfileCard'

const tabs: { id: TabId; label: string }[] = [
  { id: 'dashboard', label: 'Employee Dashboard' },
  { id: 'mini', label: 'Mini Dashboard' },
  { id: 'profile', label: 'Profile Card' },
]

export default function App() {
  const [active, setActive] = useState<TabId>('dashboard')

  return (
    <div className="flex h-screen flex-col bg-page">
      <TabBar tabs={tabs} active={active} onChange={setActive} />
      <main className="min-h-0 flex-1 overflow-auto">
        {active === 'dashboard' && <EmployeeDashboard />}
        {active === 'mini' && <MiniDashboard />}
        {active === 'profile' && <ProfileCard />}
      </main>
    </div>
  )
}
