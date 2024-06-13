import { useEffect, useRef, useCallback } from 'react'

interface UseInfiniteScrollOptions {
  hasMore: boolean
  isLoading: boolean
  loadMore: () => void
}

const useInfiniteScroll = ({
  hasMore,
  isLoading,
  loadMore,
}: UseInfiniteScrollOptions) => {
  const observer = useRef<IntersectionObserver | null>(null)
  const loadMoreRef = useRef<HTMLButtonElement | null>(null)

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0]
      if (target.isIntersecting && hasMore && !isLoading) {
        loadMore()
      }
    },
    [hasMore, isLoading, loadMore],
  )

  useEffect(() => {
    if (observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: '20px',
    })

    const { current: currentObserver } = observer
    const { current: currentLoadMoreRef } = loadMoreRef

    if (currentLoadMoreRef) currentObserver.observe(currentLoadMoreRef)

    return () => {
      if (currentObserver && currentLoadMoreRef) {
        currentObserver.unobserve(currentLoadMoreRef)
      }
    }
  }, [handleObserver])

  return loadMoreRef
}

export default useInfiniteScroll
