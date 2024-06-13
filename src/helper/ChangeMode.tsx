import React, { memo, useCallback } from "react";
import { ChangeModeProps, ModeIconProps } from "./HelperInterfaces";
import { useTranslation } from "react-i18next";


export const ChangeModeHelper = ({  ChangeModeFunction, ChangeFunctionAttr }:ChangeModeProps) => {
    const handleClick = useCallback(() => {
        ChangeModeFunction(ChangeFunctionAttr);
    }, [ChangeModeFunction, ChangeFunctionAttr]);
    
    return handleClick;
};

export const ChangeModeComp = ({onClickFunction, src, modeText,icon, isImage = true}:ModeIconProps) =>{
    const { t } = useTranslation();
    const ModeContainer = memo(() => (
        <div className="MenuChange" onClick={onClickFunction}>
            {isImage
            ? <img alt='ModeImage' src={src} width={20} height={20} />
            : icon
            } 
            {t(modeText)}
        </div>
      ));
      return <ModeContainer />;
}
