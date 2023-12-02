import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import {
  defineStyle,
  createMultiStyleConfigHelpers
} from '@chakra-ui/styled-system'
import { listAnatomy as parts } from '@chakra-ui/anatomy'
import { stepperAnatomy as stepperParts } from '@chakra-ui/anatomy'

const styles = {
  global: props => ({
    body: {
      bg: mode('#F5E8C7', '#0F0F0F')(props)
    }
  })
}

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const stepperStyleConfigHelpers = createMultiStyleConfigHelpers(
  stepperParts.keys
)

const listBaseStyle = definePartsStyle(props => ({
  item: {
    '&::marker': {
      color: mode('white.300', 'white.900')(props)
    }
  },
  icon: {
    color: mode('green.600', 'green.400')(props)
  }
}))

// "stepper",
// "step",
// "title",
// "description",
// "indicator",
// "separator",
// "icon",
// "number",
const stepperBaseStyle = stepperStyleConfigHelpers.definePartsStyle(props => ({
  indicator: {
    bg: mode('green.600', 'green.400')(props)
  },
  separator: {
    color: mode('green.600', 'green.400')(props)
  }
}))

const stepperTheme = stepperStyleConfigHelpers.defineMultiStyleConfig({
  baseStyle: stepperBaseStyle,
  defaultProps: {}
})
const listTheme = defineMultiStyleConfig({ baseStyle: listBaseStyle })

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#232D3F',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#2E8A99', '#008170')(props),
      textUnderlineOffset: 3
    })
  },
  List: listTheme,
  Stepper: stepperTheme
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
  styles,
  components
})
export default theme
