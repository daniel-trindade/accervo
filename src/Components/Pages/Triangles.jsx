import { Stage, Circle, Layer } from 'react-konva';
import { useState } from 'react';
import Triangle from '../Konva/Triangle';
import Cir from '../Konva/Cir';

import styles from './Triangles.module.css'


function Triangles(){

  const [base, setBase] = useState("100")
  const [opposite, setOpposite] = useState("100")
  const [hipotenusa, setHypotenuse] = useState("100")



  return(
    <div>
      <h1>Relação de Triangulos</h1>
      <select name="shape" id="shape" className={styles.selectBox}>
        <option value="">Selecione uma forma Geométrica</option>
        <option value="circle">Circonferência</option>
        <option value="triangle">Triângulo</option>
        <option value="rect">Retangulo</option>
      </select>
      <div>
        <Triangle base={100} opposite={100}/>
      </div>
    </div>
  )
}

export default Triangles;