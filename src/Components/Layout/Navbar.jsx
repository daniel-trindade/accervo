import { Link } from "react-router-dom"

import MainContainer from "./MainContainer"
import styles from "./Navbar.module.css"
import logo from "../../imgs/alpha.png"

function Navbar(){
  return(
    <nav className={styles.navbar}>
      <MainContainer>
        
        <Link to="/" className={styles.link}>
          <img src={logo} alt="Accervo" />
          <h1>Accervo</h1>
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}> <Link to="/">Início</Link> </li>
          <li className={styles.item}> <Link to="/conversor">Conversor de Unidades</Link> </li>
          <li className={styles.item}> <Link to="/triangulos">Triangulos</Link> </li>
          <li className={styles.item}> <Link to="/sobre">Sobre</Link> </li>
        </ul>
      </MainContainer>

    </nav>
  )
}

export default Navbar