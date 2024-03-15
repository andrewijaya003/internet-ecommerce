import { PackageType } from "@/models/package-type/package-type";
import Image from "next/image";
import Link from "next/link";

export default function CardPackageType({p}: {p:PackageType}) {
    return (
        <div className="flex flex-col rounded-xl bg-secondary text-white text-sm">
            <img className="rounded-xl" src={p.image} alt={p.image} />
            <div className="flex flex-col gap-y-4 p-4">
                <div className="text-2xl font-bold">
                    {p.title}
                </div>
                <div className="text-sm">
                    {p.fullDescription}
                </div>
                <Link href={`/paket/${p.id}`} className="text-center text-sm font-bold rounded-3xl text-secondary bg-white py-2">
                    Lihat Detail
                </Link>
            </div>
        </div>
    )
}