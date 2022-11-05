/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import avatar from 'shared/assets/test/avatar.jpg';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  ThemeDecorator(Theme.LIGHT),
  StoreDecorator({
    profile: {
      form: {
        age: 19,
        avatar: avatar,
        city: 'Moscow',
        country: Country.RUSSIA,
        currency: Currency.RUB,
        firstname: 'Ramil',
        lastname: 'Ashrafulin',
        username: 'NiceGuyg'
      }
    }
  })
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        age: 19,
        avatar: avatar,
        city: 'Moscow',
        country: Country.RUSSIA,
        currency: Currency.RUB,
        firstname: 'Ramil',
        lastname: 'Ashrafulin',
        username: 'NiceGuyg'
      }
    }
  })
];
