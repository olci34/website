import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'

const ThemeButton = () => {
    const {toggleColorMode} = useColorMode()
    return (
        <motion.div 
            whileHover={{scale: 1.1}}
            transition={{type: 'spring', stiffness: 200, damping: 10 }}
            style={{display: 'inline-block'}}
        >
        <IconButton
            colorScheme={useColorModeValue('red','orange')}
            icon={useColorModeValue(<MoonIcon/>, <SunIcon />)}
            onClick={toggleColorMode}
        ></IconButton>
        </motion.div>
    )
}

export default ThemeButton