import React from "react";
import IconButton from "./IconButton";

interface INavigationBarProps {
    isDarkMode: boolean;
    showBackButton : boolean;
    showCloseButton : boolean;
    showTitle : boolean;
    title?:string;
    onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
    onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const NavigationBar = ({
    isDarkMode,
    showBackButton,
    showCloseButton,
    showTitle,
    title="",
    onBackButtonClick = ()=>{},
    onCloseButtonClick = ()=>{}
    }:INavigationBarProps) => {
    return (
        <div className="flex justify-between">  
            <div className="navigation-title-wrapper flex">
                {/* 뒤로가기 버튼 */}
                {showBackButton && <IconButton alt="go_back" iconpath={`/back_left${isDarkMode ? "_white" : ""}.svg`} onClick={onBackButtonClick}/>}
                {/* 페이지 이름 */}
                {showTitle && <h1 className={`text-2xl ${isDarkMode ? "text-white" : ""} `}>{title}</h1>}
            </div>
            {/* 닫기 버튼 */}
                {showCloseButton && <IconButton alt="cancel" iconpath={`/cancel${isDarkMode ? "_white": ""}.svg`} onClick={onCloseButtonClick}/>}
        </div>
    );
};

export default NavigationBar;


/*
    기본적으로 이런 헤더들은 주어진 화면에 전체 width를 먹는데 스토리북에선 width가 보여지지 않는다.
    이럴때 decorators를 사용
    또한 decorators가 들어가면 확장자를 tsx로 바꿔야한다.
 */
