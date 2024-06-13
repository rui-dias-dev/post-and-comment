import { FC, useState, ChangeEvent, FormEvent } from 'react'
import { CommentBodyI } from '../../@types'
import Button from '../ui/Button'

interface EditCommentFormProps {
  initialData: CommentBodyI
  onSave: (comment: CommentBodyI) => void
}

const EditCommentForm: FC<EditCommentFormProps> = ({ initialData, onSave }) => {
  const [formData, setFormData] = useState(initialData)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    onSave(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-12 space-y-4">
        <div className="rounded-xl bg-bridge-in-black-05-opacity px-4 py-3 focus-within:ring-2 focus-within:ring-bridge-in-black">
          <label
            htmlFor="name"
            className="block py-0.5 text-xs text-bridge-in-black-50-opacity"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Give it a title"
            autoFocus
            required
            className="block w-full bg-transparent outline-none placeholder:text-bridge-in-black-50-opacity"
          />
        </div>
        <div className="rounded-xl bg-bridge-in-black-05-opacity px-4 py-3 focus-within:ring-2 focus-within:ring-bridge-in-black">
          <label
            htmlFor="body"
            className="block py-0.5 text-xs text-bridge-in-black-50-opacity"
          >
            Comment
          </label>
          <textarea
            name="body"
            id="body"
            value={formData.body}
            onChange={handleChange}
            placeholder="Give it a Comment"
            rows={5}
            required
            className="block w-full bg-transparent outline-none placeholder:text-bridge-in-black-50-opacity"
          />
        </div>
      </div>
      <div>
        <Button
          type="submit"
          className="my-8 w-full rounded-xl bg-primary p-2 text-center text-bridge-in-white"
        >
          Save
        </Button>
      </div>
    </form>
  )
}

export default EditCommentForm
