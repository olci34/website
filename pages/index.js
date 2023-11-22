import { Box, Container, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/layout'
import TypingAnimation from '@/components/typingAnimation'
import { Canvas } from '@react-three/fiber'
import Cloud from '@/components/cloud'
import { TrackballControls } from '@react-three/drei'

const Home = () => {

  return (
    <Layout>
      <Container mt={4}>
        <Box display="flex" flexDirection={{base: 'column-reverse', md: 'row'}} textAlign="center">
          <Box flexGrow={1} flexDirection="column">
            <Box as="span">Hi! I&apos;m</Box>
            <Heading as="h2">
              Murat Oğulcan Şahin
            </Heading>

            <TypingAnimation text="and I am " delay={1}/>
          </Box>

          <Box flexShrink={0} textAlign="center">
            <Box boxSize={['120px', '120px']} display="inline-block" borderRadius="full" borderWidth={2} borderColor={useColorModeValue('blackAlpha.900', 'whiteAlpha.600')} overflow="hidden">
              <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov'/>
            </Box>
          </Box>
        </Box>
        
        <Box mt={4} h={56}>
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
            <fog attach="fog" args={['#202025', 0, 80]} />
            <Cloud count={8} radius={20} />
            <TrackballControls />
          </Canvas>
        </Box>

      </Container>
    </Layout>
  )
}

export default Home