
import { Grid2, Link } from '@mui/material'
import React from 'react'

const LandingNav = () => {
  return (
    <Grid2  className='flex gap-4 m-2'>
            <Link href="/about">
            About
            </Link>
            <Link href="/blog">
            Blog
            </Link> 
            <Link href="/blog">
            Techstack
            </Link> 
    </Grid2>
  )
}

export default LandingNav