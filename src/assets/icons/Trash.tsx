import * as React from 'react'

export default function Trash(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.72076 3.75C9.61315 3.75 9.51762 3.81886 9.48359 3.92094L9.04057 5.25L14.9594 5.25L14.5164 3.92094C14.4824 3.81886 14.3868 3.75 14.2792 3.75L9.72076 3.75ZM16.5406 5.25L15.9394 3.4466C15.7012 2.732 15.0325 2.25 14.2792 2.25L9.72076 2.25C8.96751 2.25 8.29876 2.732 8.06056 3.4466L7.45943 5.25H5H3C2.58579 5.25 2.25 5.58579 2.25 6C2.25 6.41421 2.58579 6.75 3 6.75H4.29834L5.06497 18.2494C5.19629 20.2193 6.83242 21.75 8.80666 21.75H15.1933C17.1676 21.75 18.8037 20.2193 18.935 18.2494L19.7017 6.75H21C21.4142 6.75 21.75 6.41421 21.75 6C21.75 5.58579 21.4142 5.25 21 5.25H19H16.5406ZM18.1983 6.75H16L8 6.75L5.80166 6.75L6.56164 18.1497C6.64044 19.3316 7.62212 20.25 8.80666 20.25H15.1933C16.3779 20.25 17.3596 19.3316 17.4384 18.1497L18.1983 6.75ZM10 9.25C10.4142 9.25 10.75 9.58579 10.75 10L10.75 17C10.75 17.4142 10.4142 17.75 10 17.75C9.58579 17.75 9.25 17.4142 9.25 17L9.25 10C9.25 9.58579 9.58579 9.25 10 9.25ZM14.75 10C14.75 9.58579 14.4142 9.25 14 9.25C13.5858 9.25 13.25 9.58579 13.25 10L13.25 14C13.25 14.4142 13.5858 14.75 14 14.75C14.4142 14.75 14.75 14.4142 14.75 14L14.75 10Z"
        fill="currentColor"
      />
    </svg>
  )
}
