import { Component } from "react"
import {  IconType } from "react-icons"

export interface ChangeModeProps{
    // useCallbackDependency:Function
    ChangeModeFunction?:any
    ChangeFunctionAttr:string
}

export interface ModeIconProps {
    onClickFunction: () => void;
    src?: string;
    modeText: string;
    isImage?: boolean;
    icon?: JSX.Element;
}