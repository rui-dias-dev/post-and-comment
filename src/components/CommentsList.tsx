import { FC } from 'react'
import Button from './ui/Button'
import Comment from './Comment'
import { useComments } from '../context/useComments'
import useInfiniteScroll from '../hooks/useInfiniteScroll'

const CommentsList: FC = () => {
  const { comments, isLoading, error, hasMore, loadMoreComments } =
    useComments()

  const loadMoreRef = useInfiniteScroll({
    hasMore,
    isLoading,
    loadMore: loadMoreComments,
  })

  return (
    <section className="pt-12">
      <p className="px-6 font-bold">
        {comments.length} {comments.length === 1 ? 'comment' : 'comments'}
      </p>
      <ul>
        {comments.map((comment) => (
          <li
            key={comment.id}
            className="border-b border-x-bridge-in-black-05-opacity p-6"
          >
            <Comment comment={comment} />
          </li>
        ))}
      </ul>

      {error ? (
        <p className="mt-6 text-center text-primary">{error}</p>
      ) : (
        <div className="mt-6 flex justify-center">
          {hasMore && (
            <Button
              ref={loadMoreRef}
              onClick={loadMoreComments}
              className="rounded-xl bg-primary text-bridge-in-white"
            >
              <span>{isLoading ? 'Loading...' : 'Load More'}</span>
            </Button>
          )}
          {!isLoading && !hasMore && <p>No more comments to load.</p>}
        </div>
      )}
    </section>
  )
}

export default CommentsList
