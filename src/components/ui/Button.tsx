import { ComponentProps, forwardRef } from 'react'
import { mergeClasses } from '../../utils'

interface ButtonProps extends ComponentProps<'button'> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={mergeClasses('rounded-xl px-3 py-2', className)}
        {...props}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button
