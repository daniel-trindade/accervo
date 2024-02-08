import { Stage, Layer, Rect } from "react-konva";
import { useEffect, useState } from "react";
import styles from './Konva.module.css'

function Rectangle(){

  const wKonva = 900
  const hKonva = 500

  const [base, setBase] = useState()
  const [height, setHeight] = useState()
  const [perimeter, setPerimeter] = useState(0)
  const [area, setArea] = useState(0)
  const [diagonal, setDiagonal] = useState(0)

  const xCenter = (wKonva/2)-(base/2)
  const yCenter = ((hKonva/2)-(height/2))

  const handleSubmit = (e) =>{
    e.preventDefault()

    const baseValue = document.getElementById('base').value
    const heightValue = document.getElementById('height').value

    setBase(parseFloat(baseValue))
    setHeight(parseFloat(heightValue))
  }

  useEffect(() => {
    const newPerimeter = ((base*2)+(height*2))
    const newArea = (base*height)
    const newDiagonal = (Math.sqrt(base**2 + height**2)).toFixed(2)

    setPerimeter(newPerimeter)
    setArea(newArea)
    setDiagonal(newDiagonal)
  }, [base, height])
  

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
      <div className={styles.geoContainer}>
        <div className={styles.konvaContainer}>
          <Stage width={wKonva} height={hKonva}>
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
        <div className={styles.infoContainer}>

          <label htmlFor="perimeter" className={styles.labelKonva}>Perímetro</label>
          <input type="number" id="perimeter" value={perimeter} readOnly className={styles.propertiesBox}/>

          <label htmlFor="area" className={styles.labelKonva}>Área</label>
          <input type="number" id="area" readOnly value={area} className={styles.propertiesBox}/>

          <label htmlFor="diagonal" className={styles.labelKonva}>Diagonal</label>
          <input type="number" id="diagonal" readOnly value={diagonal} className={styles.propertiesBox}/>

        </div>
      </div>
    </>
    

  )
}

export default Rectangle