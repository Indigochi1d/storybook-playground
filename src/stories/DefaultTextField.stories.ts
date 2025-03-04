import type { Meta, StoryObj } from '@storybook/react';

import DefaultTextField from '../components/DefaultTextField';

const meta = {
  title: 'Buttons/DefaultTextField',
  component: DefaultTextField,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  argTypes:{
    alt: {control: 'text', description: "아이콘 대체 텍스트",defaultValue:"Icon"},
    iconPath: {control: 'text', description: "아이콘 경로",defaultValue:"/cancel_2.svg"},
    onIconClick :{action: 'clicked', description: "아이콘 클릭 이벤트"},
    placeholder: {control: 'text', description: "플레이스홀더",defaultValue:"Placeholder"},
    value: {control: 'text', description: "값",defaultValue:"Value"},
    onChange: {action: 'changed', description: "값 변경 이벤트"},
    errorMessage: {control: 'text', description: "에러 메시지",defaultValue:"Error Message"},
    isError: {control: 'boolean', description: "에러 여부",defaultValue:false}
  },
  args:{
    alt: 'Icon',
    iconPath: "/cancel_2.svg",
    placeholder: '텍스트를 입력해주세요',
    value: '',
    errorMessage: "텍스트를 확인해주세요",
    
  }
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default : Story = {
    args:{  
        errorMessage: 'Error Message',
        iconPath: "/cancel.svg",
        onIconClick: () => {},
        placeholder: '텍스트를 입력해주세요',
        onChange: () => {},
        value: '',
        alt: 'Icon',
        isError: false,
        id:'1'
    }
}

export const ErrorOn : Story = {
    args:{
        errorMessage: 'Error Message',
        iconPath: "/cancel.svg",
        onIconClick: () => {},
        placeholder: '텍스트를 입력해주세요',
        onChange: () => {},
        value: '',
        alt: 'Icon',
        isError: true,
        id:'2'
    }
}

export const ValueOn : Story = {
    args:{
        id: 'email',
        errorMessage: 'Error Message',
        iconPath: "/cancel.svg",
        onIconClick: () => {},
        placeholder: '텍스트를 입력해주세요',
        onChange: () => {},
        value: '입력이 되었음ㅋㅋ',
        alt: 'Icon',
        isError: false,
    }
}
