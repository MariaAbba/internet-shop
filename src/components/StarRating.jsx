import React from 'react'
import { HiStar } from 'react-icons/hi'

const StarRating = ({ count, total = 5 }) => {
  return (
    <>
      {[...Array(total)].map((_, i) => (
        <HiStar
          key={i}
          style={{
            color: i < count ? '#FFCC02' : '#d1d1d1', // Yellow for filled stars, gray for unfilled
            fontSize: '24px', // Adjust the size here if needed
          }}
        />
      ))}
    </>
  )
}

export default StarRating
