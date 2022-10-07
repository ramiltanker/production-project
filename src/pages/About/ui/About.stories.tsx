import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import About from './About';

export default {
  title: 'pages/About',
  component: About,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = (args) => <About {...(args as typeof About)} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
