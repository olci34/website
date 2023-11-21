import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Icon, List, ListIcon, ListItem, useDisclosure } from '@chakra-ui/react'
import { useRef } from 'react'
import { CheckCircleIcon, HamburgerIcon } from '@chakra-ui/icons'

export default function DrawerMenu() {
    const menuBtnRef = useRef();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box>
            <Button ref={menuBtnRef} onClick={onOpen} backgroundColor="transparent">
                <Icon as={HamburgerIcon} />
            </Button>
            <Drawer isOpen={isOpen} onClose={onClose} placement='right' size='xs' finalFocusRef={menuBtnRef} >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <List spacing={2}>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='green.500'/>
                                Item1
                            </ListItem>
                        </List>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}