/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Skeleton } from './Skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: '100%',
  height: 200
};

export const Circle = Template.bind({});
Circle.args = {
  border: '50%',
  width: 100,
  height: 100
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  width: '100%',
  height: 200
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark = Template.bind({});
CircleDark.args = {
  border: '50%',
  width: 100,
  height: 100
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryBLUE = Template.bind({});
PrimaryBLUE.args = {
  width: '100%',
  height: 200
};
PrimaryBLUE.decorators = [ThemeDecorator(Theme.BLUE)];

export const CircleBLUE = Template.bind({});
CircleBLUE.args = {
  border: '50%',
  width: 100,
  height: 100
};
CircleBLUE.decorators = [ThemeDecorator(Theme.BLUE)];
