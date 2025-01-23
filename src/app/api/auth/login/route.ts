import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { connectDB } from '../../../../helper/dbConfig'
import { User } from '../../../../helper/models'

export async function POST(request: Request) {
  await connectDB()
  const { email, password } = await request.json()
  console.log('Login attempt:', { email })
  //
  try {
    // Find the user by email
    const user = await User.findOne({ email })
    if (!user) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 400 })
    }

    // Compare the password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid  password' }, { status: 400 })
    }

    // If login is successful, respond with a success message
    return NextResponse.json({ message: 'Login successful' }, { status: 200 })
  } catch (error) {
    console.error('Error during login:', error.stack || error.message || error)
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}
