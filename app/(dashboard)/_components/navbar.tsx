"use client"

import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import SearchInput from './search-input'

const Navbar = () => {
  return (
    <div className='flex items-center gap-x-4 p-5'>
        <div className='hidden lg:flex lg:flex-1'>
            {/* Search */}
            <SearchInput />
        </div>
        <UserButton />
    </div>
  )
}

export default Navbar