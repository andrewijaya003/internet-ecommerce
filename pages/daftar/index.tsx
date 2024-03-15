import Link from 'next/link'
import styles from './daftar.module.css'
import { useEffect, useState } from 'react'
import { GetUserByUsernameAndPassword, InsertUser } from '@/api/user/user'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function Masuk() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [error, setError] = useState("")
    const router = useRouter()

    async function handleSubmitMasuk() {
        if(!username || !password || !password2) {
            setError("Username dan password harus diisi")
            return
        } else if(password != password2) {
            setError("Password tidak sama")
            return 
        }

        // const length = Get
        
        InsertUser({
            id: "4",
            username: username,
            password: password
        }).then((res) => res.json())
        .then((res) => localStorage.setItem('user', JSON.stringify(res)))

        router.push('/')
    }

    return (
        <div className={`${styles.background} absolute w-full h-full`}>
            <div className="flex justify-center items-center w-full h-full">
                <div className={`${styles.shadow2} flex flex-col items-center w-full md:w-80 rounded-2xl p-8`}>
                    <img className='w-36' src="https://i.postimg.cc/wxcFwjqX/xl-logo.png" alt="" />
                    <input className={`${styles.shadow} p-2 rounded-lg outline-none w-full mt-8`} placeholder='Username' type="text" onChange={(e) => setUsername(e.target.value)} />
                    <input className={`${styles.shadow} p-2 rounded-lg outline-none w-full mt-2`} placeholder='Password' type="password" onChange={(e) => setPassword(e.target.value)} />
                    <input className={`${styles.shadow} p-2 rounded-lg outline-none w-full mt-2`} placeholder='Check password' type="password" onChange={(e) => setPassword2(e.target.value)} />
                    
                    <input className={`${styles.shadow} p-2 rounded-lg outline-none bg-primary mt-8 text-white font-bold w-full cursor-pointer`} placeholder='Masuk' type="submit" onClick={handleSubmitMasuk} />
                    <div className='text-error text-sm mt-2'>
                        {error}
                    </div>
                    <div className='flex mt-8'>
                        <div className='mr-1'>
                            Sudah memiliki akun?
                        </div>
                        <Link className='text-primary' href={'/masuk'}>
                            Masuk
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}