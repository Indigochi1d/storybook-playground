import React from 'react';

import './button.css';

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
} 
/** 
  지금 인터페이스에 적힌 주석들이 storybook에 반영되고 있는데 
  스토리의 argTypes를 컴포넌트에 작성하는 것은 컴포넌틔 영역이 아니다.
  따라서 meta/argTypes/YourProps/description 에 작성해야한다.
**/

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
