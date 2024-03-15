import { GetPackageTypeByID } from "@/api/package-type/package-type"
import { GetPackageByPT } from "@/api/package/package"
import { PackageType } from "@/models/package-type/package-type"
import { Package } from "@/models/package/package"
import styles from "./paket.module.css"
import { useEffect, useState } from "react"
import { User } from "@/models/user/user"
import { InsertTransaction } from "@/api/transaction/transaction"
import Image from "next/image"

export default function Paket({packages, packageTypes}: {packages:Package[], packageTypes: PackageType[]}) {
    const [user, setUser] = useState<User | null>(null) 

    useEffect(() => {
        const temp = localStorage.getItem('user')
        
        if (temp) {
            const parsedUser: User = JSON.parse(temp) 
            setUser(parsedUser)
        }
    }, [])
    
    function BuyPackage(packageId:string) {
        if(user) {
            const date = new Date()
            const year = date.toLocaleString("default", { year: "numeric" });
            const month = date.toLocaleString("default", { month: "2-digit" });
            const day = date.toLocaleString("default", { day: "2-digit" });
            const formattedDate = year + "-" + month + "-" + day;

            InsertTransaction({
                id: "1",
                packageId: packageId,
                userId: user.id,
                date: formattedDate
            })
        }
    }
    
    return (
        <div className="w-full flex justify-center items-center flex-col my-20">
            <div className="flex flex-col w-full max-w-7xl px-4">
                <img className="shadow rounded-2xl" src={`${packageTypes[0].bigImage}`} alt="carousel1.jpg" />
                <div className="flex flex-col mt-20">
                    <div className="text-3xl font-bold">
                        Paket Internet {packageTypes[0].title}
                    </div>
                    <div className="text-sm mt-2">
                        {packageTypes[0].shortDescription}
                    </div>
                    <div className="mt-8 grid md:grid-cols-3 grid-cols-1 gap-8">
                        {
                            packages.map((p:Package, i:number) => (
                                <div key={i} className={`${styles.shadow} flex flex-col rounded-xl py-4 px-5`}>
                                    <div className="text-2xl font-bold">
                                        {p.title}
                                    </div>
                                    <div className="flex flex-col mt-2">
                                        {
                                            packageTypes[0].features.map((f:string, i:number) => (
                                                <div key={i} className="flex justify-between text-sm mt-2">
                                                    <div className="">
                                                        {f}
                                                    </div>
                                                    <div className="font-bold">
                                                        {p.featuresValue[i]}
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className="h-[0.2px] w-full bg-black mt-2" />
                                    <div className="text-primary text-xl font-bold mt-2">
                                        {p.price}
                                    </div>
                                    <button onClick={() => BuyPackage(p.id)} className="text-white py-2 text-sm font-bold bg-primary rounded-3xl mt-2">
                                        Beli Sekarang
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context:any) {
    const {params} = context
    const {id} = params
	let res = await GetPackageByPT(id)
	const packages = await res.json()

    res = await GetPackageTypeByID(id)
    const packageTypes = await res.json()

	return {props: {packages, packageTypes}}
}