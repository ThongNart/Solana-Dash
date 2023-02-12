import { Fragment }  from "react";
import Link from 'next/link'
import styles from './main_header.module.css'

function MainHeader() {
    return(
        <Fragment>
            <div>
                <img className={styles.logo} src="solana-dash-logo.png" alt="page-logo"/>
            </div>
            <nav>
                <ul>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/">Contact</Link></li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default MainHeader;