import { Stage, Layer, Line } from "react-konva";
import { useEffect, useState } from "react";
import styles from './Konva.module.css'
import Hypotenuse from "../../MathFormules/Hypotenuse";

function Trapeze(){

  const wKonva = 900
  const hKonva = 500

  const [base, setBase] = useState()
  const [height, setHeight] = useState()
  const [top, setTop] = useState()
  const [perimeter, setPerimeter] = useState(0)
  const [area, setArea] = useState(0)
  const [alpha, setAlpha] = useState(0)

  const xCenter = (wKonva/2)
  const yCenter = (hKonva/2)

  const handleSubmit = (e) =>{
    e.preventDefault()

    const baseValue = document.getElementById('base').value
    const heightValue = document.getElementById('height').value
    const topValue = document.getElementById('top').value

    setBase(parseFloat(baseValue))
    setHeight(parseFloat(heightValue))
    setTop(parseFloat(topValue))
  }

    //Drawing Trapeze
    const x1 = xCenter - (base/2)
    const y1 = yCenter + (height/2)
    const x2 = xCenter + (base/2)
    const y2 = y1
    const x3 = xCenter + (top/2)
    const y3 = yCenter - (height/2)
    const x4 = xCenter - (top/2)
    const y4 = y3
    const x5 = x1
    const y5 = y1

  useEffect(() => {
    const newPerimeter = (base+top+(2*(Hypotenuse(height, ((base-top)/2))))).toFixed(2)
    const newArea = ((base+top)*height)/2
    const newAlpha = (((Math.asin(height/Hypotenuse(height, ((base-top)/2))))*180)/Math.PI).toFixed(2)

    setPerimeter(newPerimeter)
    setArea(newArea)
    setAlpha(newAlpha)
  }, [base, height, top])
  

  return(

    <>
      <div>
        <form onSubmit={handleSubmit}>

          <label htmlFor="base" className={styles.tagLabel}>Base:  </label>
          <input type="number" name="base" id="base" className={styles.dialogBox}/>

          <label htmlFor="height" className={styles.tagLabel}>Altura: </label>
          <input type="number" name="height" id="height" className={styles.dialogBox}/>

          <label htmlFor="top" className={styles.tagLabel}>Topo: </label>
          <input type="number" name="top" id="top" className={styles.dialogBox}/>

          <input type="submit" value="Gerar" className={styles.btn}/>
          
        </form>
        
        
      </div>
      <div className={styles.geoContainer}>
        <div className={styles.konvaContainer}>
          <Stage width={wKonva} height={hKonva}>
            <Layer>
              <Line 
                points={[x1, y1, x2, y2, x3, y3, x4, y4, x5, y5]}
                strokeWidth={4}
                stroke='#FFA500'
              />
            </Layer>
          </Stage>

            
        </div>
        <div className={styles.infoContainer}>

          <label htmlFor="perimeter" className={styles.labelKonva}>Perímetro</label>
          <input type="number" id="perimeter" value={perimeter} readOnly className={styles.propertiesBox}/>

          <label htmlFor="area" className={styles.labelKonva}>Área</label>
          <input type="number" id="area" readOnly value={area} className={styles.propertiesBox}/>

          <label htmlFor="alpha" className={styles.labelKonva}>Ângulo Alfa</label>
          <input type="number" id="alpha" readOnly value={alpha} className={styles.propertiesBox}/>

        </div>
      </div>
    </>
    

  )
}

export default Trapeze