'use client'

import React from 'react'
import { Cursor, Typewriter } from 'react-simple-typewriter'

export default function TypeWriter({ words }: { words: string[] }) {
  return (
    <div>
      <Typewriter typeSpeed={70} words={words} loop={0} />
      <Cursor />
    </div>
  )
}
