/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './Select';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    to: '/'
  }
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Укажите значения',
  options: [
    {
      content: 'Test1',
      value: '123'
    },
    {
      content: 'Test2',
      value: '1234'
    },
    {
      content: 'Test3',
      value: '12'
    },
    {
      content: 'Test4',
      value: '13'
    }
  ]
};
