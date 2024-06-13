import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

function NotFoundPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className='not_foound_page'>
      <div className='container-not-found'>
        <img src="/Layout/404.png" alt="" />
        <p>404 <h6>|</h6>{t("This page could not be found")}</p>
        <div> <button onClick={() => navigate('/', { replace: true })}>{t("Home")}</button></div>
      </div>
    </div>
  )
}

export default NotFoundPage