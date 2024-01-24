import styles from "./Footer.module.css"
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

function Footer(){
  return(
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li className={styles.iten}> <FaFacebook/> </li>
        <li className={styles.iten}> <FaInstagram/> </li>
        <li className={styles.iten}> <FaLinkedin/> </li>
      </ul>
      <p>Accervo &copy; 2024</p>
    </footer>
  )
}

export default Footer;