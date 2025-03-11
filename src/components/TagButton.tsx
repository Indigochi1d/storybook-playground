import React from 'react';

interface ITagButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    children: string;
    isChecked: boolean;
}

const TagButton = ({onClick,children,isChecked}:ITagButtonProps) => {
    return (
        <button 
            className={
                `rounded-tag-button
                 px-[10px] 
                 border
                 border-white
                 h-[33px]
                 ${isChecked ?  'bg-dark-opacity text-white':'bg-white text-primary'}
                 text-sm
                 font-medium
                 `}
            onClick={onClick}>
            {children}
        </button>
    );
};

export default TagButton;
