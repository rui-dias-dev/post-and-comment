import * as React from 'react'

export default function Facebook(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .732.592 1.324 1.325 1.324h11.494v-9.294h-3.124v-3.622h3.124v-2.671c0-3.097 1.891-4.785 4.651-4.785 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.716-1.795 1.764v2.308h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.592 1.325-1.325v-21.35c0-.733-.592-1.325-1.325-1.325z" />
    </svg>
  )
}
