import type { Meta, StoryObj } from '@storybook/react';

import TagButton from '../components/TagButton';

const meta = {
  title: 'Buttons/TagButton',
  component: TagButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  decorators: [(Story) => <div style={{width:"360px"}}><Story/></div>],
  argTypes:{
    onClick:{
      action: 'clicked',description:"Tag Button Clicked"
    },
    children:{
      control:"text",description:"Button"
    },
    isChecked:{
        control:"boolean",description:"Button Clicked"
    }
  },
  args:{
    onClick:()=>{},
    children:"Button",
    isChecked:false
  }
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args : {
        onClick:()=>{},
        children:"Button",
        isChecked:false
    }
}
