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
import NextLink from 'next/link'

function LinkItem({ href, target, path, children, ...props }) {
  const isActive = href === path
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')

  return (
    <Link
      // as={NextLink}
      href={href}
      scroll={false}
      bg={isActive ? 'grassGreen' : undefined}
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
          <Heading as="h2" size="lg">
            LOGO
          </Heading>
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
          <LinkItem href="/projects" path={path}>
            Projects
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
