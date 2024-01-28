import ConversionTable from "./ConversionTable"
import style from "./FormStyle.module.css"


function Length({unitSelected}){

  if (unitSelected === "Comprimento"){
    console.log("deu certo Comprimento")
    const lengthUnits = ["Nanômetro", "Micrômetro", "Milímetro", "Centímetro", "Metro", "Quilômetro", "Milha", "Pé", "Polegada", "Jarda"];
    const current = document.getElementById("currentUnit")

    const options = document.createElement("optgroup")
    options.setAttribute('label', 'Unidades')
    lengthUnits.forEach(function(unit){
      options.innerHTML += "<option>" + unit +"</option>"
    })

    current.append(options)

  }

  if(unitSelected === "Volume"){
    console.log("Deu certo Volume")
    const volumeUnits = ["Micrograma", "Miligrama", "Grama", "Quilograma", "Tonelada", "Libra", "Onça"];

    const current = document.getElementById("currentUnit")

    const options = document.createElement("optgroup")
    options.setAttribute('label', 'Unidades')
    volumeUnits.forEach(function(unit){
      options.innerHTML += "<option>" + unit +"</option>"
    })

    current.append(options)
  }

  if(unitSelected === "Temperatura"){
    console.log("Deu certo Temperatura")
    const temperatureUnits = ["Kelvin", "Fahrenheit", "Celsius"];

    const current = document.getElementById("currentUnit")

    const options = document.createElement("optgroup")
    options.setAttribute('label', 'Unidades')
    temperatureUnitsUnits.forEach(function(unit){
      options.innerHTML += "<option>" + unit +"</option>"
    })

    current.append(options)
    
  }

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