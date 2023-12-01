import { animate, useMotionValue, useTransform, motion } from 'framer-motion'
import { useEffect } from 'react'
import InfiniteTypingAnimation from './infiniteTypingAnimation'
import { Box } from '@chakra-ui/react'

const TypingAnimation = ({ delay, text }) => {
  const count = useMotionValue(0)
  const rounded = useTransform(count, latest => Math.round(latest))
  const slicedText = useTransform(rounded, latest => text.slice(0, latest))

  useEffect(() => {
    const animationControls = animate(count, text.length, {
      type: 'tween',
      delay: delay,
      duration: 1,
      ease: 'easeInOut'
    })
    return animationControls.stop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box mt={1} fontSize={['sm', 'sm', 'md']}>
      <motion.span>{slicedText}</motion.span>
      <InfiniteTypingAnimation delay={delay + 1} />
    </Box>
  )
}

export default TypingAnimation
