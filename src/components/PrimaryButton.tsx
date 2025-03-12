import React from 'react';

type PrimaryButtonTheme = "dark" | "light" | "social" | "text";

interface IPrimaryButtonProps {
    theme : PrimaryButtonTheme;
    children: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    isDisabled?: boolean;
}

const dark = "bg-primary text-white";
const light = "bg-white text-primary";
const social = "bg-social text-white";
const text = "bg-transparent text-white";
const disabled = "disabled:bg-mono100 disabled:text-mono300";

const color : Record<PrimaryButtonTheme,string> = {dark,light,social,text};

const PrimaryButton = ({theme,children,onClick,isDisabled}:IPrimaryButtonProps) => {
    return (
        <button className={
            `w-full h-[59px]
            rounded-[5px]
            ${disabled}
            ${color[theme]}
            `}
            disabled={isDisabled}
            onClick={onClick}
            >
            {children}
        </button>
    );
};

export default PrimaryButton;
