import { FaCirclePlus } from 'react-icons/fa6'
import { useForm } from '@tanstack/react-form'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export const AddNoteButton = () => {
  const form = useForm({
    defaultValues: {
      title: '',
      content: '',
    },
  })

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <button className="bg-amber-900 active:bg-amber-900 active:scale-98 hover:bg-amber-700 flex items-center justify-center border border-amber-500 cursor-pointer font-normal text-2xl rounded-full text-gray-900 shadow-lg">
            <FaCirclePlus className="w-10 h-10 text-amber-300" />
          </button>
        </DialogTrigger>

        {/* dialog content */}
        <DialogContent className="max-w-none! w-[calc(100vw-2rem)] sm:w-2/3 2xl:w-200 h-1/2 bg-white">
          <form.Field name="title">
            {(field) => (
              <div className="flex flex-col gap-2">
                <label className="text-xl" htmlFor={field.name}>
                  Title
                </label>
                <input
                  id={field.name}
                  className="border border-gray-400 text-xl rounded-sm"
                ></input>
              </div>
            )}
          </form.Field>

          <form.Field name="content">
            {(field) => (
              <div className="flex flex-col gap-2">
                <label className="text-xl" htmlFor={field.name}>
                  Content
                </label>
                <textarea
                  id={field.name}
                  className="border border-gray-400 text-xl rounded-sm"
                  rows={8}
                ></textarea>
              </div>
            )}
          </form.Field>
        </DialogContent>
      </form>
    </Dialog>
  )
}
