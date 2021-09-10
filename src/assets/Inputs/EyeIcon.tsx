import React from 'react'

interface EyeProps {
  onClick?(): void
}

const EyeIcon = ({ onClick }: EyeProps) => (
  <svg
    fill='none'
    className='Icon'
    id='EyeIcon'
    viewBox='0 0 512 300'
    xmlns='http://www.w3.org/2000/svg'
    onClick={onClick}
    style={{ cursor: 'pointer' }}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M509.768 143.707c2.976 3.668 2.976 8.922 0 12.59-1.188 1.464-29.606 36.296-74.918 71.593-51.621 40.211-113.953 72.109-178.851 72.109-64.903 0-127.235-31.902-178.8517-72.109-45.3124-35.297-73.7303-70.129-74.9178-71.593-2.9727-3.672-2.9727-8.922 0-12.59 1.1875-1.465 29.6054-36.297 74.9178-71.5939C128.753 31.914 191.088 0 255.999 0c64.902 0 127.234 31.9062 178.851 72.1131 45.316 35.2969 73.73 70.1289 74.918 71.5939zM145.641 150c0-60.6523 49.347-110 110-110 60.652 0 110 49.3477 110 110 0 60.656-49.348 110-110 110-60.653 0-110-49.344-110-110zm110 90c-49.625 0-90-40.375-90-90s40.375-90 90-90 90 40.375 90 90-40.375 90-90 90z'
    />
  </svg>
)

export default EyeIcon
