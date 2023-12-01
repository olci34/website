import { Sparkles } from '@react-three/drei'

const CoreSphere = () => {
  return (
    <mesh>
      <sphereGeometry args={[15, 32, 16]} />
      <meshStandardMaterial color="#F7FAFC" metalness={0.3} wireframe={true} />
      <Sparkles count={50} scale={19} size={15} speed={0.5} />
    </mesh>
  )
}

export default CoreSphere
