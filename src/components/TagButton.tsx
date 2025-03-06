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
                 ${isChecked ? 'bg-white text-primary' : 'bg-dark-opacity text-white'}
                 text-sm
                 font-medium
                 `}
            onClick={onClick}>
            {children}
        </button>
    );
};

export default TagButton;
