import { Outlet, createRootRoute } from '@tanstack/react-router'

import '../styles.css'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <div className="bg-gray-500 gap-8 p-4 text-white text-2xl font-bold flex items-center justify-center">
        <p>Joseph's vault</p>
        <button className="bg-amber-300 active:bg-amber-500 active:scale-98 hover:bg-amber-400 flex items-center justify-center py-2 px-5 cursor-pointer rounded-full text-gray-900">
          Add note
        </button>
      </div>
      <Outlet />
    </>
  )
}
