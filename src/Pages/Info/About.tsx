import React from 'react'
import { AboutData } from '../../Backend/Info'
import Info from '../../Components/Info/Info'

const About = () => {
  
  return (
    <Info
      title='About us'
      text='Who are we'
      about_image={true}
      response={AboutData?.data}
    />
  )
}

export default About