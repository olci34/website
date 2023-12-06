import { useColorModeValue } from '@chakra-ui/react'
import { Sparkles } from '@react-three/drei'
import * as THREE from 'three'

const CoreSphere = () => {
  const sparkleColors = useColorModeValue('#285E61', '#ffffff')
  return (
    <mesh>
      <sphereGeometry args={[15, 32, 16]} />
      <meshStandardMaterial
        color="#ffffff"
        metalness={0}
        roughness={0.5}
        wireframe={true}
        opacity={0.8}
        transparent={true}
        flatShading={true}
      />
      <Sparkles
        count={50}
        scale={19}
        size={15}
        speed={0.5}
        color={new THREE.Color(sparkleColors)}
      />
    </mesh>
  )
}

export default CoreSphere
