import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import NavigationBar from '../components/NavigationBar';

const meta = {
  title: 'Navigation/NavigationBar',
  component: NavigationBar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  decorators:[
    (Story) => <div style={{width: "360px"}}><Story/></div>
  ],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  argTypes:{
    showBackButton:{ control: 'boolean', description: "뒤로가기 버튼 보이기 여부",defaultValue:false},
    showCloseButton:{ control: 'boolean', description: "닫기 버튼 보이기 여부",defaultValue:true},
    showTitle:{ control: 'boolean', description: "페이지 이름 보이기 여부",defaultValue:false},
    title:{ control: 'text', description: "페이지 이름",defaultValue:""},
    onBackButtonClick:{ action: 'clicked', description: "뒤로가기 버튼 클릭 event"},
    onCloseButtonClick:{ action: 'clicked', description: "닫기 버튼 클릭 event"}
  },
  args:{
    showBackButton:true,
    showCloseButton:true,
    showTitle:true,
    title:"title",
  }
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default : Story ={
    args:{
        isDarkMode:false,
        showBackButton:true,
        showCloseButton:true,
        showTitle:true,
        title:"title",
        onBackButtonClick:fn(),
        onCloseButtonClick:fn()
    }
}

export const NoBackButton : Story ={
    args:{
        isDarkMode:false,
        showBackButton:false,
        showCloseButton:true,
        showTitle:true,
        title:"title",
        onBackButtonClick:fn(),
        onCloseButtonClick:fn()
    }
}
