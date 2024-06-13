import { FC } from 'react'
import { PostI } from '../@types'
import Avatar from './ui/Avatar'

interface PostProps {
  post: PostI
}

const Post: FC<PostProps> = ({ post }) => {
  return (
    <div className="p-6">
      <header className="flex items-center gap-3">
        <Avatar className="bg-primary">
          <img className="w-5" src="/images/b.png" alt="user logo" />
        </Avatar>
        <span className="font-bold">BRIDGE IN</span>
      </header>
      <main className="mt-5">
        <h4 className="font-bold">{post.title}</h4>
        <p>{post.body}</p>
      </main>
    </div>
  )
}

export default Post
