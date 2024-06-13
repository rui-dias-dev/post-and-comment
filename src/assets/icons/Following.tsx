import * as React from 'react'

export default function Following(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.5">
        <circle
          cx="9"
          cy="7"
          r="4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 11C17.6569 11 19 9.65685 19 8C19 6.34315 17.6569 5 16 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.5 14H6.5C4.567 14 3 15.567 3 17.5C3 19.433 4.567 21 6.5 21H11.5C13.433 21 15 19.433 15 17.5C15 15.567 13.433 14 11.5 14Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 13.5555H18.6111C20.1146 13.5555 21.3334 14.7743 21.3334 16.2778V16.2778C21.3334 17.7812 20.1146 19 18.6111 19H18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
