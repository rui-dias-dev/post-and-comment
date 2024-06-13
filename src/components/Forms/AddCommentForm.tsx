import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { createComment } from '../../actions/comments'
import { CommentBodyI } from '../../@types'
import { useComments } from '../../context/useComments'
import Button from '../ui/Button'

interface AddCommentFormProps {
  postId: number
  onClose: () => void
}

const AddCommentForm: FC<AddCommentFormProps> = ({ postId, onClose }) => {
  const [formData, setFormData] = useState<CommentBodyI>({
    name: '',
    email: '',
    body: '',
    postId: postId,
  })

  const { handleAddComment } = useComments()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const newComment = await createComment(postId, formData)

      handleAddComment(newComment)

      setFormData({
        name: '',
        email: '',
        body: '',
        postId: postId,
      })

      onClose()
    } catch (error) {
      console.error('Error adding comment:', error)
    }
  }

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
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
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Give it a Name"
            autoFocus
            required
            className="block w-full bg-transparent outline-none placeholder:text-bridge-in-black-50-opacity"
          />
        </div>
        <div className="rounded-xl bg-bridge-in-black-05-opacity px-4 py-3 focus-within:ring-2 focus-within:ring-bridge-in-black">
          <label
            htmlFor="email"
            className="block py-0.5 text-xs text-bridge-in-black-50-opacity"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Give it a Email"
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

      <Button
        type="submit"
        className="my-8 w-full rounded-xl bg-primary p-2 text-center text-bridge-in-white"
      >
        Add Comment
      </Button>
    </form>
  )
}

export default AddCommentForm
