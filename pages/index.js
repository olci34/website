import {
  Box,
  Container,
  Heading,
  Spinner,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/layout'
import TypingAnimation from '@/components/typingAnimation'
import { Canvas } from '@react-three/fiber'
import Cloud from '@/components/cloud'
import { Loader, OrbitControls } from '@react-three/drei'
import CoreSphere from '@/components/coreSphere'
import { Suspense } from 'react'
import Timeline from '@/components/timeline'
import Image from 'next/image'
import profilePhoto from '../public/pp.jpeg'

const Home = () => {
  return (
    <Layout>
      <Container
        mt={4}
        maxW="container.md"
        display="flex"
        minHeight="100vh"
        flexDirection="column"
      >
        <Box
          display="flex"
          flexDirection={{ base: 'column-reverse', md: 'row' }}
          textAlign="center"
          h={{ base: 'min-content', md: '3xs' }}
          alignItems="center"
        >
          <Box flexGrow={1} flexDirection="column">
            <Box as="span" fontSize={['sm', 'sm', 'md']}>
              Hi! I&apos;m
            </Box>
            <Heading as="h2">Murat Oğulcan Şahin</Heading>
            <TypingAnimation text="and I am " delay={1} />
          </Box>

          <Box flexShrink={0} textAlign="center">
            <Box
              h={{ base: 36, md: 40 }}
              w={{ base: 36, md: 40 }}
              display="inline-block"
              borderRadius="full"
              borderWidth={2}
              borderColor={useColorModeValue(
                'blackAlpha.900',
                'whiteAlpha.600'
              )}
              overflow="hidden"
            >
              <Image src={profilePhoto} alt="Murat Ogulcan Sahin" />
            </Box>
          </Box>
        </Box>

        <Box h={{ base: 'xs', md: 'sm' }}>
          <Suspense
            fallback={
              <Spinner
                size="xl"
                position="absolute"
                left="50%"
                top="50%"
                ml="calc(0px - var(--spinner-size) / 2)"
                mt="calc(0px - var(--spinner-size))"
              />
            }
          >
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -32], fov: 90 }}>
              <ambientLight
                intensity={3}
                position={[0, 0, -30]}
                color="white"
              />
              <fog attach="fog" args={['#202025', 0, 38]} />
              <group>
                <Suspense fallback={<Loader />}>
                  <Cloud count={8} radius={20} />
                  <CoreSphere />
                </Suspense>
              </group>
              <OrbitControls autoRotate={true} enableZoom={false} />
            </Canvas>
          </Suspense>
        </Box>

        <Box>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Box as="p" fontSize={['md', 'md', 'lg']}>
            Software Developer with 3+ years of professional experience, and
            still as passionate and curious as the day one. I enjoy{' '}
            <strong>
              creating, problem solving, learning and collaborating
            </strong>
            . I value <strong>innovation, efficiency</strong> and{' '}
            <strong>teamwork</strong>. Proficient in .NET, Angular, React and
            Rails frameworks. To learn more about the tech stack I use, spin
            around my &quot;Skills Sphere&quot; above.
          </Box>
        </Box>

        <Box my={4}>
          <Heading as="h3" variant="section-title">
            Timeline
          </Heading>
          <Timeline />
        </Box>
      </Container>
    </Layout>
  )
}

export default Home
