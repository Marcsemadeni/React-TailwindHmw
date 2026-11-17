import Avatar from '../components/Avatar'
import Button from '../components/Button'
import StatusBadge from '../components/StatusBadge'

export default function ProfileCard() {
  return (
    <div className="min-h-full bg-page p-6 sm:p-12">
      <h1 className="text-2xl font-bold text-ink">Exercise 1 / Profile Card</h1>
      <p className="mt-1 text-xs text-muted">Reference design • Desktop</p>

      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-sm rounded-2xl border border-ink bg-white p-6 shadow-lg">
          <div className="flex items-center gap-4">
            <Avatar name="Alex Johnson" size="lg" />
            <div className="min-w-0">
              <h2 className="truncate text-xl font-bold text-ink">Alex Johnson</h2>
              <p className="truncate text-sm text-muted">Frontend Developer</p>
            </div>
          </div>
          <div className="mt-4">
            <StatusBadge variant="success">Available</StatusBadge>
          </div>
          <hr className="my-5 border-line" />
          <div className="flex gap-3">
            <Button className="flex-1 py-3">View Profile</Button>
            <Button variant="outline" className="flex-1 py-3">Message</Button>
          </div>
        </div>
      </div>

      <div className="mt-12 text-xs text-muted">
        <p>Company primary #234e70</p>
        <p className="mt-1">Build using React components and Tailwind utilities.</p>
      </div>
    </div>
  )
}
