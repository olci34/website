import { Box, Container, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/layout'
import TypingAnimation from '@/components/typingAnimation'
import { Canvas } from '@react-three/fiber'
import Cloud from '@/components/cloud'
import { Environment, Loader, OrbitControls } from '@react-three/drei'
import CoreSphere from '@/components/coreSphere'
import { Suspense } from 'react'

const Home = () => {
  return (
    <Layout>
      <Container mt={4}>
        <Box display="flex" flexDirection={{base: 'column-reverse', md: 'row'}} textAlign="center" py={4}>
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
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -30], fov: 90 }}>
            <Suspense>
              <ambientLight intensity={0.4} position={[0,0,-30]} color="white"/>
              <fog attach="fog" args={['#202025', 0, 80]} />
              <Environment preset="city"/>
              <group>
                <Cloud count={8} radius={20}/>
                <CoreSphere />
              </group>
              <OrbitControls autoRotate={true} enableZoom={false}/>
            </Suspense>
          </Canvas>
          <Loader />
        </Box>

      </Container>
    </Layout>
  )
}

export default Home