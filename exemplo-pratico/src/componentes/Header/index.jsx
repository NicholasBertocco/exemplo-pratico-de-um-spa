import styles from "./Header.module.css";
import Link from "next/link"

export default function Header(){
    return(
        <header className = {styles.boxHeader}>
            
                <p className = {styles.logo}>React SPAS</p>
                <nav>
                    <ul type='none'className = {styles.navegacao}>
                        <li ><Link className={styles.Link} href="/front-end">Front-End</Link></li>
                        <li><Link className={styles.Link} href="/back-end">Back-End</Link></li>
                        <li><Link className={styles.Link} href="/">React</Link></li>
                    </ul>
                </nav>
                
            
        </header>
    )
    
}