import Link from 'next/link'
import styles from './main_header.module.css'

function MainHeader() {
    return(
        <div className="flex space-x-12 bg-gray-900 shadow-sm p-5">
            <div>
                <img className={styles.logo} src="solana-dash-logo.png" alt="page-logo"/>
            </div>
            <nav>
                <ul className="flex space-x-6">
                    <li className="uppercase"><Link href="/about">About</Link></li>
                    <li className="uppercase"><Link href="/">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default MainHeader;