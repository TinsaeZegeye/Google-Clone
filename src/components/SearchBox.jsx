'use client'

import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx"
import { FaMicrophone } from "react-icons/fa"
import { SlMagnifier } from "react-icons/sl"
import { useParams, useSearchParams, useRouter } from 'next/navigation'

export default function SearchBox() {

    const searchParams = useSearchParams();
    const router = useRouter();
    const searchTerm = searchParams.get('searchTerm');
    const [term, setTerm] = useState(searchTerm || '');

    function handleSubmit(e) {
        e.preventDefault();

        if (!term.trim()) return;

        router.push(`web?searchTerm=${term}`);
    }

  return (
      <form className='flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center' onSubmit={handleSubmit}>
          <input type="text" className='w-full focus:outline-none' onChange={(e)=>{setTerm(e.target.value)}} value={term} />
          <RxCross2 className='text-2xl text-gray-500 cursor-pointer sm:mr-2' onClick={()=>{setTerm('')}} />
          <FaMicrophone className='hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3' />
          <SlMagnifier className='text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer' onClick={handleSubmit}/>
    </form>
  )
}
