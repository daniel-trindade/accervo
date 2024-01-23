import styles from './MainContainer.module.css'

function MainContainer(props){
  return(
    <div className={`${styles.container} ${styles[props.customClass]}`}>
      {props.children}
    </div>
  )
}

export default MainContainer