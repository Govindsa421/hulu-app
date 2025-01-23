'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/custom/Input'
import { useNotfyProvider } from '../context/NotfyProvider'

type FormData = {
  username: string
  email: string
  password: string
  cpassword: string
}

const RegisterPage: React.FC = () => {
  const router = useRouter()
  const { notifySuccess, notifyError } = useNotfyProvider()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (data.password !== data.cpassword) {
      notifyError('password dont match')
      return
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    const result = await res.json()
    // console.log(result, 'res+++++++++++++++')

    if (res.ok) {
      router.push('/login')
      notifySuccess('User Registered Successfully')
    } else {
      notifyError(result.message)
    }
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='border border-green-400 p-6 rounded shadow-lg shadow-green-500'>
        <form onSubmit={handleSubmit(onSubmit)} className=' space-y-6'>
          <div className='text-center font-bold text-xl'>Sign Up</div>
          <div className='grid'>
            <Input
              register={register('username', {
                required: { value: true, message: 'username is required' },
                minLength: { value: 5, message: 'Minimum length is 5' },
                maxLength: { value: 13, message: 'Maximum length is 13' },
              })}
              placeholder='UserName'
              error={errors.username}
            />
          </div>
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
              register={register('password', { required: 'password is required' })}
              placeholder='Password'
              error={errors.password}
            />
          </div>
          <div className='grid'>
            <Input
              type='password'
              register={register('cpassword', {
                required: 'confirm password is required',
              })}
              placeholder='Confirm Password'
              error={errors.cpassword}
            />
          </div>
          <div>
            <button type='submit' className='px-4 py-2 font-bold bg-[#4EE783] text-black w-full rounded'>
              Sign Up
            </button>
          </div>

          <div className='text-center'>
            Already have an Accout ?
            <span className='ml-2 underline underline-offset-2'>
              <Link href={'/login'} as={'/login'}>
                Log In here
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
