import { Outlet, createRootRoute } from '@tanstack/react-router'
import { AddNoteButton } from '@/components/AddNoteButton'
import '../styles.css'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <div className="bg-gray-200 gap-8 p-4 text-white font-bold flex items-center justify-center">
        <p className="text-gray-950 text-2xl">Joseph's vault</p>
        {/* button was here */}
        <div className="absolute right-10">
          <AddNoteButton />
        </div>
      </div>
      <Outlet />
    </>
  )
}
