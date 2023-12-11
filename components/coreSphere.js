import { useColorModeValue } from '@chakra-ui/react'
import { Sparkles } from '@react-three/drei'
import * as THREE from 'three'

const CoreSphere = () => {
  const sparkleColorValue = useColorModeValue('#285E61', '#ffffff')
  const color = new THREE.Color(sparkleColorValue)
  return (
    <mesh>
      <sphereGeometry args={[15, 42, 18]} />
      <meshStandardMaterial
        color="#ffffff"
        metalness={0}
        roughness={0.5}
        wireframe={true}
        opacity={0.8}
        transparent={true}
        flatShading={true}
      />
      <Sparkles count={50} scale={19} size={14} speed={0.5} color={color} />
    </mesh>
  )
}

export default CoreSphere
