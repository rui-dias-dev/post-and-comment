import { ComponentProps, FC } from 'react'
import { mergeClasses } from '../../utils'

interface ModalHeaderProps extends ComponentProps<'h2'> {}

const ModalHeader: FC<ModalHeaderProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={mergeClasses('px-6 py-8', className)} {...props}>
      {children}
    </div>
  )
}

export default ModalHeader
