import React from 'react'
import Info from '../../Components/Info/Info'
import { PrivacyData } from '../../Backend/Info'

const Privacy = () => {
  
  return (
    <Info
      title='Privacy'
      about_image={false}
      text='Privacy Policy'
      response={PrivacyData?.data}
    />
  )
}

export default Privacy