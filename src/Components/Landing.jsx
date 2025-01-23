"use client";
import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';
import { MdDateRange } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { FaAlignLeft } from 'react-icons/fa';
import React, { useState } from "react";



const cardData = [
  {
    title: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
    description:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    imageUrl: "/877aacb096082025aaa7528e15f2789e.png",
  },
  {
    title: "Can coffee make you a better developer?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    imageUrl: "/c25d4396ab15991e79418fb801fd5efa.png",
  },
  {
    title: "The future of AI in education",
    description:
      "Exploring how artificial intelligence is transforming the landscape of modern education and enhancing online learning experiences.",
    imageUrl: "/ca47b6a4fceb75f355da0105034713c7.png", // استبدال هذا بالصورة المناسبة
  },
];

export default function Landing(){
  const [isReadMore, setIsReadMore] = useState(false);


  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

    return (
        <>
    <div className="relative">
        <div class="relative pt-[50px]  pb-[50px] custome-media text-white bg-main flex max-[991px]:flex-col justify-between items-center overflow-hidden h-[85vh] max-[870px]:h-[90vh] max-[768px]:h-[99vh] z-10 custome-rounded">
           <div class="w-[50%] max-[991px]:w-full  absolute top-[125px] max-[1025px]:top-[50px] max-[1000px]:top-[35px] max-[991px]:static">
             <h1 className='mb-[10px] text-[35px] text-white'><span className="text-yellow-500">Studying</span> Online is now much easier</h1>
             <p className='text-[16px] leading-[1.5rem]'>TOTC is an interesting platform that will teach you in a more interactive way</p>

             <div className='flex items-center gap-[1rem] max-[991px]:flex-col mt-[8px]'>

             <button className='pt-[10px] pb-[10px] pl-[15px] pr-[15px] bg-opacity-main rounded-[15px]'>Join for free</button>
             <span className='flex gap-[1rem] items-center'>
                <span className='bg-white p-[8px] w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer'><FaPlay className='color-main'/></span>
                <span className='text-black'>Watch how it Works</span>
             </span>

             </div>
           </div>
           <div className="landing-image absolute negative-bottom right-[130px] w-full max-w-[400px]
           z-0 max-[991px]:right-auto max-[991px]:left-[50%] translate-media max-[991px]:w-[300px] max-[991px]:bottom-0">
           <Image
             src={"/landing-img.png"} 
             alt={"lading image"} 
             width={300}
             height={500}
             loading="lazy"
             />
             <div className="max-[768px]:hidden absolute w-[260px] p-[13px] backdrop-blur-[4px] rounded-[8px] top-[50%] negativ-left bg-filter">
                <p className="flex items-center gap-[0.5rem] mb-[7px]">
                <Image
                src={"/message-img.jpeg"} 
                alt={"lading image"} 
                width={200}
                height={200}
                loading="lazy"
                className="w-[50px] h-[50px] rounded-full"
                />
                <span className='text-black text-[15px]'>
                    User Experience Class Today at 12:00 PM
                </span>
                </p>
                <button className="bg-red-500 block m-auto transition-all  hover:bg-red-600 text-white rounded-[15px] p-[10px]">Jion Now</button>
             </div>

             <div className="absolute flex max-[768px]:hidden items-center gap-[0.5rem] bg-filter top-[55px] text-black p-[10px] rounded-[10px] text-[15px] negativ-left-icon">
                <MdDateRange  className='text-[30px] bg-blue-400 text-white p-[6px] rounded-[4px]'/>
                <div>
                    <span className='font-semibold text-[17px] block'>250K</span>
                    <span>Assisted Student</span>
                </div>
             </div>

             <div className="absolute flex max-[768px]:hidden items-center gap-[0.5rem] bg-filter top-[50%] text-black p-[10px] rounded-[10px] negativ-right">
                <MdEmail  className='text-[30px] text-white bg-orange-400 p-[6px] rounded-[4px]'/>
                <div>
                    <span className='font-semibold text-[17px] block'>Congratulations</span>
                    <span>Your admission completed</span>
                </div>
             </div>

             <div className="absolute text-[24px] max-[768px]:hidden text-white bg-red-500 top-[80px] p-[4px] rounded-[4px] right-0 rotate-[270deg]">
                <FaAlignLeft className="bg-white text-red-500 p-[3px]" />
             </div>
           </div>
        </div>


        {/************************ */}
        <div className="flex w-full flex-col justify-center items-center bg-black m-5">
        <h1 className="w-[478px] h-[65px] text-3xl text-center font-bold text-[#2F327D] mb-4">
          Latest News and Resources
        </h1>
        <p className="w-[676px] text-gray-500 mb-8 text-center">
          See the developments that have occurred to TOTC in the world
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-5">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <Image
              className="w-full"
              src="/24978c219bf2223fc9e32ec5fae8375f.png"
              alt="The Coldest Sunset"
              width={500}
              height={300}
            />
            <div className="px-6 py-4">
              <button className="bg-teal-600 p-4 text-center flex justify-center items-center text-white rounded-3xl h-[29px] w-[80px] my-3">
                New
              </button>

              <p className="text-[#2F327D] text-start text-xl">
                Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
              </p>

              <p className="text-start text-gray-700 mt-2">
                {isReadMore
                  ? "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively with leading digital-first platforms to provide a Zoom-friendly edtech solution. The funding aims to fuel expansion and enhance online learning features."
                  : "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively..."}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-start items-center">
              <span
                onClick={toggleReadMore}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer hover:bg-teal-300"
              >
                {isReadMore ? "Read less" : "Read more"}
              </span>
            </div>
          </div>
          <div className="w-full rounded overflow-hidden shadow-lg bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-8 p-5 w-full">
          {/* تكرار البطاقات من الـ array */}
          {cardData.map((card, index) => (
  <div 
    key={index} 
    className="max-w-sm w-full h-[200px] p-1 bg-white shadow-lg rounded-lg flex"
  >
    {/* صورة البطاقة */}
    <div 
      className="w-[450px]  h-full bg-cover bg-center rounded-lg"
      style={{ backgroundImage: `url(${card.imageUrl})` }}
    ></div>
    
    {/* محتوى البطاقة */}
    <div className="flex flex-col justify-center px-4 py-2 w-full">
      <h2 className="text-[#2F327D] text-xl font-semibold">{card.title}</h2>
    </div>
  </div>
))}

        </div>
    
      

          </div>
        </div>
      </div>
    </div>
        </>
    )
}