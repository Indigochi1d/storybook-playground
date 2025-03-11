import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import CategoryButton from '../components/CategoryButton';

const meta = {
  title: 'Buttons/CategoryButton',
  component: CategoryButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  argTypes:{
    iconPath:{  control: "text" , description: "image path", defaultValue: "" },
    iconAlt:{ control: "text" , description: "image alt", defaultValue: "icon" },
    text:{ control: "text" , description: "button text", defaultValue: "button" },
    onClick:{ action: 'clicked', description: "button click event" },
    isDisabled:{ control: "boolean", description: "button disabled", defaultValue: false },
    isDarkMode:{ control: "boolean", description: "dark mode", defaultValue: false }
  },
  args:{
    iconAlt: "icon",
    iconPath: "/ic-category.svg",
    text: "상관없음",
    isDisabled: false,
    isDarkMode: false,
    onClick: fn()
  }
} satisfies Meta<typeof CategoryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default : Story ={
    args:{
        iconAlt: "icon",
        iconPath: "/ic-category.svg",
        text: "상관없음",
        isDisabled: false,
        isDarkMode: false,
        onClick: fn()
    }
}

export const Disabled : Story ={
    args:{
        iconAlt: "icon",
        iconPath: "/ic-category.svg",
        text: "상관없음",
        isDisabled: true,
        isDarkMode: false,
        onClick: fn()
    }
}

export const DarkMode : Story ={
    args:{
        iconAlt: "icon",
        iconPath: "/ic-category.svg",
        text: "상관없음",
        isDisabled: false,
        isDarkMode: true,
        onClick: fn()
    }
}

