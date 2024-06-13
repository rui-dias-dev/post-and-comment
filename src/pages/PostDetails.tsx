import { FC } from 'react'
import { useParams } from 'react-router-dom'
import useGetSinglePost from '../hooks/useGetSinglePost'
import Post from '../components/Post'
import CommentsList from '../components/CommentsList'
import { CommentsProvider } from '../context/useComments'
import Modal from '../components/Modal'
import AddCommentForm from '../components/Forms/AddCommentForm'
import AddComment from '../components/AddComment'
import useModal from '../hooks/useModal'
import Button from '../components/ui/Button'
import Close from '../assets/icons/Close'

const PostDetails: FC = () => {
  const { postId } = useParams<{ postId: string }>()
  const { post, isLoading, error } = useGetSinglePost(Number(postId))

  const { isOpen, closeModal, openModal } = useModal()

  const postIdNumber = Number(postId)

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p className="p-6 text-center text-primary">{error}</p>}

      {post && (
        <CommentsProvider postId={Number(postId)}>
          <div className="h-[calc(100vh-56px-88px)] overflow-auto">
            <div className="border-b border-bridge-in-black-05-opacity">
              <Post post={post} />
            </div>

            <CommentsList />
          </div>

          <AddComment openAddCommentModal={openModal} />

          <Modal.Root isOpen={isOpen} closeModal={closeModal}>
            <Modal.Content>
              <Modal.Header className="flex justify-between">
                <span className="font-bold">Add comment</span>
                <Button onClick={closeModal} className="p-1">
                  <Close />
                </Button>
              </Modal.Header>
              <Modal.Body>
                <AddCommentForm postId={postIdNumber} onClose={closeModal} />
              </Modal.Body>
            </Modal.Content>
          </Modal.Root>
        </CommentsProvider>
      )}
    </div>
  )
}

export default PostDetails
