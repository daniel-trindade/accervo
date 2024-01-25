import ConversionTable from "./ConversionTable"
import style from "./FormStyle.module.css"


function Length(){

  
  const lengthUnits = ["Nanômetro", "Micrômetro", "Milímetro", "Centímetro", "Metro", "Quilômetro", "Milha", "Pé", "Polegada", "Jarda"];
  const volumeUnits = ["Micrograma", "Miligrama", "Grama", "Quilograma", "Tonelada", "Libra", "Onça"];
  const temperatureUnits = ["Kelvin", "Fahrenheit", "Celsius"];



  return(
    <div className={style.formContainer}>
      <div>
        <label htmlFor="currentUnit" className={style.tagLabel}>De: </label>

        <select name="currentUnit" id="currentUnit" className={style.selectBox}>
          <option value="">Selecione uma Opção</option>
        </select>
      </div>

      <div>
        <label htmlFor="targetUnit" className={style.tagLabel}>Para: </label>
        <select name="targetUnit" id="targetUnit" className={style.selectBox}>
          <option value="">Selecione uma Opção</option>
        </select>
      </div>
      
      <input type="text" name="inputValue" id="inputValue" className={`${style.dialogBox} ${style.adjust}`}/>
      <input type="text" name="resultValue" id="resultValue" value="0" className={style.dialogBox} readonly/>

      <input type="submit" value="Converter" className={style.btn}/>
    </div>
  )
}

export default Length;