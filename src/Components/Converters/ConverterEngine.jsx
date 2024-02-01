import { useState, useEffect } from "react";
import ConversionTable from "./ConversionTable";
import style from "./ConverterEngine.module.css";
import Msg from "../Layout/Msg";


function Length({unitSelected}){

  const [currentUnitOptions, setCurrentUnitOptions] = useState([]);
  const [msg, setMsg] = useState('')
  const [type, setType] = useState('')

  useEffect(() => {
    if(unitSelected === "Comprimento"){
      setCurrentUnitOptions(["Nanômetro", "Micrômetro", "Milímetro", "Centímetro", "Metro", "Quilômetro", "Milha", "Pé", "Polegada", "Jarda"])
    } else if(unitSelected === "Volume"){
      setCurrentUnitOptions(["Micrograma", "Miligrama", "Grama", "Quilograma", "Tonelada", "Libra", "Onça"])
    } else if(unitSelected === "Temperatura"){
      setCurrentUnitOptions(["Celsius", "Fahrenheit", "Kelvin"])
    } else {
      setCurrentUnitOptions([])
    }
  }, [unitSelected]);

  const converter = (e) => {

    e.preventDefault()

    const from = document.getElementById("currentUnit").value
    const to = document.getElementById("targetUnit").value
    let val = document.getElementById("inputValue").value

    val = val.toString().replace(",", ".")

    

    if(from === to){
      document.getElementById("resultValue").value = val
    } else if(val === ""){
        setMsg('Digite um valor')
        setType('error')
    } else {
      const convertValue = ConversionTable[from][to];
      console.log(convertValue)
      if (unitSelected !== 'Temperatura') {
        let res = convertValue * val;
        res = res.toString().replace(".", ",")
        document.getElementById("resultValue").value = res
      } else {
        document.getElementById("resultValue").value = eval(convertValue.replace('input', val))
      }
    }
  }

  return(
    <form onSubmit={converter} className={style.formContainer}>

      <div className={style.organizer}>

        <label htmlFor="currentUnit" className={`${style.tagLabel} ${style.adjust}`}>De: </label>
        <select name="currentUnit" id="currentUnit" className={style.selectBox}>
          <option value="">Selecione uma Opção</option>
          {currentUnitOptions.map((unit, index) => (
            <option key={index} value={unit}> {unit} </option>
          ))}
        </select>

        <label htmlFor="targetUnit" className={style.tagLabel}>Para:</label>
        <select name="targetUnit" id="targetUnit" className={style.selectBox}>
          <option value="">Selecione uma Opção</option>
          {currentUnitOptions.map((unit, index) => (
            <option key={index} value={unit}> {unit} </option>
          ))}
        </select>

      </div>
      
      <div className={style.organizer}>

        <label htmlFor="inputValue" className={style.tagLabel}>Valor:</label>
        <input type="text" name="inputValue" id="inputValue" className={style.dialogBox}/>
      
        <label htmlFor="resultValue" className={style.tagLabel}>Resultado:</label>
        <input type="text" name="resultValue" id="resultValue" value="" className={style.dialogBox} readOnly/>

      </div>
      
      <div>
        <input type="submit" value="Converter" className={style.btn}/>
      </div>

      <Msg type={type} message={msg}/>
    </form>

  )
}

export default Length;