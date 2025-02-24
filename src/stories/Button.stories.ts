import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '../components/Button';

const meta = {
  title: 'Basic/Button',  //경로를 나타냄
  component: Button,        //내가 이 컴포넌트의 스토리를 작성했다는 것을 알려줌
  parameters: {             //스토리북의 동작을 커스터마이징하는 데 사용
    layout: 'centered',     // 레이아웃 위치를 설정
  },
  tags: ['autodocs'],
  argTypes: {               // 스토리북에서 컴포넌트의 props(인자)들을 어떻게 조작할지 정의하는 설정
    primary: { control: 'boolean', description: '버튼의 타입을 지정해주세요.' },
    backgroundColor: { 
      control: 'color', description:'버튼의 배경색을 지정해주세요.'},  
  },
  args: { onClick: fn() },  //스토리에서 사용할 기본 props 값을 미리 정의
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
