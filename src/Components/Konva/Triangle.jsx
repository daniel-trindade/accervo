import { Stage, Layer, Line } from 'react-konva';
import styles from './Konva.module.css'

const Triangle = ({ aSide, bSide, cSide}) => {

  const centerX = 600
  const centerY = 150

  const x1 = centerX - (aSide/2)
  const y1 = centerY
  const x2 = x1
  const y2 = centerY - bSide
  const x3 = centerX + (aSide/2)
  const y3 = centerY
  const x4 = x1
  const y4 = y1

  return (
    <>
      <label htmlFor="aSide" className={styles.tagLabel}>Lado a: </label>
      <input type="number" name="aSide" id="aSide" className={styles.dialogBox}/>
      <label htmlFor="aSide" className={styles.tagLabel}>Lado b: </label>
      <input type="number" name="aSide" id="aSide" className={styles.dialogBox}/>
      <label htmlFor="aSide" className={styles.tagLabel}>Lado c: </label>
      <input type="number" name="aSide" id="aSide" className={styles.dialogBox}/>
      <input type="submit" value="Gerar" className={styles.btn}/>

      <div className={styles.konvaContainer}>
        <Stage width={1200} height={300}>
          <Layer>
            <Line 
              points={[x1, y1, x2, y2, x3, y3, x4, y4]}
              strokeWidth={4}
              stroke='#FFA500'
            />
          </Layer>
        </Stage>
      </div>
    </>

    
  );
};

export default Triangle;