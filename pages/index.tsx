// import GetHomeWebsiteCarousel from "@/pages/api/carousel/get-home-website-carousel";
// import Carousel from "@/pages/components/carousel";
// import { Carousel as CarouselModel } from "@/pages/models/carousel/carousel";

import { useEffect } from "react";
import Carousel from "../components/carousel/carousel";
import { Carousel as CarouselModel } from "../models/carousel/carousel";
import GetAllCarousel from "../api/carousel/get-carousel";


export default function Beranda({data}: {data:CarouselModel[]}) {
	useEffect(() => {
		console.log(data)
	}, [data])

	return (
		<main className="w-full m-auto">
			<Carousel slides={data} ></Carousel>
		</main>
	)
}

export async function getServerSideProps() {
	const res = await GetAllCarousel()
	const data = await res.json()

	return {props: {data}}
}