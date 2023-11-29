import { Box, Container, Heading, Image, LinkBox, LinkOverlay, SimpleGrid, Stepper, Text, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/layout'
import TypingAnimation from '@/components/typingAnimation'
import { Canvas } from '@react-three/fiber'
import Cloud from '@/components/cloud'
import { Environment, Loader, OrbitControls } from '@react-three/drei'
import CoreSphere from '@/components/coreSphere'
import { Suspense } from 'react'
import Timeline from '@/components/timeline'

const Home = () => {
  return (
    <Layout>
      <Container mt={4}>
        <Box display="flex" flexDirection={{base: 'column-reverse', md: 'row'}} textAlign="center" py={4}>
          <Box flexGrow={1} flexDirection="column">
            <Box as="span" fontSize={["sm", "sm", "md"]}>Hi! I&apos;m</Box>
            <Heading as="h2">
              Murat Oğulcan Şahin
            </Heading>
            <TypingAnimation text="and I am " delay={1}/>
          </Box>

          <Box flexShrink={0} textAlign="center">
            <Box boxSize={['120px', '120px']} display="inline-block" borderRadius="full" borderWidth={2} borderColor={useColorModeValue('blackAlpha.900', 'whiteAlpha.600')} overflow="hidden">
              <Image src='/pp.jpg' alt='Murat Ogulcan Sahin'/>
            </Box>
          </Box>
        </Box>
        
        <Box my={4} h={56}>
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

        <Box my={4}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Box as="p" fontSize={['sm','sm','md']}>
            Software Developer with 2+ years of professional experience, and still as passionate and curious as the day one.
            I enjoy <strong>creating, problem solving, learning and collaborating</strong>. I value <strong>innovation, efficiency and teamwork</strong>. 
            Proficient in .NET, Angular, React and Rails frameworks. For more about the tech stack I use, spin around my "Skills Sphere" above.
          </Box>
        </Box>

        <Box>
          <Heading as="h3" variant="section-title">
            Experience
          </Heading>
          <Timeline />
        </Box>

        <Box my={4}>
          <Heading as="h3" variant="section-title">
            Projects
          </Heading>
          <SimpleGrid columns={[1,1,2]} gap={6}>
              <LinkBox>
                <Image src='/pp.jpg' alt='Murat Ogulcan Sahin' borderRadius="xl" h={[28,28,40]}/>
                <LinkOverlay as="div">
                  <Text mt={2} fontSize={['sm', 'md', 'lg']} fontWeight="semibold">
                    Project1
                  </Text>
                  <Text fontSize={["sm","sm","md"]}>project description</Text>
                </LinkOverlay>
              </LinkBox>
              <LinkBox>
                <Image src='/atar-cabos.png' alt='Atar Cabos Thumbnail' borderRadius="xl" h={[28,28,40]}/>
                <LinkOverlay as="div">
                  <Text mt={2} fontSize={['sm', 'md', 'lg']} fontWeight="semibold">
                    Atar Cabos
                  </Text>
                  <Text fontSize={["sm","sm","md"]}>Online sailing education platform</Text>
                </LinkOverlay>
              </LinkBox>
          </SimpleGrid>
        </Box>

        <Box my={4}>
          <Heading as="h3" variant="section-title">
            Posts
          </Heading>
          <SimpleGrid columns={[1,1,2]} gap={6}>
            <LinkBox w="100%">
              <Image src='https://media.giphy.com/media/IfbfrgdqP0SxhAAD6h/giphy.gif' borderRadius="xl" h={[28,28,40]} />
              <LinkOverlay as="div">
                  <Text mt={2} fontSize={['sm', 'md', 'lg']} fontWeight="semibold">
                    Post1
                  </Text>
                  <Text fontSize={["sm","sm","md"]}>Post description</Text>
                </LinkOverlay>
            </LinkBox>
            <LinkBox w="100%">
              <Image src='https://media.giphy.com/media/IfbfrgdqP0SxhAAD6h/giphy.gif' borderRadius="xl" h={[28,28,40]} />
              <LinkOverlay as="div">
                  <Text mt={2} fontSize={['sm', 'md', 'lg']} fontWeight="semibold">
                    Post1
                  </Text>
                  <Text fontSize={["sm","sm","md"]}>Post description</Text>
                </LinkOverlay>
            </LinkBox>
          </SimpleGrid>
        </Box>

      </Container>
    </Layout>
  )
}

export default Home