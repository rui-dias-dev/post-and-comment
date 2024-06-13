import { FC, useState } from 'react'
import Avatar from './ui/Avatar'
import { CommentI, CommentBodyI } from '../@types'
import Modal from './Modal'
import EditCommentForm from './Forms/EditCommentForm'
import { useComments } from '../context/useComments'
import Button from './ui/Button'
import Edit from '../assets/icons/Edit'
import Trash from '../assets/icons/Trash'
import useModal from '../hooks/useModal'
import Close from '../assets/icons/Close'

interface CommentProps {
  comment: CommentI
}

const Comment: FC<CommentProps> = ({ comment }) => {
  const { isOpen, closeModal, openModal } = useModal()
  const { handleUpdateComment, handleDeleteComment } = useComments()
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false)

  const firstLetterOfEmail = comment.email[0]

  const handleSave = async (updatedData: CommentBodyI) => {
    await handleUpdateComment({ ...comment, ...updatedData })
    closeModal()
  }

  const openDeleteModal = () => setDeleteModalOpen(true)
  const closeDeleteModal = () => setDeleteModalOpen(false)

  const handleDelete = async () => {
    await handleDeleteComment(comment.id)
    closeDeleteModal()
  }

  return (
    <div className="grid grid-cols-[auto_1fr] gap-3">
      <Avatar className="bg-green-600">{firstLetterOfEmail}</Avatar>
      <div className="rounded-2xl bg-bridge-in-gray p-3">
        <header className="flex items-center justify-between gap-3">
          <span className="font-bold">{comment.email}</span>
          <div className="flex gap-2">
            <Button
              onClick={openModal}
              className="cursor-pointer rounded-lg border p-1 hover:text-primary"
            >
              <Edit />
            </Button>
            <Button
              onClick={openDeleteModal}
              className="cursor-pointer rounded-lg border p-1 hover:text-primary"
            >
              <Trash />
            </Button>
          </div>
        </header>

        <main className="mt-4">
          <h4 className="font-bold">{comment.name}</h4>
          <p>{comment.body}</p>
        </main>
      </div>

      <Modal.Root isOpen={isOpen} closeModal={closeModal}>
        <Modal.Content>
          <Modal.Header className="flex justify-between">
            <span className="font-bold">Edit comment</span>
            <Button onClick={closeModal} className="border p-1">
              <Close />
            </Button>
          </Modal.Header>
          <Modal.Body>
            <EditCommentForm initialData={comment} onSave={handleSave} />
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>

      <Modal.Root isOpen={isDeleteModalOpen} closeModal={closeDeleteModal}>
        <Modal.Content>
          <Modal.Header className="">
            <p className="font-bold">Delete comment</p>
            <p>Are you sure you want to delete this comment?</p>
          </Modal.Header>
          <Modal.Body className="p-6">
            <div className="grid grid-cols-2 gap-6">
              <Button
                onClick={closeDeleteModal}
                className="rounded-xl border p-2 text-primary"
              >
                Cancel
              </Button>
              <Button
                onClick={handleDelete}
                className="rounded-xl bg-primary p-2 text-white"
              >
                Delete
              </Button>
            </div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </div>
  )
}

export default Comment
