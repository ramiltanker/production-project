/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProfileCard } from './ProfileCard';
import avatar from 'shared/assets/test/avatar.jpg';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    to: '/'
  }
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    age: 19,
    avatar: avatar,
    city: 'Moscow',
    country: Country.RUSSIA,
    currency: Currency.RUB,
    firstname: 'Ramil',
    lastname: 'Ashrafulin',
    username: 'NiceGuyg'
  }
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'ERROR ERROR ERROR'
};
