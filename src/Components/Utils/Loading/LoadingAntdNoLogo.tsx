import React from 'react';
import { Spin } from 'antd';
import './Loading.scss'

const LoadingAntdNoLogo: React.FC = () =>

    <div className='loading_page_no_logo'>
        <Spin className='LoadingAntd' size='large' />
    </div>;

export default LoadingAntdNoLogo;