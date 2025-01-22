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

export default function Home() {
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
          const requestUrl = `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`

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

  return (
    <>
      <div>
        {isAuthenticated ? (
          <>
            <Header />
            <Nav />
            <Movie movies={movies} />
          </>
        ) : (
          <Dashboard />
        )}
      </div>
    </>
  )
}
