import styles from "./Converter.module.css"
import Length from "../Converters/Length"

function Converter(){

  const units = ["Selecione uma Opção", "Comprimento", "Volume", "Temperatura", "Arroz"];
  const optUnit = document.getElementById("unitSelector")

  window.addEventListener('load', async ()=>{
    const options = document.createElement("optgroup")

    options.setAttribute('label', 'units')

    units.forEach(function(unt){
    options.innerHTML += '<option>' + unt + '</option>'
    })

    optUnit.append(options)
  })



  return(
    <div>
      <h1>Conversor de Unidades de Medida</h1>
      <p>Aqui você pode selecionar o conversor, unidade de partida e unidade desejada usando as caixas a baixo:</p>
      <p>Unidade de Medida:</p>
      <select name="unitSelector" id="unitSelector" className={styles.selectBox}></select>
      <Length/>
    </div>
  )
}

export default Converter