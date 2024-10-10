"use client";
import data from "@/data/data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Slider() {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer); 
  }, [index]);
    
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  }; 
  
  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  return (
    <div className="w-[100%] scale-in-center">
      <h1 className="text-4xl font-bold text-center mt-5">Top Blogs</h1>
    <div className="flex flex-row justify-center h-[45vh] md:h-[65vh] w-[100%] gap-12 py-7">
      <div className="w-[90%] relative h-[100%] overflow-hidden rounded-xl">
        <Image src={data[index].image} alt={data[index].title} className="kenburns-top absolute top-0 h-[100%] w-[100%] object-cover" width={0} height={0}/>
        <div>
          <FaArrowRight onClick={handleNext} className="absolute z-10 top-[47%] right-0 text-white text-3xl bg-gray-400 rounded-full p-2 cursor-pointer mx-3" />
          <FaArrowLeft onClick={handlePrev} className="absolute z-10 top-[47%] left-0 text-white text-3xl bg-gray-400 rounded-full p-2 cursor-pointer mx-3" />
          <div className="z-30 flex justify-center w-[100%] absolute top-[80%]">
          <Link href={data[index].link}> <button className=" text-white text-xl bg-[#09003d] rounded-full py-1 px-3 cursor-pointer mx-3">Read Blog</button></Link>
          </div>
        </div>
      </div>
      {/* <div className="w-[20%] bg-[#E2DAD6] text-center h-[100%] rounded-xl">
      <Catogeries />
      </div> */}
    </div>
    </div>
  );
}
