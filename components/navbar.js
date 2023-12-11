import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import DrawerMenu from './drawerMenu'
import Link from 'next/link'
import ThemeButton from './themeButton'
import { useRouter } from 'next/router'
import { SiMinutemailer } from 'react-icons/si'
import { FaBriefcase, FaPencilAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import { DiTerminal } from 'react-icons/di'

export function LinkItem({ href, target, path, children, ...props }) {
  const isActive = href === path
  const textDecorColor = useColorModeValue('red', 'orange')

  return (
    <Link
      href={href}
      scroll={false}
      target={target}
      style={{
        paddingLeft: '4px',
        paddingRight: '4px'
      }}
      {...props}
    >
      <Text
        as="span"
        textDecoration={isActive ? 'underline' : 'none'}
        textUnderlineOffset={4}
        textDecorationThickness={2}
        textDecorationColor={isActive ? textDecorColor : undefined}
        display="inline-flex"
        alignItems="center"
        gap={1}
      >
        {children}
      </Text>
    </Link>
  )
}

export default function Navbar() {
  const router = useRouter()

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      css={{ backdropFilter: 'blur(5px)' }}
      zIndex={2}
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
            <Heading
              as="h2"
              size="lg"
              display="inline-flex"
              alignItems="center"
            >
              <DiTerminal size="2em" />
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
          <LinkItem href="/portfolio" path={router.asPath}>
            <FaBriefcase />
            Portfolio
          </LinkItem>
          <LinkItem href="/posts" path={router.asPath}>
            <FaPencilAlt />
            Posts
          </LinkItem>
          <LinkItem
            href="https://github.com/olci34"
            target="_blank"
            path={router.asPath}
          >
            <FaGithub />
            GitHub
          </LinkItem>
          <LinkItem
            href="https://www.linkedin.com/in/muratogulcansahin/"
            target="_blank"
            path={router.asPath}
          >
            <FaLinkedin />
            LinkedIn
          </LinkItem>
          <LinkItem
            href="mailto:muratogulcansahin@gmail.com"
            target="_blank"
            path={router.asPath}
          >
            <SiMinutemailer />
            Email
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeButton />
          <Box display={{ base: 'inline-block', md: 'none' }}>
            <DrawerMenu path={router.asPath} />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
