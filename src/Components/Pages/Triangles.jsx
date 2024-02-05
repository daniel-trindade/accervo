import { Stage, Layer, Rect, Circle } from 'react-konva';


function Triangles(){
  return(
    <div>
      <h1>Relação de Triangulos</h1>
      <Stage 
        width={1200}
        height={300}
        className="bg-white"
      >
        <Layer>
          <Rect  draggable fill='red' width={100} height={100}/>
        </Layer>

      </Stage>
    </div>
  )
}

export default Triangles;