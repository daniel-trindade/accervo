import styles from "./Converter.module.css"
import Length from "../Converters/Length"

function Converter(){
  return(
    <div>
      <h1>Conversor de Unidades de Medida</h1>
      <p>Aqui você pode selecionar o conversor, unidade de partida e unidade desejada usando as caixas a baixo:</p>
      <p>Unidade de Medida:</p>
      <select name="unitSelector" id="unitSelector" className={styles.selectBox}>
        <option value="Comprimento">Comprimento</option>
        <option value="Volume">Volume</option>
        <option value="Temperatura">Temperatura</option>
      </select>
      <Length/>
    </div>
  )
}

export default Converter