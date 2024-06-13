import { FC, ReactNode } from 'react'

interface ModalContentProps {
  children: ReactNode
}

const ModalContent: FC<ModalContentProps> = ({ children }) => {
  return (
    <div className="z-10 max-h-[90vh] w-full max-w-[600px] overflow-auto rounded-3xl bg-bridge-in-white">
      {children}
    </div>
  )
}

export default ModalContent
