import { FC } from 'react'
import Avatar from './ui/Avatar'
import Button from './ui/Button'

interface AddCommentProps {
  openAddCommentModal: () => void
}

const AddComment: FC<AddCommentProps> = ({ openAddCommentModal }) => {
  return (
    <div className={'flex items-center gap-3 p-6'}>
      <Avatar className="bg-primary">
        <img src="/images/b.png" alt="user image" />
      </Avatar>
      <Button
        onClick={openAddCommentModal}
        className="block flex-grow bg-bridge-in-gray p-2 text-left"
      >
        <span>Add comment</span>
      </Button>
    </div>
  )
}

export default AddComment
