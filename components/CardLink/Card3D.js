import {useEffect, useMemo} from 'react'
import * as THREE from 'three'
import {SVGLoader} from './SVGLoader'
import {Canvas, useLoader} from '@react-three/fiber'
import {Html, OrbitControls, Text} from '@react-three/drei'

import {useGesture} from '@use-gesture/react'
import {useSpring, animated, to} from '@react-spring/three'

import {canvas, infoWrapper} from './styles'

const defaultThickness = 2
const materials = {
  gold: new THREE.MeshStandardMaterial({
    color: new THREE.Color(1.000, 0.766, 0.336),
    roughness: 0.75,
    metalness: 0.75
  })
}

const findLayer = node => (node.tagName === 'g' && node.parentElement.tagName === 'svg')
  ? node
  : node?.parentElement
    ? findLayer(node.parentElement)
    : null

const generateScene = svg => {
  const svgData = useLoader(SVGLoader, svg)

  const rootGroup = new THREE.Group()
  rootGroup.scale.y *= -1

  svgData.paths.reduce((newPaths, path) => {
    const pathNode = path.userData.node
    const layer = findLayer(pathNode)

    const previousPath = newPaths[newPaths.length - 1]

    const previousPathSameLayer = layer === previousPath?.layer

    const startZ = previousPathSameLayer ? previousPath?.startZ : previousPath?.endZ ?? 0
    const thickness = layer?.getAttribute('data-thickness') ?? defaultThickness
    const endZ = startZ + thickness

    const layerMaterial = materials[layer?.getAttribute('data-material')]
      ?? new THREE.MeshStandardMaterial({color: new THREE.Color(window.getComputedStyle(pathNode).getPropertyValue('fill'))})

      // const a = document.body.appendChild(pathNode)
    // console.log(pathNode, window.getComputedStyle(pathNode).getPropertyValue('fill'))

    const shapes = SVGLoader.createShapes(path)

    shapes.forEach(shape => {
      const geometry = new THREE.ExtrudeGeometry(shape, {
        depth: thickness,
        bevelEnabled: false
      })

      const mesh = new THREE.Mesh(geometry, layerMaterial)

      mesh.position.z = startZ

      rootGroup.add(mesh)
    })

    const info = {
      startZ,
      endZ,
      layer,
    }

    return [...newPaths, info]
  }, [])

  const box = new THREE.Box3().setFromObject(rootGroup)
  const size = new THREE.Vector3()
  box.getSize(size)

  const yOffset = size.y / -2
  const xOffset = size.x / -2

  // Offset all of group's elements, to center them
  rootGroup.children.forEach(item => {
    item.position.x = xOffset
    item.position.y = yOffset
  })

  return rootGroup
}

function Model({svg, rotate, flip, showBack, children, ...props}) {
  const rootGroup = useMemo(() => generateScene(svg), [svg])

  const tiltDegrees = 40
  const tiltRadians = tiltDegrees * (Math.PI / 180)

  const flipModifier = 360 / 2 / tiltDegrees

  const rotX = rotate?.x.to([0, 1], [0, tiltRadians])
  const rotY = to(
    [rotate.y, flip.value],
    (y, value) => y + (value * flipModifier)
  ).to([0, 1], [0, tiltRadians])

  return (
    <animated.group
      rotation-x={rotX}
      rotation-y={rotY}
      {...props}
    >
      <primitive object={rootGroup} />
      {showBack && <Html position={[0, 16, -1]} scale={[-100, 100, 1]} transform style={{width: 100, height: 150}}>
        {children}
      </Html>}
     {/*  <Text

        position={[125, 190, -1]}
        scale={[-200, 200, 200]}
        color="#232323" // default
        anchorX="left" // default
        anchorY="top" // default
      >
        Hello
      </Text> */}
      <directionalLight position={[0, 0, -750]} intensity={0.4} />
    </animated.group>
  )
}

const Card3D = ({card, flipCount, ...props}) => {
  const [rotate, rotateApi] = useSpring(() => ({x: 0, y: 0, z: 0}))
  const [flip, flipApi] = useSpring(() => ({value: flipCount}))

  const bind = useGesture({
    onMove: state => {
      const {xy: [x, y], currentTarget} = state

      const {x: tx, y: ty, width, height} = currentTarget.getBoundingClientRect()
      const [cx, cy] = [tx + width / 2, ty + height / 2]

      const [dx, dy] = [x - cx, y - cy]

      /* console.log({currentTarget, state, dy, dx, height, width}, {
        x: dy / (height/2),
        y: dx / (width/2),
        z: 0
      }) */

      rotateApi.start({
        x: dy / (height/2),
        y: dx / (width/2),
        z: 0
      })
    },
    onHover: state => {
      if(!state.hovering) rotateApi.start({x: 0, y: 0, z: 0})
    }
  })

  useEffect(() => {flipApi.start({value: flipCount})}, [flipCount])

  const showBack = flipCount % 2 === 1

  return (
    <Canvas
      {...props}
      {...bind()}
      className={canvas}
      gl={{outputEncoding: THREE.sRGBEncoding}}
      camera={{fov: 50, near: 0.1, far: 1000, position: [0, 0, 550]}}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[0, 0, 750]} intensity={0.4} />
      
      <Model svg={card.svg} rotate={rotate} flip={flip} showBack={showBack}>
        <section className={infoWrapper}>
          <h1>{card.title}</h1>
          <h2>{card.year}</h2>
        </section>
      </Model>
      
      {/* <OrbitControls enableZoom={!false} enablePan={false} /> */}
    </Canvas>
  )
}

export default Card3D

