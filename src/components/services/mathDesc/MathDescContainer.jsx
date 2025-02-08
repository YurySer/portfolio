import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"

import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei"
import MathDesc from "./MathDesc"

const MathDescContainer = () => {
    return(
        <Canvas>
            <Suspense fallback="loading...">
            <Stage environment={"city"}>
            <MathDesc/>
            </Stage>
                
                <OrbitControls enableZoom={false} autoRotate/>
                <PerspectiveCamera position={[-1,0,1.8]} zoom={0.8} makeDefault/>
            </Suspense>
        </Canvas>
    )
}


export default MathDescContainer