import React from 'react'

import { motion, Variants } from 'framer-motion'

interface DotsLoaderProps {
  size?: number
  color?: string
  dotSize?: number
}

const loading: Variants = {
  start: { transition: { staggerChildren: 0.2 } },
  end: { transition: { staggerChildren: 0.2 } }
}

const circle: Variants = {
  start: {
    y: '-50%',
    transition: { duration: 0.5, yoyo: Infinity, ease: 'easeInOut' }
  },
  end: {
    y: '50%',
    transition: { duration: 0.5, yoyo: Infinity, ease: 'easeInOut' }
  }
}

const DotsLoader = ({
  size = 36,
  dotSize = 8,
  color = '#6e4850'
}: DotsLoaderProps) => {
  const loadingContainer = {
    width: size,
    height: size,
    display: 'flex',
    alignItems: 'center',
    className: 'DotsLoader',
    justifyContent: 'space-around'
  }

  const loadingCircle = {
    width: dotSize,
    height: dotSize,
    display: 'block',
    borderRadius: '50%',
    backgroundColor: color
  }
  return (
    <motion.div
      animate='end'
      initial='start'
      variants={loading}
      className='DotsLoader'
      style={loadingContainer}
    >
      <motion.span style={loadingCircle} variants={circle} />

      <motion.span style={loadingCircle} variants={circle} />

      <motion.span style={loadingCircle} variants={circle} />
    </motion.div>
  )
}

export default DotsLoader
