import React, { useRef } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const BearingSKF = ({ rotation }) => {
  const gltf = useLoader(GLTFLoader, "./BearingSKF.gltf");

  // Traverse the model and change the color of all the materials
  const changeModelColor = (object) => {
    if (object.isMesh) {
      // Create a new metal material with the desired color and metallicness
      const newMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.75,
        roughness: 0.2, // Adjust roughness as desired
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
        position={[0, 0, 0]}
        rotation={rotation}
        ref={modelRef}
      />
    </>
  );
};

export default BearingSKF;
