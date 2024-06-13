import { ComponentProps, FC } from 'react'
import { mergeClasses } from '../../utils'

interface ModalBodyProps extends ComponentProps<'div'> {}

const ModalBody: FC<ModalBodyProps> = ({ children, className, ...props }) => {
  return (
    <div className={mergeClasses('px-6', className)} {...props}>
      {children}
    </div>
  )
}

export default ModalBody
