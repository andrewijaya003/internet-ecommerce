import Carousel from "@/components/carousel/carousel";
import Image from "next/image";

export default function Home() {
	let slides: string[] = [
		"https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
		"https://wallpapercave.com/wp/wp3386769.jpg",
		"https://wallpaperaccess.com/full/809523.jpg",
		'https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg'
	]

	return (
		<main className="w-full m-auto">
			<Carousel slides={slides} ></Carousel>
		</main>
	);
}
