import React from 'react'
import Home from './Home'
import Naveber from './component/Naveber'
import Link from 'next/link'

const page = () => {
  return (
    <div><h1>page</h1>
    <Link href="/Home">Home</Link>
    <Naveber/>
    
    </div>
  )
}

export default page