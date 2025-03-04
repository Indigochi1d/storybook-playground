import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import IconButton from '../components/IconButton';

const meta = {
  title: 'Buttons/IconButton',
  component: IconButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  argTypes:{
    alt:{ control: 'text', description: "이미지의 alt 속성",defaultValue:"icon"},
    iconpath:{ control: 'text', description: "이미지의 경로",defaultValue:""},
    onClick:{ action: 'clicked', description: "버튼 클릭 event"}
  },
  args:{
    onClick:fn(),
    iconpath: "/cancel_2.svg",
    alt:"icon"
  }
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CancelIcon : Story ={
    args:{
        alt:"icon",
        iconpath:"/cancel_2.svg",
        onClick:fn()
    }
}
