import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Cards from './Cards'
import Footer from './Footer'

const Dashboard = () => {
  return (
    <>
      <div className='relative'>
        <div className='absolute top-0 left-0 right-0 flex justify-between p-4 z-10 text-white'>
          <div className='font-bold text-lg'>hulu</div>
          <div className='font-bold text-lg'>
            <Link href='/login'>Sign In</Link>
          </div>
        </div>

        <div className='relative'>
          <Image
            src='/img/img4.jpg'
            alt='Background Image'
            className='w-full h-[520px]'
            priority
            width={3200}
            height={1320}
          />
        </div>

        <div className='flex gap-8 justify-center items-center absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'>
          <div className='text-center space-y-4'>
            <p className='font-bold'>DISNEY BUNDLE TRIO BASIC</p>
            <Image
              src='/img/img3.png'
              width={301}
              height={59}
              alt='Disney Bundle'
              priority
              style={{ width: 'auto', height: 'auto' }}
            />
            <div className='text-white text-2xl font-bold'>
              <p>All with ads, for</p>
              <p>$16.99/month.</p>
            </div>
            <button className='px-4 py-2 w-full mt-4 bg-[#4EE783] text-black'>GET ALL THREE</button>
            <p>
              <Link href='/'>Terms apply</Link>
            </p>
          </div>

          <div className='text-center space-y-4'>
            <p className='font-bold'>DISNEY+, HULU, MAX BUNDLE</p>
            <Image
              src='/img/img2.png'
              width={301}
              height={59}
              alt='Disney, Hulu, Max Bundle'
              style={{ width: 'auto', height: 'auto' }}
            />
            <div className='text-white text-2xl font-bold'>
              <p>Plans starting at</p>
              <p>$16.99/month.</p>
            </div>
            <button className='px-4 py-2 w-full mt-4 bg-[#4EE783] text-black'>LEARN MORE</button>
            <p>
              <Link href='/'>Terms apply</Link>
            </p>
          </div>
        </div>

        <div className=''>
          <div
            className='w-full flex justify-between py-10 px-4'
            style={{
              background: 'linear-gradient(318.68deg, #0f495c, #0d3640 49.72%, #08141f)',
            }}
          >
            <div className='flex gap-16'>
              <Image
                src='/img/img1.png'
                alt='Bundle Image'
                priority
                className='object-cover w-[200px] h-[62px] '
                style={{ width: 'auto', height: 'auto' }}
                width={200}
                height={62}
              />
              <div className='space-y-4'>
                <p className='text-[#4EE783] font-bold'>DISNEY BUNDLE DUO BASIC</p>
                <h1 className='text-2xl  text-white'>Both with ads, for $10.99/month.</h1>
              </div>
            </div>

            <div>
              <button className='px-4 py-2 bg-[#4EE783] text-black'>GET THEM BOTH</button>
              <p>Terms apply</p>
            </div>
          </div>
          <div
            className='text-center py-10'
            style={{
              background: 'linear-gradient(180deg, #29A869 0.66%, #16181D 99.34%)',
            }}
          >
            <h1 className='text-white font-bold text-2xl'>{`BUILD THE PLAN THAT'S RIGHT FOR YOU`}</h1>
            <button className='px-4 py-2 mt-4 bg-white text-black font-bold'>START BUILDING</button>
          </div>
        </div>
      </div>
      <Cards />
      <Footer />
    </>
  )
}

export default Dashboard
