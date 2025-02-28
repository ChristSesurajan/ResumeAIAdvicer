"use client"
import React, { useState } from 'react'
import ThemeChanger from '@/app/components/themeChanger';
function header() {

  return (
    <div className='text-black'>
      <ThemeChanger/>
    </div>
  )
}

export default header