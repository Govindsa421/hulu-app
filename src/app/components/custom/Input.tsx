import React from 'react'
import { FieldError } from 'react-hook-form'

interface InputProps {
  type?: 'text' | 'email' | 'password'
  placeholder?: string
  register: any
  error?: FieldError
  autoComplete?: string
}
export function Input({ type, placeholder, register, error, ...rest }: InputProps) {
  return (
    <div>
      <input type={type} placeholder={placeholder} {...register} {...rest} className={`inputField`} />
      {error && <p className='text-red-600'>{error.message}</p>}
    </div>
  )
}
