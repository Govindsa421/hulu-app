'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Notyf } from 'notyf'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/custom/Input'

type FormData = {
  email: string
  password: string
}

const LoginPage: React.FC = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const notfy = new Notyf({ position: { x: 'center', y: 'bottom' } })

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // console.log('Submitting login data:', data)

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        localStorage.setItem('authToken', 'hulutoken')
        // console.log('Login successful:', result)
        router.push('/')
        notfy.success('Login Success')
      } else {
        // console.error('Login failed:', result.message)
        notfy.error(result.message)
      }
    } catch (error) {
      // console.error('Error during login:', error)
      notfy.error(error)
    }
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='border border-green-400 p-6 rounded shadow-lg shadow-green-500'>
        <form onSubmit={handleSubmit(onSubmit)} className=' space-y-6'>
          <div className='text-center font-bold text-xl'>Login</div>
          <div className='grid'>
            <Input
              type='email'
              register={register('email', {
                required: { value: true, message: 'email is required' },
                pattern: {
                  value: /@./,
                  message: 'email is inValid format',
                },
                validate: {
                  noBackList: (fieldValue) => {
                    return fieldValue.endsWith('gmail.com') || 'only gmail domains is supported'
                  },
                },
              })}
              placeholder='Email'
              error={errors.email}
            />
          </div>
          <div className='grid'>
            <Input
              type='password'
              register={register('password', { required: { value: true, message: 'password is required' } })}
              placeholder='Password'
              error={errors.password}
            />
          </div>
          <div>
            <button type='submit' className='px-4 py-2 font-bold w-full bg-[#4EE783] text-black'>
              Log In
            </button>
          </div>
          <div className='text-center'>
            <p>
              {`Don't have an account ?`}
              <span className=' underline underline-offset-2 ml-2'>
                <Link href={'/register'}>Sign Up</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
