'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import requests from '../libs/requests'
import Nav from './components/navbar/Nav'
import dynamic from 'next/dynamic'
import SkeletonCard from './components/skeleton/SkeletonCard'
import Dashboard from './components/dashboard/page'

const Movie = dynamic(() => import('./components/result/Movie'), { ssr: false, loading: () => <SkeletonCard /> })
const Header = dynamic(() => import('./components/header/Header'), { ssr: false })

function AppContent() {
  const [movies, setMovies] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const searchParams = useSearchParams()
  const genre = searchParams.get('genre') || 'fetchTrending'

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('authToken')
      // console.log(token, "token");
      setIsAuthenticated(!!token)
    }
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      const fetchMovies = async () => {
        try {
          const requestUrl = `${process.env.NEXT_PUBLIC_SLUG_URL}${requests[genre]?.url || requests.fetchTrending.url}`
          const response = await fetch(requestUrl)
          const data = await response.json()
          setMovies(data.results)
        } catch (err) {
          console.error('Error fetching movies:', err)
        }
      }

      fetchMovies()
    }
  }, [genre, isAuthenticated])

  if (!isAuthenticated) return <Dashboard />

  return (
    <>
      <Header />
      <Nav />
      <Movie movies={movies} />
    </>
  )
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppContent />
    </Suspense>
  )
}
