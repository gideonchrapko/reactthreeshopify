import * as THREE from 'three'
import React, { Suspense } from 'react'
import { Canvas, Dom } from 'react-three-fiber'
import { withRouter } from "react-router-dom";
import Controls from './components/Controls'
import Lights from './components/Lights'
import Environment from './components/Environment'

import Sphere from './components/Sphere'
import Jacket from './components/Jacket'
import Loading from './components/Loading'

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
            {/* <Lights /> */}
            <Sphere position={[-1, 0, -6]} />
            <Jacket />
            <Jacket onClick={() => window.appHistory.push("/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ1NTkyMzUyNTIyOTg=")}/>
            <Sphere position={[-1, 0, -6]} onClick={() => window.appHistory.push("/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ1NjE3MzI2NjU0MTg=")}/>
          </Suspense>
          </Canvas>
      </>
    )
  }

export default withRouter(ThreeD);