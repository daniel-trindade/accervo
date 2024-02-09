import { Stage, Layer, Line } from 'react-konva';
import { useState, useEffect } from 'react';
import styles from './Konva.module.css'

const TriangleObt = () => {

  const wKonva = 900
  const hKonva = 500

  const centerX = wKonva/2
  const centerY = hKonva/2
  const [aSide, setASide] = useState()
  const [bSide, setBSide] = useState()
  const [cSide, setCSide] = useState()
  const [hypotenuse, setHypotenuse] = useState(0)
  const [area, setArea] = useState(0)
  const [perimeter, setPerimeter] = useState(0)


  const x1 = centerX - (aSide/2)
  const y1 = centerY + (bSide/2)

  const x3 = centerX + (aSide/2)
  const y3 = centerY + (bSide/2)
  const x4 = x1
  const y4 = y1

  const x2 = (aSide**2 - cSide**2 - x1**2 + x3**2)/(2*(x3-x1))

  const a = 1
  const b = -2*y1
  const c = (y1**2 - bSide**2)+ (x2-x1)**2

  const y2 = calcularBhaskara(a, b, c)

  function calcularBhaskara(a, b, c) {
    var delta = Math.pow(b, 2) - 4 * a * c;

    if (delta < 0) {
        return 0;
    } else if (delta === 0) {
        var x = -b / (2 * a);
        return x;
    } else {
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);

        // Retorna apenas a maior raiz
        var maiorRaiz = Math.max(x1, x2);
        return maiorRaiz;
    }
}


  const handleSubmit = (e) =>{

    e.preventDefault()
    
    const aSideValue = document.getElementById('aSide').value
    const bSideValue = document.getElementById('bSide').value
    const cSideValue = document.getElementById('cSide').value

    setASide(parseFloat(aSideValue))
    setBSide(parseFloat(bSideValue))
    setCSide(parseFloat(cSideValue))

  }

  useEffect(() => {

    const newHypotenuse = (Math.sqrt((aSide**2)+(bSide**2))).toFixed(2)
    const newArea = ((aSide*bSide)/2)
    const newPerimeter = (aSide+bSide+hypotenuse)
    

    setHypotenuse(newHypotenuse)
    setArea(newArea)
    setPerimeter(newPerimeter)

  }, [aSide, bSide, cSide])

  return (
    <>
      <form onSubmit={handleSubmit}>

        <label htmlFor="aSide" className={styles.tagLabel}>Lado a: </label>
        <input type="number" name="aSide" id="aSide" className={styles.dialogBox}/>

        <label htmlFor="bSide" className={styles.tagLabel}>Lado b: </label>
        <input type="number" name="bSide" id="bSide" className={styles.dialogBox}/>

        <label htmlFor="cSide" className={styles.tagLabel}>Lado c: </label>
        <input type="number" name="cSide" id="cSide" className={styles.dialogBox}/>

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

export default TriangleObt;