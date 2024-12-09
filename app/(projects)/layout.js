import React from 'react'

const ProjectLayout = () => {
  return (
   <Grid>
    <Link href="/projects/all">All</Link>
    <Link href="/projects/current">Current</Link>
    <Link href="/projects/upcoming">Upcoming</Link>
   </Grid>
  )
}

export default ProjectLayout