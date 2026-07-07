import { FaCirclePlus } from 'react-icons/fa6'

export const AddNoteButton = () => {
  return (
    <button className="bg-amber-900 active:bg-amber-900 active:scale-98 hover:bg-amber-700 flex items-center justify-center border border-amber-500 cursor-pointer font-normal text-2xl rounded-full text-gray-900 shadow-lg">
      <FaCirclePlus className="w-10 h-10 text-amber-300" />
    </button>
  )
}
