import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { connectDB } from '../../../../helper/dbConfig'
import { User } from '../../../../helper/models'

export async function POST(request: Request) {
  await connectDB()
  const { email, password } = await request.json()
  console.log('Login attempt:', { email })

  try {
    const user = await User.findOne({ email })
    if (!user) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 400 })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid  password' }, { status: 400 })
    }

    return NextResponse.json({ message: 'Login successful' }, { status: 200 })
  } catch (error) {
    console.error('Error during login:', error.stack || error.message || error)
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}
