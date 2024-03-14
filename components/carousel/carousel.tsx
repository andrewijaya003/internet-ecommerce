import { Carousel as CarouselModel } from "@/models/carousel/carousel";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


export default function Carousel({ slides }: {slides:CarouselModel[]}) {
    const [current, setCurrent] = useState(0)

    let previousSlide = () => {
        if(current === 0) setCurrent(3)
        else setCurrent(current-1)
    }

    let nextSlide = () => {
        if(current === 3) setCurrent(0)
        else setCurrent(current+1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 7000)
 
        return () => clearInterval(interval);
    });

    useEffect(() => {
        console.log(slides)
    }, [slides])

    return (
        <div className="overflow-hidden relative">
            <div className={`hidden md:flex transition ease-out duration-150`} 
            style={{
                transform: `translateX(-${current*100}%)`
            }}>
                {
                    slides
                    .filter((s:CarouselModel) => s.type === 'website')
                    .map((s:CarouselModel) => {
                        return <img className="object-cover w-full" src={s.image} alt={s.image} />
                    })
                }
            </div>
            <div className={`md:hidden flex transition ease-out duration-150`} 
            style={{
                transform: `translateX(-${current*100}%)`
            }}>
                {
                    slides
                    .filter((s:CarouselModel) => s.type === 'mobile')
                    .map((s:CarouselModel) => {
                        return <img src={s.image} alt={s.image} />
                    })
                }
            </div>

            <div className="flex px-10 text-xl absolute top-0 h-full w-full justify-between items-center">
                <button className="text-gray-500 cursor-pointer duration-150 hover:text-white" onClick={previousSlide}>
                    <FaChevronLeft />
                </button>
                <button className="text-gray-500 cursor-pointer duration-150 hover:text-white" onClick={nextSlide}>
                    <FaChevronRight />
                </button>
            </div>

            <div className="hidden md:flex absolute bottom-0 py-4 justify-center gap-4 w-full">
                {
                    slides
                    .filter((s:CarouselModel) => s.type === 'website')
                    .map((s:CarouselModel, i:number) => {
                        return <div onClick={() => setCurrent(i)} key={"circle" + i} className={`cursor-pointer rounded-full w-2 h-2 ${i != current ? `bg-gray-500` : 'bg-white'}`}></div>
                    })
                }
            </div>
            <div className="md:hidden flex absolute bottom-0 py-4 justify-center gap-4 w-full">
                {
                    slides
                    .filter((s:CarouselModel) => s.type === 'mobile')
                    .map((s:CarouselModel, i:number) => {
                        return <div onClick={() => setCurrent(i)} key={"circle" + i} className={`cursor-pointer rounded-full w-2 h-2 ${i != current ? `bg-gray-500` : 'bg-white'}`}></div>
                    })
                }
            </div>
        </div>
    )
}