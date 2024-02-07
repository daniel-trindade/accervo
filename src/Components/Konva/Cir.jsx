import { Stage, Layer, Circle, Rect } from "react-konva";
import { useState } from "react";
import styles from './Konva.module.css'

function Cir(){

  const [rad, setRad] = useState()

  const handleSubmit = (e) =>{
    e.preventDefault()
    const radValue = document.getElementById('rad').value
    setRad(parseFloat(radValue)*10)
  }
  return(

    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="rad" className={styles.tagLabel}>Raio : </label>
        <input type="number" name="rad" id="rad" className={styles.dialogBox}/>

        <input type="submit" value="Gerar" className={styles.btn}/>
      </form>

      <div className={styles.konvaContainer} >
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