import React from "react";
import { Torus } from "@react-three/drei";

const Bearing = (rotation) => {
  const torusRadius = 2;
  const tubeRadius = 0.3;
  const torusSegments = 64;
  const tubeSegments = 32;
  const numSpheres = 10;

  const generateRandomPosition = (radius, index) => {
    const angle = ((Math.PI * 2) / numSpheres) * index; // Equally divide the circle based on the number of spheres
    const tubeRadiusOffset = tubeRadius * 0.5; // Adjust the offset to keep the spheres within the tube
    const x =
      Math.cos(angle) * (torusRadius - tubeRadius - radius - tubeRadiusOffset);
    const y =
      Math.sin(angle) * (torusRadius - tubeRadius - radius - tubeRadiusOffset);
    const z = 0;
    return [x, y, z];
  };

  const spheres = [];
  for (let i = 0; i < numSpheres; i++) {
    const [x, y, z] = generateRandomPosition(-0.442, i);
    spheres.push(
      <mesh key={i} position={[x, y, z]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    );
  }

  return (
    <Torus
      args={[torusRadius, tubeRadius, torusSegments, tubeSegments]}
      position={[0, 0, 0]}
      //   rotation={rotation}
    >
      <meshStandardMaterial wireframe />

      {spheres}
    </Torus>
  );
};

export default Bearing;
