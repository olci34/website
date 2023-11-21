import { motion } from 'framer-motion'
import { useColorModeValue } from '@chakra-ui/react'
const cursorVariants = {
    blinking: {
        opacity: [0, 0, 1, 1],
        transition: {
            duration: 0.8,
            repeat: Infinity,
            repeatDelay: 0,
            ease: "linear",
            times: [0, 0.5, 0.5, 1]
        }
    }
}

const CursorBlinker = () => {
    return (
        <motion.div
            variants={cursorVariants}
            animate="blinking"
            style={{display: "inline-block", width: "2px", height: "16px", backgroundColor: "#4A5568"}}
        />
    )
}

export default CursorBlinker