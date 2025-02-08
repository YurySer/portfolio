import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"

import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei"
import ExamModel from "./ExamModel"

const ExamModelContainer = () => {
    return(
        <Canvas>
            <Suspense fallback="loading...">
            <Stage environment={"city"}>
            <ExamModel/>
            </Stage>
                
                <OrbitControls enableZoom={false} autoRotate/>
                <PerspectiveCamera position={[-1,0,1.8]} zoom={0.8} makeDefault/>
            </Suspense>
        </Canvas>
    )
}


export default ExamModelContainer