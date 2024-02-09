import { Stage, Layer, Line } from 'react-konva';
import { useState, useEffect } from 'react';
import styles from './Konva.module.css'

const Triangle = () => {

  const wKonva = 900
  const hKonva = 500

  const centerX = wKonva/2
  const centerY = hKonva/2
  const [base, setBase] = useState()
  const [height, setHeight] = useState()
  const [hypotenuse, setHypotenuse] = useState(0)
  const [area, setArea] = useState(0)
  const [perimeter, setPerimeter] = useState(0)


  const x1 = centerX - (base/2)
  const y1 = centerY + (height/2)
  const x2 = x1
  const y2 = centerY - (height/2)
  const x3 = centerX + (base/2)
  const y3 = centerY + (height/2)
  const x4 = x1
  const y4 = y1

  const handleSubmit = (e) =>{

    e.preventDefault()
    
    const baseValue = document.getElementById('base').value
    const heightValue = document.getElementById('height').value

    setBase(parseFloat(baseValue))
    setHeight(parseFloat(heightValue))

  }

  useEffect(() => {

    const newHypotenuse = (Math.sqrt((base**2)+(height**2))).toFixed(2)
    const newArea = ((base*height)/2)
    const newPerimeter = (base+height+hypotenuse)
    

    setHypotenuse(newHypotenuse)
    setArea(newArea)
    setPerimeter(newPerimeter)

  }, [base, height, hypotenuse])

  return (
    <>
      <form onSubmit={handleSubmit}>

        <label htmlFor="base" className={styles.tagLabel}>Base: </label>
        <input type="number" name="base" id="base" className={styles.dialogBox}/>

        <label htmlFor="height" className={styles.tagLabel}>Altura: </label>
        <input type="number" name="height" id="height" className={styles.dialogBox}/>

        <input type="submit" value="Gerar" className={styles.btn}/>

      </form>

      <div className={styles.geoContainer}>
        <div className={styles.konvaContainer}>
          <Stage width={wKonva} height={hKonva}>
            <Layer>
              <Line 
                points={[x1, y1, x2, y2, x3, y3, x4, y4]}
                strokeWidth={4}
                stroke='#FFA500'
              />
            </Layer>
          </Stage>
        </div>
        <div className={styles.infoContainer}>

          <label htmlFor="hypotenuse" className={styles.labelKonva}>Hipotenusa</label>
          <input type="number" id="ypotenuse" readOnly value={hypotenuse} className={styles.propertiesBox}/>

          <label htmlFor="area" className={styles.labelKonva}>Área</label>
          <input type="number" id="area" readOnly value={area} className={styles.propertiesBox}/>

          <label htmlFor="perimeter" className={styles.labelKonva}>Perímetro</label>
          <input type="number" id="perimeter" value={perimeter} readOnly className={styles.propertiesBox}/>



        </div>
      </div>
    </>

    
  );
};

export default Triangle;