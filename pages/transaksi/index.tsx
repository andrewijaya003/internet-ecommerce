import { GetPackageById } from "@/api/package/package"
import { GetTransactionByUserId } from "@/api/transaction/transaction"
import { Package } from "@/models/package/package"
import { Transaction } from "@/models/transaction/transaction"
import { User } from "@/models/user/user"
import { useEffect, useState } from "react"
import styles from './transaksi.module.css'
import { IoMdInformationCircleOutline } from "react-icons/io"

export default function Transaksi() {
    const [user, setUser] = useState<User | null>(null) 
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [packages, setPackages] = useState<Package[]>([])

    useEffect(() => {
        const temp = localStorage.getItem('user')
        
        if (temp) {
            const parsedUser: User = JSON.parse(temp) 
            setUser(parsedUser)
        }
    }, [])

    async function GetTransactions() {
        if(user) {
            let res1 = await GetTransactionByUserId(user.id)
            let data1 = await res1.json()
            setTransactions(data1)

            let temp:Package[] = []
            data1.map(async (t:Transaction) => {
                let res2 = await GetPackageById(t.packageId)
                let data2 = await res2.json()
                setPackages(packages => [...packages, data2])
            })
        }
    }

    useEffect(() => {
        if(user) {
            GetTransactions()
        }
    }, [user])

    return (
        <div className="w-full flex justify-center items-center flex-col my-20">
            <div className="flex flex-col w-full max-w-7xl px-4">
                <div className="text-3xl font-bold">
                    Transaksi {user?.username}
                </div>
                <div className="text-sm mt-2">
                    Terima kasih sudah mempercayai kami sebagai paket internet anda
                </div>
                {
                    transactions.length != 0 ?
                    <div className="mt-8 grid md:grid-cols-3 grid-cols-1 gap-8">
                        {
                            packages.flat().map((p:Package, i:number) => (
                                <div key={i} className={`${styles.shadow} flex flex-col rounded-xl py-4 px-5`}>
                                    <div className="text-2xl font-bold">
                                        {p.title}
                                    </div>
                                    <div className="h-[0.2px] w-full bg-black mt-2" />
                                    <div className="text-primary text-xl font-bold mt-2">
                                        {p.price}
                                    </div>
                                    <div className="text-sm font-bold text-right mt-2">
                                        {transactions[i].date}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    :
                    <div className="text-lg font-bold mt-12 items-center bg-info p-8 rounded-2xl text-white">
                        Belum ada transaksi yang anda lakukan selama ini, ayo beli paket internet sekarang!
                    </div>
                }
            </div>
        </div>
    )
}

// export async function getServerSideProps() {
// 	let res = await GetAllSlide()
// 	const slides = await res.json()

// 	res = await GetAllPackageType()
// 	const packageTypes = await res.json()

// 	return {props: {slides, packageTypes}}
// }