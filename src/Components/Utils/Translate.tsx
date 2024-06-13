import React from 'react';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';
import { useChangeLanguage } from '../../Hooks/useChangeLanguage';
import { useTranslation } from 'react-i18next';
import { ChangeModeHelper, ChangeModeComp } from '../../helper/ChangeMode';
import { TranslateEnum } from '../../enums/Translate';

const Translate: React.FC = () => {
  const { currentLanguage, changeLanguage } = useChangeLanguage();
  const { ARABIC, ENGLISH } = TranslateEnum;
  const { t } = useTranslation();
  
  const handleLanguageChange = (language: string) => {
    return ChangeModeHelper({
      ChangeModeFunction: changeLanguage,
      ChangeFunctionAttr: language
    });
  };

  const items = [
    {
      key: '1',
      label: <ChangeModeComp onClickFunction={handleLanguageChange(ENGLISH)} src="../Layout/En.svg" modeText={ENGLISH} />,
    },
    {
      key: '2',
      label: <ChangeModeComp onClickFunction={handleLanguageChange(ARABIC)} src="../Layout/Ar.svg" modeText={ARABIC} />,
    },
  ];
  return (
    <Space direction="vertical">
      <Dropdown menu={{ items }} placement="top">
        <Button className='Translate' disabled>{t(currentLanguage)}</Button>
      </Dropdown>
    </Space>
  );
};

export default Translate;
