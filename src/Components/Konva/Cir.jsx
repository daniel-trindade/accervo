import { Stage, Layer, Circle } from "react-konva";

function Cir({rad}){
  return(
    <Stage width={1200} height={300}>
      <Layer>
        <Circle 
          radius={rad}
          stroke='#FFA500'
          strokeWidth={4}
          x={600}
          y={150}
        />
      </Layer>
    </Stage>

  )
}

export default Cir