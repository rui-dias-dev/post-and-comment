import { ComponentProps, FC } from 'react'
import { mergeClasses } from '../../utils'

interface AvatarProps extends ComponentProps<'div'> {}

const Avatar: FC<AvatarProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={mergeClasses(
        `flex h-10 w-10 items-center justify-center rounded-full p-2.5`,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Avatar
