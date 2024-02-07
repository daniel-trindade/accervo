import { Stage, Layer, Circle, Rect } from "react-konva";
import styles from './Konva.module.css'

function Cir({rad}){
  return(

    <>
      <label htmlFor="aSide" className={styles.tagLabel}>Raio : </label>
      <input type="number" name="aSide" id="aSide" className={styles.dialogBox}/>

      <input type="submit" value="Gerar" className={styles.btn}/>

      <div className={styles.konvaContainer}>
        <Stage width={1200} height={300}>
          <Layer draggable>
            <Circle 
              radius={rad}
              stroke='#FFA500'
              strokeWidth={4}
              x={600}
              y={150}
            />
          </Layer>
        </Stage>
          
      </div>
    </>
    

  )
}

export default Cir