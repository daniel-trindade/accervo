import { Group, Line } from 'react-konva';

const Triangle = ({ sideA, sideB, sideC }) => {
  // Calcular as coordenadas dos vértices do triângulo com base nos lados fornecidos
  const x0 = 0;
  const y0 = 0;
  const x1 = sideB;
  const y1 = 0;
  const x2 = (sideC ** 2 - sideA ** 2 + sideB ** 2) / (2 * sideB);
  const y2 = Math.sqrt(sideA ** 2 - x2 ** 2);

  return (
    <Group>
      {/* Linhas representando os lados do triângulo */}
      <Line points={[x0, y0, x1, y1, x2, y2, x0, y0]} closed stroke="#00bfff" strokeWidth={2} />
      {/* Pontos representando os vértices do triângulo */}
      <Line points={[x0, y0, x1, y1]} stroke="#000" strokeWidth={2} />
      <Line points={[x1, y1, x2, y2]} stroke="#000" strokeWidth={2} />
      <Line points={[x2, y2, x0, y0]} stroke="#000" strokeWidth={2} />
    </Group>
  );
};

export default Triangle;