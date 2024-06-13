import React from 'react';
import { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { useChangeTheme } from '../../Hooks/useChangeTheme';
import { ChangeModeHelper, ChangeModeComp } from '../../helper/ChangeMode';
import { ThemeModeEnum } from '../../enums/ThemeMode';

const Theme: React.FC = () => {
  const { currentTheme, changeTheme } = useChangeTheme();
  const { DARK_MODE, LIGHT_MODE } = ThemeModeEnum;
  const { t } = useTranslation();

  const themeClickHandler =(theme:string) =>{
   return ChangeModeHelper({
      ChangeModeFunction: changeTheme,
      ChangeFunctionAttr: theme
    });
  }
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <ChangeModeComp onClickFunction={themeClickHandler(LIGHT_MODE)} isImage={false} icon={<BsFillSunFill/>} modeText={LIGHT_MODE} />,
    },
    {
      key: '2',
      label: <ChangeModeComp onClickFunction={themeClickHandler(DARK_MODE)} isImage={false} icon={<BsFillMoonStarsFill/>} modeText={DARK_MODE} />,
    },
  ];

  return (
    <Space direction="vertical">
      <Dropdown menu={{ items }} placement="top">
        <Button className='theme_mode_button'>{t(currentTheme  || 'Theme Mode')}</Button>
      </Dropdown>
    </Space>
  );
};

export default Theme;
