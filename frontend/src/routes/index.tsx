import { createFileRoute } from '@tanstack/react-router'
import { AddNoteButton } from '#/components/AddNoteButton'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <h1 className="text-4xl text-center font-semibold">You have no notes</h1>
      {/* button was here */}
      <AddNoteButton />
    </div>
  )
}
