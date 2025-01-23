import Image from 'next/image'
import React from 'react'

// Fetch data for a specific movie or TV show
async function getData(type, id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SLUG_URL}/${type}/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
  )

  if (!res.ok) {
    throw new Error(`Failed to fetch ${type} details`)
  }

  return res.json()
}

const DetailPage = async ({ params }) => {
  const { type, id } = params
  // console.log(params, "paramzs");

  // Fetch data based on type (movie/tv) and id
  const data = await getData(type, id)
  // console.log(data, "data");

  return (
    <div className='p-6 text-white '>
      <div className='flex gap-8'>
        <div className='flex'>
          <Image
            src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${data.poster_path}`}
            alt={data.title || data.name}
            className='rounded-md  m-2'
            width={500}
            height={500}
          />
        </div>
        <div className='flex-1 py-28'>
          <div className=' border-l-4 border-white pl-10'>
            <h1 className='text-5xl font-bold'>{data.title || data.name}</h1>
            <p className='py-10 text-2xl text-slate-500'>{data.overview}</p>
          </div>

          <div className='text-xl pt-14 text-slate-600'>
            <div className='space-y-4'>
              <p>Popularity Points : {data.popularity}</p>
              <p>Released On : {data.release_date}</p>
              <p>Country : {data.origin_country}</p>
              <p>Status : {data.status}</p>
              <p>User Rating : {`${data.vote_average.toFixed(2)}/10`}</p>
              <p>User Count : {`${data.vote_count} ratings`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPage
