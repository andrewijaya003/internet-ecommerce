import { usePathname } from "next/navigation";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
    const pathname = usePathname()
	
    return (
        pathname !== '/masuk' && pathname !== '/daftar' ?
        <div className="flex flex-col">
            <div className={`flex justify-center bg-primary w-full py-11 rounded-t-3xl`}>
                <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl px-4 text-white">
                    <div className="flex flex-col gap-5">
                        <div className="text-2xl font-bold">
                            Dapatkan promo terbaru <br />hanya di myXL
                        </div>
                        <div className="text-sm">
                            Download sekarang:
                        </div>
                        <div className="flex gap-x-4 items-center">
                            <img className="w-40 object-cover" src="https://i.postimg.cc/D0Kj8W2Z/google-play.png" alt="google-play" />
                            <img className="w-40 object-cover" src="https://i.postimg.cc/qMTS7FRL/app-store.png" alt="app-store" />
                        </div>
                    </div>
                    <div className="md:hidden flex h-[1px] w-full bg-secondary my-8" />
                    <div className="flex flex-col gap-5 items-end text-right">
                        <div className="text-2xl font-bold">
                            Tetap terhubung dengan<br />kami
                        </div>
                        <div className="flex gap-x-4 items-center text-3xl">
                            <FaFacebook />
                            <FaInstagram />
                            <FaTwitter />
                            <FaYoutube />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`flex justify-center bg-secondary w-full py-4`}>
                <div className="flex justify-center w-full max-w-7xl text-white h-fit">
                    Copyright © 2024 XL Axiata
                </div>
            </div>          
        </div> : <></>
    )
}