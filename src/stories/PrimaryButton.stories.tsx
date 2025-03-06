import type { Meta, StoryObj } from '@storybook/react';

import PrimaryButton from '../components/PrimaryButton';

const meta = {
  title: 'Buttons/PrimaryButton',
  component: PrimaryButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  decorators: [(Story) => <div style={{width:"360px"}}><Story/></div>],
  argTypes:{
    theme: {control: {type: 'select', options: ["dark","light","social","text"]}, description: "테마를 선택하세요",defaultValue:"dark"},
    children: {control: 'text', description: "Primary Button",defaultValue:"Primary Button"},
    onClick: {action:'clicked' , description: "버튼 클릭 이벤트"},
    isDisabled: {control: 'boolean', description: "버튼 비활성화 여부",defaultValue:false}
  },
  args:{
    children:"PrimaryButton",
    onClick:()=>{},
    theme:"dark",
    isDisabled:false
  }
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default : Story = {
    args:{
        theme: "dark",
        children:"PrimaryButton",
        onClick:()=>{},
        isDisabled:false
    }
}

export const Disabled : Story = {
  args : {
    theme : "dark",
    children : "PrimaryButton",
    onClick : ()=>{},
    isDisabled: true
  }
}
