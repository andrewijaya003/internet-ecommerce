'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Navbar() {
	const router = useRouter()
    const pathname = usePathname()
	const [isUser, setIsUser] = useState(false)

	useEffect(() => {
		const user = localStorage.getItem('user')
		if(user) {
			setIsUser(true)
		} else {
			setIsUser(false)
		}
	})

	function Keluar() {
		localStorage.removeItem('user')
		router.reload()
	}
	
    return (
        pathname !== '/masuk' && pathname !== '/daftar' ?
        <div className={`${styles.navbar} sticky bg-base-100 z-10 top-0 w-full flex justify-center items-center shadow`}>
            <div className={`flex justify-between items-center w-full max-w-7xl text-base py-2 px-4 mx-auto`}>
                <div className="">
					<Link href="/" className="">
						<img src="https://i.postimg.cc/wxcFwjqX/xl-logo.png" alt="logo" className="w-10" />
					</Link>
				</div>
				<ul className="flex gap-x-6 text-sm">
					<li className={`${styles.menu} text-center`}>
						<Link href="/">Beranda</Link>
					</li>
					{
						isUser ? 
						<li className={`${styles.menu} text-center`}>
							<Link href="/transaksi">Transaksi</Link>
						</li>
						:
						<li className={`${styles.menu} text-center`}>
							<Link href="/daftar">Daftar</Link>
						</li>
					}
					{
						isUser == false ?
						<li className={`${styles.menu} text-center`}>
							<Link href="/masuk">Masuk</Link>
						</li> 
						:
						<li className={`${styles.menu} text-center`}>
							<div className="cursor-pointer" onClick={Keluar} >Keluar</div>
						</li>
					}
				</ul>
            </div>
        </div> : <></>
    )
}