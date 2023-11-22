import { useTransform, useMotionValue, motion, animate } from "framer-motion"
import CursorBlinker from "./cursorBlinker"
import { useEffect } from "react"
import { Box } from "@chakra-ui/react"

const InfiniteTypingAnimation = ({delay}) => {
    const texts = ["a Software Developer","a curious mind", "detail-oriented", "an active-learner", "a team player", "proactive", "a soccer fan", "self-starter", "a human"]
    const textIndex = useMotionValue(0)
    const currText = useTransform(textIndex, (latest) => texts[latest] || "")
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) => Math.round(latest))
    const displayText = useTransform(rounded, (latest) => currText.get().slice(0, latest))
    const isTyped = useMotionValue(true)

    useEffect(() => {
        animate(count, 60, {
            type: "tween",
            duration: 1,
            delay: delay,
            ease: "easeIn",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5,
            onUpdate(latest) {
                if (latest > 0 && isTyped.get() === true) {
                    isTyped.set(false)
                } else if (latest === 0 && isTyped.get() === false) {
                    if (textIndex.get() === texts.length - 1) {
                        textIndex.set(0)
                    } else {
                        textIndex.set(textIndex.get() + 1)
                    }
                    isTyped.set(true)
                }
            }
        })
    }, [])

    return (
        <Box as="span">
            <motion.span style={{display: "inline"}}>{displayText}</motion.span>
            <CursorBlinker />
        </Box>
    )
}

export default InfiniteTypingAnimation