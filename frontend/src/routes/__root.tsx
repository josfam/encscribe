import { Outlet, createRootRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { AddNoteButton } from '@/components/AddNoteButton'
import '../styles.css'

export const Route = createRootRoute({
  component: RootComponent,
})

function useUsername() {
  const { data } = useQuery({
    queryKey: ['username'],
    queryFn: () =>
      fetch('http://127.0.0.1:8000/username').then((res) => res.json()),
  })

  return data?.content ?? ''
}

function RootComponent() {
  const username = useUsername()

  return (
    <>
      <div className="bg-gray-200 gap-8 p-4 text-white font-bold flex items-center justify-center">
        <p className="text-gray-950 text-2xl">{username}'s vault</p>
        {/* button was here */}
        <div className="absolute right-10">
          <AddNoteButton />
        </div>
      </div>
      <Outlet />
    </>
  )
}
