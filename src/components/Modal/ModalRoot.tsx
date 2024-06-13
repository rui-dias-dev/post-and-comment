import { FC, ReactNode } from 'react'

interface ModalRootProps {
  children: ReactNode
  isOpen: boolean
  closeModal: () => void
}

const ModalRoot: FC<ModalRootProps> = ({ children, isOpen, closeModal }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            onClick={closeModal}
            className="absolute inset-0 z-0 bg-black bg-opacity-50"
          ></div>
          {children}
        </div>
      )}
    </>
  )
}

export default ModalRoot
