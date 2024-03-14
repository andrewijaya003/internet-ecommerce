'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css"

export default function Navbar() {
    const pathname = usePathname()
	
    return (
        pathname !== '/masuk' ?
        <div className={`${styles.navbar} sticky bg-base-100 z-10 top-0 w-full flex justify-center items-center shadow`}>
            <div className={`flex justify-between items-center w-full max-w-6xl text-base py-2 px-4 mx-auto`}>
                <div id="nav-1" className="">
					<Link href="/" className="">
						<img src="xl-logo.png" alt="logo" className="w-10" />
					</Link>
				</div>
				<ul className="grid gap-x-6 grid-cols-3 text-sm">
					<li className={`${styles.menu} text-center`}>
						<Link href="/">Beranda</Link>
					</li>
					<li className={`${styles.menu} text-center`}>
						<Link href="/paket">Paket Internet</Link>
					</li>
					<li className={`${styles.menu} text-center`}>
						<Link href="/masuk">Masuk</Link>
					</li>
				</ul>
            </div>
        </div> : <></>
    )
}