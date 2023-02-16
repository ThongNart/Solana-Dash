import Link from 'next/link'
import styles from './main_header.module.css'

function MainHeader() {

    return(
        <div className="flex justify-between bg-zinc-900 shadow-lg p-5">
            <div>
                <Link href="/"><img className={styles.logo} src="solana-dash-logo.png" alt="page-logo"/></Link>
            </div>
            <nav>
                <ul className="flex space-x-6">
                    <li className="uppercase p-2 bg-zinc-800 rounded-md hover:bg-zinc-700 active:bg-purple-700"><Link href="/about">About</Link></li>
                    <li className="uppercase p-2 bg-zinc-800 rounded-md hover:bg-zinc-700  active:bg-purple-700"><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>

            
        </div>
    )
}


export default MainHeader;