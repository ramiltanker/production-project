/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoginForm from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  StoreDecorator({
    loginForm: {
      username: 'Test username',
      password: 'Test password'
    }
  })
];

export const PrimaryWithError = Template.bind({});
PrimaryWithError.args = {};
PrimaryWithError.decorators = [
  StoreDecorator({
    loginForm: {
      username: 'Test username',
      password: 'Test password',
      error: 'Test Error'
    }
  })
];

export const PrimaryWithLoading = Template.bind({});
PrimaryWithLoading.args = {};
PrimaryWithLoading.decorators = [
  StoreDecorator({
    loginForm: {
      isLoading: true
    }
  })
];
