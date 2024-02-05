import { Stage, Group, Line, Layer, Rect, RegularPolygon } from 'react-konva';
import Triangle from '../Konva/Triangle';


function Triangles(){
  const sideA = 100
  const sideB = 100
  const sideC = 100

  const x0 = 0;
  const y0 = 0;
  const x1 = sideB;
  const y1 = 0;
  const x2 = (sideC ** 2 - sideA ** 2 + sideB ** 2) / (2 * sideB);
  const y2 = Math.sqrt(sideA ** 2 - x2 ** 2);

  return(
    <div>
      <h1>Relação de Triangulos</h1>
      <Stage
        width={1200}
        height={300}
      >
        <Layer>
          <Group draggable>
            {/* Linhas representando os lados do triângulo */}
            <Line points={[x0, y0, x1, y1, x2, y2, x0, y0]} closed stroke="#00bfff" strokeWidth={2} />
            {/* Pontos representando os vértices do triângulo */}
            <Line points={[x0, y0, x1, y1]} stroke="#000" strokeWidth={2} />
            <Line points={[x1, y1, x2, y2]} stroke="#000" strokeWidth={2} />
            <Line points={[x2, y2, x0, y0]} stroke="#000" strokeWidth={2} />
          </Group>
        </Layer>
      </Stage>
    </div>
  )
}

export default Triangles;