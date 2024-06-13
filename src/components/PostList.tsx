import { FC } from 'react'
import { Link } from 'react-router-dom'
import useGetPosts from '../hooks/useGetPosts'
import Post from './Post'
import Button from './ui/Button'
import useInfiniteScroll from '../hooks/useInfiniteScroll'

const PostList: FC = () => {
  const { posts, isLoading, error, hasMore, handleLoadMorePosts } =
    useGetPosts()

  const loadMoreRef = useInfiniteScroll({
    hasMore,
    isLoading,
    loadMore: handleLoadMorePosts,
  })

  return (
    <div className="pb-6">
      <ul>
        {posts.map((post) => (
          <li
            key={post.id}
            className="border-b border-bridge-in-black-05-opacity"
          >
            <Link to={`/posts/${post.id}`}>
              <Post post={post} />
            </Link>
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
              onClick={handleLoadMorePosts}
              className="rounded-xl bg-primary text-bridge-in-white"
            >
              <span>{isLoading ? 'Loading...' : 'Load More'}</span>
            </Button>
          )}
          {!isLoading && !hasMore && (
            <p className="text-center">No more posts to load.</p>
          )}
        </div>
      )}
    </div>
  )
}

export default PostList
