import styles from "./Home.module.css"

function Home(){
  return(
    <div className={styles.home}>
      <h1>Bem vindo ao Accervo</h1>
      <p>Aqui você encontrará ajuda para seus estudos e para o dia a dia.</p>
    </div>
  )
}

export default Home