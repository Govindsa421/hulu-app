import React from 'react'
import Image from 'next/image'
import { HeaderItem } from './HeaderItem'
import { HomeIcon, BoltIcon, CheckBadgeIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import { useNotfyProvider } from '../../context/NotfyProvider'

const Header = () => {
  const router = useRouter()
  const { notifySuccess } = useNotfyProvider()

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken')
      router.push('/')

      window.location.reload()
      notifySuccess('Logout success')
    }
  }

  return (
    <header className=' flex flex-col md:flex-row m-5 justify-between items-center '>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItem title={'HOME'} Icon={HomeIcon} />
        <HeaderItem title={'TRENDING'} Icon={BoltIcon} />
        <HeaderItem title={'VERIFIED'} Icon={CheckBadgeIcon} />
        <HeaderItem title={'COLLECTIONS'} Icon={HomeIcon} />
        <HeaderItem title={'SEARCH'} Icon={MagnifyingGlassIcon} />
        <HeaderItem title={'ACCOUNT'} Icon={UserIcon} />
        <button className='p-2 h-10 bg-green-400 text-black font-bold rounded' onClick={handleLogout}>
          Logout
        </button>
      </div>

      <Image
        className='h-12 bottom-4'
        src={'https://www.logo.wine/a/logo/Hulu/Hulu-Logo.wine.svg'}
        // src={"https://links.papareact.com/ua6"}
        alt='logo '
        width={150}
        height={50}
      />
    </header>
  )
}

export default Header
