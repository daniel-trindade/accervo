import ConversionTable from "./ConversionTable"
import style from "./FormStyle.module.css"

function Length(){
  return(
    <div className={style.formContainer}>
      <div>
        <label htmlFor="currentUnit" className={style.tagLabel}>De: </label>
        <select name="currentUnit" id="currentUnit" className={style.selectBox}>
        <option value="">Selecione uma Opção</option>
          <option value="Nanômetro">Nanômetro</option>
          <option value="Micrômetro">Micrômetro</option>
          <option value="Milímetro">Milímetro</option>
          <option value="Centímetro">Centímetro</option>
          <option value="Metro">Metro</option>
          <option value="Quilômetro">Quilômetro</option>
          <option value="Milha">Milha</option>
          <option value="Pé">Pé</option>
          <option value="Polegada">Polegada</option>
          <option value="Jarda">Jarda</option>
        </select>
      </div>

      <div>
        <label htmlFor="targetUnit" className={style.tagLabel}>Para: </label>
        <select name="targetUnit" id="targetUnit" className={style.selectBox}>
        <option value="">Selecione uma Opção</option>
          <option value="Nanômetro">Nanômetro</option>
          <option value="Micrômetro">Micrômetro</option>
          <option value="Milímetro">Milímetro</option>
          <option value="Centímetro">Centímetro</option>
          <option value="Metro">Metro</option>
          <option value="Quilômetro">Quilômetro</option>
          <option value="Milha">Milha</option>
          <option value="Pé">Pé</option>
          <option value="Polegada">Polegada</option>
          <option value="Jarda">Jarda</option>
        </select>
      </div>
      
      <input type="text" name="inputValue" id="inputValue" className={`${style.dialogBox} ${style.adjust}`}/>
      <input type="text" name="resultValue" id="resultValue" value="0" className={style.dialogBox} readonly/>

      <input type="submit" value="Converter" className={style.btn}/>
    </div>
  )
}

export default Length;