import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Icon,
  List,
  ListItem,
  useDisclosure
} from '@chakra-ui/react'
import { useRef } from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { LinkItem } from './navbar'
import { SiMinutemailer } from 'react-icons/si'
import { FaBriefcase, FaPencilAlt, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function DrawerMenu(props) {
  const menuBtnRef = useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { path } = props

  return (
    <Box>
      <Button ref={menuBtnRef} onClick={onOpen} backgroundColor="transparent">
        <Icon as={HamburgerIcon} />
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        size="xs"
        finalFocusRef={menuBtnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <List spacing={2}>
              <ListItem>
                <LinkItem href="/portfolio" path={path}>
                  <FaBriefcase />
                  Portfolio
                </LinkItem>
              </ListItem>
              <ListItem>
                <LinkItem href="/posts" path={path}>
                  <FaPencilAlt />
                  Posts
                </LinkItem>
              </ListItem>
              <ListItem>
                <LinkItem
                  href="https://github.com/olci34"
                  target="_blank"
                  path={path}
                >
                  <FaGithub />
                  GitHub
                </LinkItem>
              </ListItem>
              <ListItem>
                <LinkItem
                  href="https://www.linkedin.com/in/muratogulcansahin/"
                  target="_blank"
                  path={path}
                >
                  <FaLinkedin />
                  LinkedIn
                </LinkItem>
              </ListItem>
              <ListItem>
                <LinkItem href="mailto:muratogulcansahin@gmail.com" path={path}>
                  <SiMinutemailer />
                  Email
                </LinkItem>
              </ListItem>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
