import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import DrawerMenu from './drawerMenu'
import Link from 'next/link'
import ThemeButton from './themeButton'

function LinkItem({ href, target, path, children, ...props }) {
  const isActive = href === path
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')

  return (
    <Link
      href={href}
      scroll={false}
      bg={isActive ? 'red' : undefined}
      color={isActive ? '#202023' : inactiveColor}
      target={target}
      style={{ paddingLeft: '4px', paddingRight: '4px' }}
      {...props}
    >
      {children}
    </Link>
  )
}

export default function Navbar(props) {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      css={{ backdropFilter: 'blur(5px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={10}>
          <Link href="/">
            <Heading as="h2" size="lg">
              LOGO
            </Heading>
          </Link>
        </Flex>

        <Stack
          direction={{ base: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ md: 0 }}
          justify="space-around"
        >
          <LinkItem href="/portfolio" path={path}>
            Portfolio
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          <LinkItem href="/" path={path}>
            GitHub
          </LinkItem>
          <LinkItem href="/" path={path}>
            LinkedIn
          </LinkItem>
          <LinkItem href="/" path={path}>
            Email
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeButton />
          <Box display={{ base: 'inline-block', md: 'none' }}>
            <DrawerMenu />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
