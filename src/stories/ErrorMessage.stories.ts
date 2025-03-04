import type { Meta, StoryObj } from '@storybook/react';

import ErrorMessage from '../components/ErrorMessage';

const meta = {
  title: 'Buttons/ErrorMessage',
  component: ErrorMessage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  argTypes:{
    children: {control: 'text', description: "에러 메시지",defaultValue:"에러가 발생했습니다."}
  },
  args:{
    children:"에러가 발생했습니다"
  }
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default : Story ={
    args:{
        children:"에러가 발생했습니다"
    }
}
