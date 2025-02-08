import { useGLTF, useAnimations } from '@react-three/drei'
import React from 'react'
export function PhysDesc(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/physDesc.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="6a9d49e5e1f04c098a1c964a8d86547afbx" rotation={[Math.PI / 2, 0, 0]} scale={0.001}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Box001" position={[0, 74.72, 0]}>
                  <group name="Object_5" position={[0, 0, -0.665]}>
                    <mesh name="Box001_Material_#36_0" geometry={nodes['Box001_Material_#36_0'].geometry} material={materials.Material_36} />
                    <mesh name="Box001_Material_#37_0" geometry={nodes['Box001_Material_#37_0'].geometry} material={materials.Material_37} />
                  </group>
                </group>
                <group name="Rectangle002" position={[0, 60.26, 0]} rotation={[0, -1.571, 0]}>
                  <group name="Object_9" position={[0, -58.145, 75.468]}>
                    <mesh name="Rectangle002_Material_#38_0" geometry={nodes['Rectangle002_Material_#38_0'].geometry} material={materials.Material_38} />
                  </group>
                </group>
                <group name="Box004" position={[-2.15, 35.115, 3.731]} rotation={[-Math.PI / 2, 0, -1.821]}>
                  <group name="Object_12" position={[0, 1.283, -0.3]}>
                    <mesh name="Box004_crayon_0" geometry={nodes.Box004_crayon_0.geometry} material={materials.crayon} />
                  </group>
                </group>
                <group name="Object001" position={[0, 60.26, 0]} rotation={[0, -1.571, 0]}>
                  <group name="Object_15" position={[0, -58.145, 75.468]}>
                    <mesh name="Object001_metal_part_0" geometry={nodes.Object001_metal_part_0.geometry} material={materials.metal_part} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/physDesc.glb')
