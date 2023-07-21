import React, { Suspense, useRef,useState, useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Preload,} from "@react-three/drei";
import CanvasLoader from "../Loader";
import { debounce } from "lodash";

gsap.registerPlugin(ScrollTrigger);

const BallBg = ({isMobile}) => {

  const meshRef = useRef();
  const scrollTriggerRef = useRef();
    
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y -= 0.0005;
    }
  });
  
    const { camera } = useThree();
    camera.zoom = 5.8
    camera.updateProjectionMatrix();

    useEffect(() => {
      let ctx = gsap.context(() => {
        const body = document.querySelector("#body");
        
        scrollTriggerRef.current = ScrollTrigger.create({
          trigger: body,
          start: "top top",
          end: () => "+=" + body.offsetHeight * 1.25,
          onUpdate: handleScroll
          
        })

        function handleScroll ()  {
          if (scrollTriggerRef.current) {
            const progress =  scrollTriggerRef.current.progress;
            const rotationAmount = Math.PI * 2 * progress;

            if (meshRef.current) {
              meshRef.current.rotation.x = rotationAmount * -1;
            }

            camera.zoom = 5.8 + progress * 2;
            camera.updateProjectionMatrix();
          }             
        }
       
        const debouncedHandleScroll = debounce(handleScroll, 20);

        window.addEventListener("scroll", debouncedHandleScroll);
       
      },meshRef)
        return () => ctx.revert();
       
      }, []);
  
  return (
    <>
    <ambientLight intensity={0.8} />
    <directionalLight intensity={2} position={[-1, 1, 1]} />
    
    <mesh castShadow 
    receiveShadow 
    ref={meshRef} 
    position={[0, 0, 0]}
    scale = {isMobile ? 0.6 : 1}>
      <icosahedronGeometry args={[1, 15]}   />
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
    
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 650px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
    return (
        <Canvas
        
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
        
          <BallBg isMobile = {isMobile} />
        </Suspense>
  
        <Preload all />
      </Canvas>
    )
  }


export default BallBgCanvas