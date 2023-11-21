import { Box, Container, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/layout'
import TypingAnimation from '@/components/typingAnimation'

const Home = () => {

  return (
    <Layout>
      <Container mt={4}>
        <Box display={{ md: 'flex'}}>
          <Box flexGrow={1} flexDirection="column">
            <Heading as="h2">
              Murat Ogulcan Sahin
            </Heading>

            <TypingAnimation text="Software Engineer and " delay={1}/>
          </Box>

          <Box boxSize={['120px', '120px']} borderRadius="full" borderWidth={2} borderColor={useColorModeValue('blackAlpha.900', 'whiteAlpha.600')} overflow="hidden">
            <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov'/>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export default Home