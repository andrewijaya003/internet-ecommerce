import Link from 'next/link'
import styles from './masuk.module.css'
import { useEffect, useState } from 'react'
import { GetUserByUsernameAndPassword } from '@/api/user/user'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function Masuk() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const router = useRouter()

    async function handleSubmitMasuk() {
        if(!username || !password) {
            setError("Username dan password harus diisi")
            return
        }

        const res = await GetUserByUsernameAndPassword({username, password})
        const user = await res.json()
        
        if(user.length === 1) {
            localStorage.setItem('user', JSON.stringify(user[0]))
            router.push('/')
        } else {
            setError("Username atau password salah")
        }
    }

    return (
        <div className={`${styles.background} absolute w-full h-full`}>
            <div className="flex justify-center items-center w-full h-full">
                <div className={`${styles.shadow2} flex flex-col items-center w-full md:w-80 rounded-2xl p-8`}>
                    <img className='w-36' src="https://i.postimg.cc/wxcFwjqX/xl-logo.png" alt="" />
                    <input className={`${styles.shadow} p-2 rounded-lg outline-none w-full mt-8`} placeholder='Username' type="text" onChange={(e) => setUsername(e.target.value)} />
                    <input className={`${styles.shadow} p-2 rounded-lg outline-none w-full mt-2`} placeholder='Password' type="password" onChange={(e) => setPassword(e.target.value)} />
                    <input className={`${styles.shadow} p-2 rounded-lg outline-none bg-primary mt-8 text-white font-bold w-full cursor-pointer`} placeholder='Masuk' type="submit" onClick={handleSubmitMasuk} />
                    <div className='text-error text-sm mt-2'>
                        {error}
                    </div>
                    <div className='flex mt-8'>
                        <div className='mr-1'>
                            Belum memiliki akun?
                        </div>
                        <Link className='text-primary' href={'/daftar'}>
                            Daftar
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}