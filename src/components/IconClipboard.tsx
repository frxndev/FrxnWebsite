import type { SVGProps } from 'react'

interface IconClipboardProps {
  isActive: boolean
}

export const IconClipboard = ({ isActive, ...props }: SVGProps<SVGSVGElement> & IconClipboardProps) => {
  return (
    <>
      {isActive
        ? (
        <svg
          {...props}
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='#22c55e'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M9 11l3 3l8 -8' />
          <path d='M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9' />
        </svg>
          )
        : (
        <svg
          {...props}
          fill='none'
          stroke='#3b82f6'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          viewBox='0 0 24 24'
        >
          <path stroke='none' d='M0 0h24v24H0z' />
          <path d='M8 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z' />
          <path d='M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2' />
        </svg>
          )}
    </>
  )
}
