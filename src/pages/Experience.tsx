import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react";
import { Object3D } from "three";

function Experience()
{
  return (
    <main className="h-screen">
        <Canvas camera={{fov:20}}>
            <Experience3D />
            {/* <Environment background preset="sunset" /> */}
            <OrbitControls/>
        </Canvas>
    </main>
  )
}

export default Experience;

function Experience3D()
{
    const gltf = useGLTF('Template.glb');

    const AnimCamera = useRef<Object3D>();

    useEffect(()=>{
        if(!gltf) return;
        //Change this to find your camera in the glb file
        AnimCamera.current = gltf.scene.getObjectByName('Suzanne')?.getObjectByName("CamPivot")?.getObjectByName("Camera");
    },[gltf])

    useFrame((state)=>{
        if (!AnimCamera.current) return;
        AnimCamera.current.getWorldPosition(state.camera.position);
        AnimCamera.current.getWorldQuaternion(state.camera.quaternion);
        state.camera.updateMatrixWorld();
    })

    return(
        <>
            <primitive object={gltf.scene} />
        </>
    )
}