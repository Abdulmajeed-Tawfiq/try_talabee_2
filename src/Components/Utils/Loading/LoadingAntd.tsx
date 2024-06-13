import React from 'react';
import { Spin } from 'antd';
import './Loading.scss'

const LoadingAntd: React.FC = () => 
    
    <div className='loading_page'>
        <img src='Logo/Talabee.png' width={200} alt='logo'/>
        <Spin className='LoadingAntd' size='large' />
    </div>;

export default LoadingAntd;