import { useState } from 'react'

import styles from "./Converter.module.css"
import ConverterEngine from "../Converters/ConverterEngine"



function Converter(){

  const [selectedValue, setSelectValue] = useState()

  function unitChange(){
    const selected = document.getElementById("unitSelector");
    setSelectValue(selected.value)
  }
  

  return(
    <div className={styles.container}>
      <div>
        <h1>Conversor de Unidades de Medida</h1>
        <p>Aqui você pode selecionar o conversor, unidade de partida e unidade desejada usando as caixas a baixo:</p>
        <p>Unidade de Medida:</p>
        <select name="unitSelector" id="unitSelector" className={styles.selectBox} onChange={unitChange}>
          <option value="">Selecione uma opção</option>
          <option value="Comprimento">Comprimento</option>
          <option value="Volume">Volume</option>
          <option value="Temperatura">Temperatura</option>
        </select>
      </div>
      <div>
        <ConverterEngine unitSelected={selectedValue}/>
      </div>
    </div>
  )
}

export default Converter