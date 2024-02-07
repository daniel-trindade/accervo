import { Stage, Layer, Rect } from "react-konva";
import { useState } from "react";
import styles from './Konva.module.css'

function Rectangle(){

  const [base, setBase] = useState()
  const [height, setHeight] = useState()

  const xCenter = (600-(base/2))
  const yCenter = (150-(height/2))

  const handleSubmit = (e) =>{
    e.preventDefault()

    const baseValue = document.getElementById('base').value
    const heightValue = document.getElementById('height').value

    setBase(parseFloat(baseValue))
    setHeight(parseFloat(heightValue))
  }
  


  return(

    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="base" className={styles.tagLabel}>Base:  </label>
          <input type="number" name="base" id="base" className={styles.dialogBox}/>
          <label htmlFor="height" className={styles.tagLabel}>Altura: </label>
          <input type="number" name="height" id="height" className={styles.dialogBox}/>

          <input type="submit" value="Gerar" className={styles.btn}/>
          
        </form>
        
        
      </div>

      

      <div className={styles.konvaContainer}>
        <Stage width={1200} height={300}>
          <Layer draggable>
            <Rect
              width={base}
              height={height}
              x={xCenter}
              y={yCenter}
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