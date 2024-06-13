import { FC } from 'react'
import useGetUsers from '../hooks/useGetUsers'
import User from './User'
import Button from './ui/Button'
import useInfiniteScroll from '../hooks/useInfiniteScroll'

const UsersList: FC = () => {
  const { users, isLoading, error, hasMore, handleLoadMoreUsers } =
    useGetUsers()

  const loadMoreRef = useInfiniteScroll({
    hasMore,
    isLoading,
    loadMore: handleLoadMoreUsers,
  })

  return (
    <div className="pb-6">
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className="border-b border-bridge-in-black-05-opacity"
          >
            <User user={user} />
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
              onClick={handleLoadMoreUsers}
              className="rounded-xl bg-primary text-bridge-in-white"
            >
              <span>{isLoading ? 'Loading...' : 'Load More'}</span>
            </Button>
          )}
          {!isLoading && !hasMore && (
            <p className="text-center">No more users to load.</p>
          )}
        </div>
      )}
    </div>
  )
}

export default UsersList
