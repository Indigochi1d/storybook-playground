import type { Meta, StoryObj } from '@storybook/react';

import TagList from '../components/TagList';

const meta = {
  title: 'List/TagList',
  component: TagList,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  argTypes:{
    tagList:{
      control:"object",description:"List of Tags"
    },
    onTagClick:{
      action: 'clicked',description:"Tag Clicked"
    }
  },
  args:{
    tagList:["1~2명","3~5명","6~10명"],
    onTagClick:()=>{}
  }
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args : {
        tagList:["1~2명","3~5명","6~10명"],
        onTagClick:()=>{}
    }
}
