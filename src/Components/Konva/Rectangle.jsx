import { Stage, Layer, Rect } from "react-konva";
import styles from './Konva.module.css'

function Rectangle({aSide, bSide}){
  return(

    <>
      <label htmlFor="aSide" className={styles.tagLabel}>Lado A: </label>
      <input type="number" name="aSide" id="aSide" className={styles.dialogBox}/>
      <label htmlFor="bSide" className={styles.tagLabel}>Lado B: </label>
      <input type="number" name="bSide" id="bSide" className={styles.dialogBox}/>

      <input type="submit" value="Gerar" className={styles.btn}/>

      <div className={styles.konvaContainer}>
        <Stage width={1200} height={300}>
          <Layer draggable>
            <Rect
              width={aSide}
              height={bSide}
              x={600}
              y={150}
              stroke='#FFA500'
              strokeWidth={4}
            />
          </Layer>
        </Stage>
          
      </div>
    </>
    

  )
}

export default Rectangle