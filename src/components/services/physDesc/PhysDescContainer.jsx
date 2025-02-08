import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { PhysDesc } from "./PhysDesc"
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei"

const PhysDescContainer = () => {
    return(
        <Canvas>
            <Suspense fallback="loading...">
            <Stage environment={"city"}>
            <PhysDesc/>
            </Stage>
                
                <OrbitControls enableZoom={false} autoRotate/>
                <PerspectiveCamera position={[-1,0,1.8]} zoom={0.8} makeDefault/>
            </Suspense>
        </Canvas>
    )
}


export default PhysDescContainer