import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <h1 className="text-4xl text-center font-semibold">You have no notes</h1>
      <button className="bg-amber-300 active:bg-amber-500 active:scale-98 hover:bg-amber-400 text-2xl flex items-center justify-center py-2 px-5 cursor-pointer font-normal rounded-full border border-amber-500 shadow-lg text-gray-900">
        Add note
      </button>
    </div>
  )
}
