import styles from './Header.module.css'
import igniteLogo from '../assets/Ignite-Logo.svg'
export default function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logo Ignite Feed" />
            <strong >Ignite Feed</strong>
        </header>
    )
}