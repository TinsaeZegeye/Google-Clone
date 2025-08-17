export const dynamic = 'force-dynamic';

import WebSearchResult from '@/components/WebSearchResult';
import Link from 'next/link';
import React from 'react'

export default async function WebSearchPage({ searchParams }) {

	const startIndex = searchParams.start || '1';
	await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`);

	const data = await response.json();
	
	if (!response.ok) {
		throw new Error('Something went wrong!');
	}

	const results = data.items;
	
	if (!results) {
		return (
			<div className='flex flex-col justify-center items-center pt-10'> 
				<h1 className='text-3xl mb-4'>No Result Found!</h1>
				<p className='text-lg'> 
					Try searching for other word or check spelling!
				</p>
				<Link className='text-blue-600 hover:brightness-105 cursor-pointer' href={'/'}>Homepage</Link>
			</div>
		)
	}
  return (
    <>
		  {results && <WebSearchResult results={data} />}
    </>
  )
}
