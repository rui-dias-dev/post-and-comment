import * as React from 'react'

export default function Edit(props: React.ComponentProps<'svg'>) {
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
        d="M19.8408 3.90346C19.364 3.47009 18.636 3.47009 18.1592 3.90346C18.1405 3.92046 18.1161 3.94457 18.0303 4.03033L17.7233 4.33734C17.6991 5.41352 18.5865 6.30094 19.6627 6.27668L19.9697 5.96967C20.0554 5.88391 20.0795 5.85949 20.0965 5.84079C20.5299 5.36403 20.5299 4.63598 20.0965 4.15922C20.0795 4.14051 20.0554 4.1161 19.9697 4.03033C19.8839 3.94457 19.8595 3.92046 19.8408 3.90346ZM20.5357 7.52493L21.0303 7.03033L21.0429 7.01775L21.0429 7.01772C21.1103 6.95039 21.1621 6.89854 21.2065 6.84973C22.1599 5.80086 22.1599 4.19915 21.2065 3.15027C21.1621 3.10146 21.1103 3.0496 21.0429 2.98227L21.0429 2.98224L21.0303 2.96967L21.0177 2.95707L21.0177 2.95704L21.0175 2.95688C20.9503 2.88963 20.8985 2.83782 20.8497 2.79349C19.8009 1.84008 18.1991 1.84008 17.1503 2.79349C17.1015 2.83785 17.0496 2.8897 16.9823 2.95702L16.9823 2.95704L16.9822 2.95709L16.9697 2.96967L16.475 3.46436C16.4711 3.46813 16.4673 3.47195 16.4635 3.4758L12.7232 7.21619L12.6791 7.26028L12.679 7.26029L12.679 7.2603C12.2545 7.68477 11.9807 7.9585 11.755 8.27245C11.555 8.55063 11.3857 8.84963 11.2501 9.16423C11.097 9.51928 11.0031 9.8949 10.8576 10.4774L10.8425 10.5379L10.2724 12.8181C10.2085 13.0737 10.2834 13.344 10.4697 13.5303C10.656 13.7166 10.9263 13.7915 11.1819 13.7276L13.4621 13.1576L13.5226 13.1424L13.5226 13.1424L13.5227 13.1424C14.1051 12.9969 14.4807 12.903 14.8358 12.7499C15.1504 12.6143 15.4494 12.445 15.7276 12.245C16.0415 12.0193 16.3152 11.7455 16.7397 11.321L16.7397 11.3209L16.7838 11.2768L20.5241 7.53655C20.528 7.53272 20.5319 7.52885 20.5357 7.52493ZM18.3917 7.54761C17.5064 7.20196 16.798 6.49363 16.4524 5.60827L13.7838 8.27685C13.3006 8.76007 13.1189 8.94496 12.9729 9.14799C12.8361 9.33833 12.7203 9.54291 12.6275 9.75816C12.5285 9.98777 12.4634 10.2387 12.2977 10.9017L12.0308 11.9692L13.0983 11.7023C13.7613 11.5366 14.0122 11.4715 14.2418 11.3725C14.4571 11.2797 14.6617 11.1639 14.852 11.0271C15.055 10.8811 15.2399 10.6994 15.7232 10.2162L18.3917 7.54761ZM9.367 2.25L9.4 2.25H12C12.4142 2.25 12.75 2.58579 12.75 3C12.75 3.41422 12.4142 3.75 12 3.75H9.4C8.26752 3.75 7.46327 3.75059 6.83388 3.80201C6.21326 3.85272 5.829 3.9491 5.52453 4.10423C4.91301 4.41582 4.41582 4.91301 4.10423 5.52453C3.94909 5.82901 3.85271 6.21326 3.80201 6.83388C3.75058 7.46327 3.75 8.26752 3.75 9.4L3.75 14.6C3.75 15.7325 3.75058 16.5367 3.80201 17.1661C3.85271 17.7867 3.94909 18.171 4.10423 18.4755C4.41582 19.087 4.91301 19.5842 5.52453 19.8958C5.829 20.0509 6.21326 20.1473 6.83388 20.198C7.46327 20.2494 8.26752 20.25 9.4 20.25H14.6C15.7325 20.25 16.5367 20.2494 17.1661 20.198C17.7867 20.1473 18.171 20.0509 18.4755 19.8958C19.087 19.5842 19.5842 19.087 19.8958 18.4755C20.0509 18.171 20.1473 17.7867 20.198 17.1661C20.2494 16.5367 20.25 15.7325 20.25 14.6V12C20.25 11.5858 20.5858 11.25 21 11.25C21.4142 11.25 21.75 11.5858 21.75 12V14.6V14.633C21.75 15.7252 21.75 16.5907 21.693 17.2883C21.6347 18.0017 21.5131 18.6053 21.2323 19.1565C20.7769 20.0502 20.0502 20.7769 19.1565 21.2323C18.6053 21.5131 18.0017 21.6347 17.2883 21.693C16.5907 21.75 15.7252 21.75 14.633 21.75H14.6H9.4H9.36698C8.27485 21.75 7.40935 21.75 6.71174 21.693C5.99835 21.6347 5.39472 21.5131 4.84355 21.2323C3.94978 20.7769 3.22312 20.0502 2.76772 19.1565C2.48688 18.6053 2.36528 18.0017 2.30699 17.2883C2.24999 16.5907 2.25 15.7252 2.25 14.6331V14.633V14.6L2.25 9.4V9.367V9.36694C2.25 8.27483 2.24999 7.40935 2.30699 6.71174C2.36528 5.99835 2.48688 5.39472 2.76772 4.84355C3.22312 3.94978 3.94978 3.22312 4.84355 2.76772C5.39472 2.48688 5.99835 2.36528 6.71174 2.30699C7.40936 2.24999 8.27486 2.25 9.367 2.25Z"
        fill="currentColor"
      />
    </svg>
  )
}