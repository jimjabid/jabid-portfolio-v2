import React, { Suspense, useRef,useState, useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

import {
  Float,
  
  Preload,
 
} from "@react-three/drei";

import CanvasLoader from "../Loader";

gsap.registerPlugin(ScrollTrigger);

const BallBg = () => {
    const meshRef = useRef();
    useFrame((state, delta) => (meshRef.current.rotation.y -= 0.0005))
  
    const { camera } = useThree();
    camera.zoom = 5.8;
    camera.updateProjectionMatrix();

    useEffect(() => {
        const body = document.querySelector(".body");
    
        ScrollTrigger.create({
          trigger: body,
          start: "top top",
          end: () => "+=" + body.offsetHeight * 1.25,
          onUpdate: (self) => {
            const progress = self.progress;
            const rotationAmount = Math.PI * 2 * progress;
            meshRef.current.rotation.x = rotationAmount * -1;
            
            camera.zoom = 5.8 + progress * 2;
            camera.updateProjectionMatrix();
          },
          
        });
       
      }, []);
  
  return (
    <>
    <ambientLight intensity={0.8} />
    <directionalLight intensity={2} position={[-1, 1, 1]} />
    
    <mesh castShadow receiveShadow ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1, 15]} />
      <meshPhysicalMaterial
        color= {0x224b6d}
        wireframe={true}
        roughness={0}
        metalness={0.5}
        clearcoat={1}
        clearcoatRoughness={0.4}
        side={2}
      />
    
    </mesh>
    </>
  )
}

const BallBgCanvas = () => {
    
   
    return (
        <Canvas
        
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
        
          <BallBg  />
        </Suspense>
  
        <Preload all />
      </Canvas>
    )
  }


export default BallBgCanvas