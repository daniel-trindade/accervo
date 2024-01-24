import styles from "./Home.module.css"
import studing from "../../imgs/estudando.jpg"

function Home(){
  return(
    <div className={styles.home}>
      <h1>Bem vindo ao Accervo</h1>
      <p>Aqui você encontrará ajuda para seus estudos e para o dia a dia.</p>
      <img src={studing} alt="Garoto estudando" />
    </div>
  )
}

export default Home