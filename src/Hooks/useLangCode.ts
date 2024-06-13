import React from 'react'
import { useTranslation } from 'react-i18next'

function useLangCode() {

    const {i18n} = useTranslation()
    
  return (
    i18n.language == 'en' ?'1' :'2'
  )
}

export default useLangCode