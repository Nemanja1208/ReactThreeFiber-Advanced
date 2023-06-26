import React, { useRef } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const BearingSKF = ({ position, rotation }) => {
  const gltf = useLoader(GLTFLoader, "./BearingSKF.gltf");

  // Traverse the model and change the color of all the materials
  const changeModelColor = (object) => {
    if (object.isMesh) {
      // Create a new metal material with the desired color and metallicness
      const newMaterial = new THREE.MeshStandardMaterial({
        color: 0x999999,
        metalness: 0.85, // Increase the metalness value for a more metallic appearance
        roughness: 0.1, // Decrease the roughness for a smoother surface
        // envMapIntensity: 1, // Increase the environment map intensity for better reflections
        side: THREE.DoubleSide, // Render both sides of the material
      });
      // Assign the new material to the mesh
      object.material = newMaterial;
      // Enable material color to be affected by lights in the scene
      object.material.needsUpdate = true;
    }
  };

  // Traverse the model and call the changeModelColor function on each child mesh
  const modelRef = useRef();
  gltf.scene.traverse(changeModelColor);

  return (
    <>
      <primitive
        object={gltf.scene}
        scale={0.01}
        position={position}
        rotation={rotation}
        ref={modelRef}
      />
    </>
  );
};

export default BearingSKF;
