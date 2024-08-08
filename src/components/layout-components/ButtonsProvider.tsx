'use client'
import React from 'react'
import { Button } from '../ui/button'
import { signIn } from 'next-auth/react'

export default function ButtonsProvider() {
  return (
    <div className='flex items-center gap-3'>
      <Button onClick={() => signIn('google')}>Continuer avec Google</Button>
      <span>OU</span>
      <Button onClick={() => signIn('github')}>Continuer avec github</Button>
    </div>
  )
}
