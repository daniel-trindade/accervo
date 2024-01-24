import styles from "./FormContainer.module.css"

function FormContainer(){
  return(
    <div className={`${styles.FormContainer} ${styles[props.customClass]}`}>
      {props.children}
    </div>

  )
}

export default FormContainer