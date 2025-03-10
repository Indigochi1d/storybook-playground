import React from 'react';

interface ICategoryButtonProps {
    iconPath:string;
    iconAlt:string;
    text:string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    isDisabled?:boolean;
}

const disabled = "disabled:bg-mono100 disabled:text-mono300";

const CategoryButton = ({iconPath,iconAlt,text,onClick,isDisabled}:ICategoryButtonProps) => {
    return (
        <button onClick={onClick} disabled={isDisabled} className={`${disabled} flex-col justify-items-center rounded-[10px] w-20 h-20`}>
            <img src={iconPath} alt={iconAlt} className={`${isDisabled ? "opacity-60" : ""} `}/>
            <p className={`text-primary font-extrabold ${isDisabled ? "opacity-60" : ""}`}>{text}</p>
        </button>
    );
};

export default CategoryButton;
