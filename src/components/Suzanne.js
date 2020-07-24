/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef, useState, useEffect } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import Shadow from './Shadow'

export default function Model(props) {

  const group = useRef()
  const texture = useLoader(THREE.TextureLoader, '/flakes.png')
  const { nodes } = useLoader(GLTFLoader, '/suzanne-draco.glb', loader => {
    

    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/draco-gltf/')
    loader.setDRACOLoader(dracoLoader)

    


  })
  
  const [hovered, set] = useState(false)

  useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])


  return (




    <group ref={group} {...props} dispose={null}>
      

      <mesh
        scale={[0.2, 0.2, 0.2]}
        position={[0, -0.75, 0]}
        geometry={nodes.Suzanne.geometry}
        rotation={[-0.61, 0, 0]}
        onPointerOver={() => set(true)}
        onPointerOut={() => set(false)}>
        <meshStandardMaterial
          attach="material"
          metalness={0.5}
          roughness={0.4}
          color={hovered ? 'red' : 'black'}
          normalMap={texture}
          normalScale={[0.5, 0.5]}
          normalMap-wrapS={THREE.RepeatWrapping}
          normalMap-wrapT={THREE.RepeatWrapping}
          normalMap-repeat={[40, 40]}
        />
      </mesh>
      <Shadow renderOrder={2} position={[0, -1.5, -0.1]} scale={[4, 3, 1]} rotation={[-Math.PI / 2, 0, 0]} />
      <Shadow renderOrder={1} stop={0.5} opacity={0.6} position={[0, -1.5001, 1.5]} scale={[2.6, 1.5, 1]} rotation={[-Math.PI / 2, 0, 0]} />
      
    </group>

  )
}
