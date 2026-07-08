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
  // create an instance of tanstack form, inside of the "form" variable
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
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create a note</DialogTitle>
            <DialogDescription>Enter details for your note</DialogDescription>
          </DialogHeader>

          <form.Field name="title">
            {(field) => (
              <div className="flex flex-col gap-1">
                <label className="text-xl" htmlFor={field.name}>
                  Title
                </label>
                <input
                  required
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Enter your title"
                  className="border border-gray-400 text-xl"
                ></input>
              </div>
            )}
          </form.Field>

          <div className="flex flex-col gap-1">
            <label className="text-xl">Content</label>
            <textarea
              rows={8}
              className="border border-gray-400 text-xl"
            ></textarea>
          </div>
          <button className="bg-amber-300 rounded-lg p-4 text-xl">
            Create
          </button>
        </DialogContent>
      </form>
    </Dialog>
  )
}
