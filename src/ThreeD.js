import * as THREE from 'three'
import React, { Suspense } from 'react'
import { Canvas, Dom } from 'react-three-fiber'
import { withRouter } from "react-router-dom";
import Controls from './components/Controls'
import Environment from './components/Environment'

import Sphere from './components/Sphere'
import Jacket from './components/Jacket'
import Loading from './components/Loading'

import './threed.css'


const ThreeD = () => {
  return (
      <>
          <Canvas
            concurrent
            // noEvents={active}
            pixelRatio={window.devicePixelRatio}
            camera={{ position: [7, 7, 1] }}
            gl={{ antialias: true }}
            onCreated={({ gl, scene }) => {
              gl.toneMapping = THREE.ACESFilmicToneMapping
              gl.outputEncoding = THREE.sRGBEncoding
              scene.background = new THREE.Color('#515151')
              //scene.background.convertSRGBToLinear()
          }}>
          <Controls />
          <Suspense fallback={<Dom center><Loading /></Dom>}>
            <Environment />
            {/* <Effect /> */}
            <Sphere position={[-1, 0, -6]} />
            {/* <Suzanne position={[5, 0, 1]} rotation={[0, -5, 0]} onClick={() => history.push('/ProductOne')} /> */}
            <Jacket onClick={() => window.appHistory.push("/ProductOne")}/>
            {/* <Sphere position={[4, 0, -4]}  /> */}
            <Sphere position={[-1, 0, -6]} />
          </Suspense>
          </Canvas>
      </>
    )
  }

export default withRouter(ThreeD);