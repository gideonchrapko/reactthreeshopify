import React, { useRef, useEffect } from 'react'
import { extend, useThree, useFrame } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

export default function Controls({ disable, ...props }) {
  
  const { camera, gl } = useThree()
  const ref = useRef()
  useFrame(() => ref.current.update())

  useEffect(() => {
    if (disable) {
      ref.current.addEventListener('start', () => disable(true))
      ref.current.addEventListener('end', () => disable(false))
    }
    //terminal window said  [disable] was missing
  }, [disable])

  return (
    <orbitControls
      ref={ref}
      target={[0, 0, 0]}
      enableDamping
      enableZoom={false}
      enablePan={false}
      dampingFactor={0.05}
      rotateSpeed={0.9}
      minPolarAngle={Math.PI / 1.9}
      maxPolarAngle={Math.PI / 1.9}
      {...props}
      args={[camera, gl.domElement]}
    />
  )
}
