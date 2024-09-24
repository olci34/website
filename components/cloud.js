import { useMemo } from 'react'
import Word from './word'
import * as THREE from 'three'

const skills = [
  ['HTML', 'CSS', 'SQL'],
  ['Ruby', 'Sinatra', 'Rails'],
  ['GraphQL', 'RDBMS', 'SQL Server'],
  ['React', 'JavaScript', 'NextJS'],
  ['.NET', 'REST', 'C#'],
  ['Python', 'FastAPI', 'Flask'],
  ['TypeScript', 'Angular', 'Akita'],
  ['Git', 'GCP', 'Azure']
]

const Cloud = ({ count = 4, radius = 20 }) => {
  const words = useMemo(() => {
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count

    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          skills[i % skills.length][j % skills[0].length]
        ])
      }
    }

    return temp
  }, [count, radius])

  return words.map(([pos, word], index) => (
    <Word key={index} position={pos}>
      {word}
    </Word>
  ))
}

export default Cloud
