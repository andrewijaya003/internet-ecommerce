
import Carousel from "../components/carousel/carousel";
import { Slide } from "../models/slide/slide";
import { PackageType } from "@/models/package-type/package-type";
import { GetAllSlide } from "../api/slide/slide";
import { GetAllPackageType } from "@/api/package-type/package-type";
import styles from './index.module.css'
import { useEffect } from "react";
import CardPackageType from "@/components/card-package-type/card-package-type";

export default function Beranda({slides, packageTypes}: {slides:Slide[], packageTypes: PackageType[]}) {
	return (
		<main className="w-full m-auto">
			<Carousel slides={slides} ></Carousel>
			<div className="flex flex-col">
            	<div className={`flex justify-center w-full py-11`}>
					<div className="flex md:flex-row flex-col justify-between items-center md:items-start w-full max-w-7xl px-4">
						<div className="flex flex-col md:w-1/4 w-full max-w-7xl gap-y-4">
							<div className="font-bold text-3xl">
								Temukan produk <br /> yang paling <br /> tepat untuk <br /> Anda
							</div>
							<div className="text-sm">
								Dapatkan semua produk di <br /> aplikasi myXL
							</div>
							<div className="h-[1px] w-full bg-primary" />
						</div>
						<div className={`grid md:grid-cols-2 grid-cols-1 gap-8 md:ml-20 w-full max-w-7xl md:w-3/4 mt-8 md:mt-0`}>
							{
								packageTypes.map((p:PackageType, i:number) => (
									<CardPackageType key={i} p={p} />
								))
							}
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export async function getServerSideProps() {
	let res = await GetAllSlide()
	const slides = await res.json()

	res = await GetAllPackageType()
	const packageTypes = await res.json()

	return {props: {slides, packageTypes}}
}