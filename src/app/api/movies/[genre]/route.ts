import { NextResponse } from 'next/server'
import requests from '../../../../libs/requests'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

export async function GET(request: Request, { params }) {
  const { genre } = params
  const url = `${process.env.NEXT_PUBLIC_SLUG_URL}${requests[genre]?.url}&api_key=${API_KEY}`

  try {
    const response = await fetch(url)
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching movies:', error)
    return NextResponse.json({ message: 'Error fetching movies' }, { status: 500 })
  }
}
