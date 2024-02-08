import { Stage, Layer, Circle, Rect } from "react-konva";
import { useState, useEffect } from "react";
import styles from './Konva.module.css'

function Cir(){

  const wKonva = 900
  const hKonva = 500

  const [rad, setRad] = useState()
  const [diameter, setDiameter] = useState()
  const [circumference, setCircumference] = useState()
  const [area, setArea] = useState()

  const handleSubmit = (e) =>{
    e.preventDefault()
    const radValue = document.getElementById('rad').value
    setRad(parseFloat(radValue))
  }

  useEffect(() => {
    const newDiameter = (rad*2)
    const newArea = (Math.PI*(rad**2)).toFixed(2)
    const newCircumference = (2*(Math.PI*rad)).toFixed(2)

    setDiameter(newDiameter)
    setArea(newArea)
    setCircumference(newCircumference)

  }, [rad])


  return(

    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="rad" className={styles.tagLabel}>Raio : </label>
        <input type="number" name="rad" id="rad" className={styles.dialogBox}/>

        <input type="submit" value="Gerar" className={styles.btn}/>
      </form>

      <div className={styles.geoContainer}>
        <div className={styles.konvaContainer} >
          <Stage width={wKonva} height={hKonva}>
            <Layer draggable>
              <Circle 
                radius={rad}
                stroke='#FFA500'
                strokeWidth={4}
                x={wKonva/2}
                y={hKonva/2}
              />
            </Layer>
          </Stage>
        </div>

        <div className={styles.infoContainer}>

          <label htmlFor="diameter" className={styles.labelKonva}>Diâmetro</label>
          <input type="number" id="diameter" value={diameter} readOnly className={styles.propertiesBox}/>

          <label htmlFor="area" className={styles.labelKonva}>Área</label>
          <input type="number" id="area" readOnly value={area} className={styles.propertiesBox}/>

          <label htmlFor="circumference" className={styles.labelKonva}>Circonferência</label>
          <input type="number" id="circumference" readOnly value={circumference} className={styles.propertiesBox}/>

        </div>
      </div>
    </>
    

  )
}

export default Cir