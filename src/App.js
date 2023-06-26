import React, { useState, Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Text } from "@react-three/drei";
import Grid from "./Grid";
import Controls from "./Controls";
import "./styles.css";
import BearingSKF from "./BearingSKF";

// const Cube = ({ position, rotation, scale = [1, 1, 1], handleClick }) => (
//   <Box
//     args={[1, 1, 1]}
//     position={position}
//     rotation={rotation}
//     scale={scale}
//     onClick={handleClick}
//   >
//     <meshStandardMaterial attach="material" color="white" />
//   </Box>
// );

export default function App() {
  // Here we declare our state for the transformation of our Box
  const [gridActivated, setGridActivated] = useState(false);
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);
  const [zPosition, setZPosition] = useState(0);

  const [xRotation, setXRotation] = useState(0);
  const [yRotation, setYRotation] = useState(0);
  const [zRotation, setZRotation] = useState(0);

  const [xScale, setXScale] = useState(1);
  const [yScale, setYScale] = useState(1);
  const [zScale, setZScale] = useState(1);

  const [isShallow, setIsShallow] = useState(true);

  return (
    <>
      <Canvas camera={{ position: [0, 2, 10] }}>
        <Suspense
          fallback={
            <Text
              color="white" // default
              anchorX="center" // default
              anchorY="middle" // default
            >
              Loading
            </Text>
          }
        >
          <OrbitControls />
          <directionalLight intensity={0.5} position={[6, 5, 4]} />
          <directionalLight intensity={0.1} position={[-6, -5, -4]} />
          <ambientLight intensity={0.1} />
          {gridActivated && <Grid size={10}></Grid>}
          <BearingSKF
            rotation={[
              xRotation * Math.PI,
              yRotation * Math.PI,
              zRotation * Math.PI,
            ]}
          />
          {/* <Cube
            handleClick={() => console.log("clicked on the cube")}
            rotation={[
              xRotation * Math.PI,
              yRotation * Math.PI,
              zRotation * Math.PI,
            ]}
            position={[xPosition, yPosition, zPosition]}
            scale={[xScale, yScale, zScale]}
          /> */}
        </Suspense>
      </Canvas>
      <Controls
        controls={{
          gridActivated,
          isShallow,
          xPosition,
          yPosition,
          zPosition,
          xRotation,
          yRotation,
          zRotation,
          xScale,
          yScale,
          zScale,
          setGridActivated,
          setIsShallow,
          setXPosition,
          setYPosition,
          setZPosition,
          setXRotation,
          setYRotation,
          setZRotation,
          setXScale,
          setYScale,
          setZScale,
        }}
      />
    </>
  );
}
