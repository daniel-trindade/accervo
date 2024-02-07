import { Stage, Layer, Line } from 'react-konva';
import { useState } from 'react';
import styles from './Konva.module.css'

const Triangle = () => {

  const centerX = 600
  const centerY = 150
  const [aSide, setASide] = useState()
  const [bSide, setBSide] = useState()
  const [cSide, setCSide] = useState()

  const x1 = centerX - (aSide/2)
  const y1 = centerY + (bSide/2)
  const x2 = x1
  const y2 = centerY - (bSide/2)
  const x3 = centerX + (aSide/2)
  const y3 = centerY + (bSide/2)
  const x4 = x1
  const y4 = y1

  const handleSubmit = (e) =>{
    e.preventDefault()
    const aSideValue = document.getElementById('aSide').value
    const bSideValue = document.getElementById('bSide').value
    const cSideValue = document.getElementById('cSide').value

    setASide(parseFloat(aSideValue))
    setBSide(parseFloat(bSideValue))
    setCSide(parseFloat(cSideValue))

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="aSide" className={styles.tagLabel}>Base: </label>
        <input type="number" name="aSide" id="aSide" className={styles.dialogBox}/>
        <label htmlFor="bSide" className={styles.tagLabel}>Altura: </label>
        <input type="number" name="bSide" id="bSide" className={styles.dialogBox}/>
        <label htmlFor="cSide" className={styles.tagLabel}>Lado c: </label>
        <input type="number" name="cSide" id="cSide" className={styles.dialogBox}/>
        <input type="submit" value="Gerar" className={styles.btn}/>
      </form>

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