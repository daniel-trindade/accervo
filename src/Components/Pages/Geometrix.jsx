import { Stage, Circle, Layer } from 'react-konva';
import { useState } from 'react';
import Triangle from '../Konva/Triangle';
import Cir from '../Konva/Cir';
import Rectangle from '../Konva/Rectangle';

import styles from './Triangles.module.css'


function Triangles(){

  const [shape, setShape] = useState()

  const handleChange = (e) => {
    setShape(e.target.value)
  }



  return(
    <div>
      <h1>Figuras Geométricas</h1>
      <select name="shape" id="shape" className={styles.selectBox} onChange={handleChange} value={shape}> 
        <option value="">Selecione uma forma Geométrica</option>
        <option value="circle">Circonferência</option>
        <option value="triangle">Triângulo Retângulo</option>
        <option value="rect">Retangulo</option>
      </select>
      <div>
        {shape === 'circle' && <Cir rad={100}/>}
        {shape === 'triangle' && <Triangle aSide={100} bSide={100}/>}
        {shape === 'rect' && <Rectangle aSide={300} bSide={100}/>}
      </div>
    </div>
  )
}

export default Triangles;