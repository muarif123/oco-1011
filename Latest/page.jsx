"use client"
import React from 'react'
import Data from "../Data/page"

import { Dropdown } from "flowbite-react";
import Cards from '../Card/page';
import Image from 'next/image';

const Latest = () => {
  return (
    <div className='w-full py-20 bg-black'>
        <div className='w-1/2 sm:w-11/12 md:w-10/12 lg:w-10/12 xl:w-10/12 2xl:w-10/12 mx-auto'>
        <div className='w-full flex flex-wrap justify-between'>
            <div className='w-max py-4 sm:py-4 md:py-4 lg:py-1 xl:py-0 2xl:py-0'>
                <h1 className='text-white  ph3' style={{ fontWeight: "700",  whiteSpace: "nowrap" }}>
                    LATEST <span className='hovo'>COLLECTIONS</span>
                </h1>
            </div>
            <div className='w-max mx-auto sm:mx-auto md:mx-0 lg:mx-0 xl:mx-0 2xl:mx-0 mt-4'>
            <Dropdown className='' label="15 Minutes" dismissOnClick={false}>
      <Dropdown.Item>15 Min</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>


            </div>

        </div>

        </div>
        <div className='w-10/12 mx-auto mt-10 flex flex-wrap justify-between'>
        {Data.map((item,index)=>{
          return(
            <>
            <Cards {...item}/>
            
            </>
          )
        })}
 
        </div>
        <div className='relative top-10 mx-auto w-max'>
          <Image src={"https://res.cloudinary.com/dyxix0sib/image/upload/v1718170015/Vector_1_qkydab.png"} alt='' height={200} width={200}/>
          <div className='absolute top-3 left-10 text-white font-semibold'>
            View All
          </div>

        </div>
     
      
       
    </div>
  )
}

export default Latest