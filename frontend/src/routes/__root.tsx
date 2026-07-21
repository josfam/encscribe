import { Outlet, createRootRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { AddNoteButton } from '@/components/AddNoteButton'
import '../styles.css'

export const Route = createRootRoute({
  component: RootComponent,
})

// pseudo - code
// create a function to reach the backend's /username route
const fetchUsername = async () => {
  const response = await fetch("http://127.0.0.1:8000/username")
  if (!response.ok) {
    throw new Error(`Failed to fetch username: ${response.status}`)
  }
  return response.json()
}


const getUsername = () => {
  const {data} = useQuery({
    queryKey: ["username"],
    queryFn: fetchUsername,
  })

  return data?.content
}

// get the response from the backend
// look at the response and
// see if something went wrong
  // tell the user something went wrong
// if nothing went wrong
  // get the user's name from the response
// display the user's name on the top bar, with "vault" next to it

function RootComponent() {
  const username = getUsername()

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
