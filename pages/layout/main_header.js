import Link from 'next/link'
import styles from './main_header.module.css'

function MainHeader() {

    return(
        <div className="flex space-x-12 bg-zinc-900 shadow-lg p-5">
            <div>
                <Link href="/"><img className={styles.logo} src="solana-dash-logo.png" alt="page-logo"/></Link>
            </div>
            <nav>
                <ul className="flex space-x-6">
                    <li className="uppercase p-2 bg-zinc-800 rounded-md"><Link href="/about">About</Link></li>
                    <li className="uppercase p-2 bg-zinc-800 rounded-md"><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>

            <div className="space-x-2">
                <input className="p-3 bg-zinc-800 rounded-md w-auto" type="text" placeholder='enter your wallet address...'></input>
                <button className="p-3 bg-zinc-800 rounded-md" >Check Wallet</button>
            </div>
        </div>
    )
}


export default MainHeader;