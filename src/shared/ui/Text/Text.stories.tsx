/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextSize, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'TITLE',
  text: 'EXAMPLE TEXT'
};

export const Error = Template.bind({});
Error.args = {
  title: 'TITLE',
  text: 'EXAMPLE TEXT',
  theme: TextTheme.ERROR
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'ONLY TITLE'
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'ONLY TEXT'
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'TITLE',
  text: 'EXAMPLE TEXT'
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'ONLY TITLE'
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'ONLY TEXT'
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
  title: 'TITLE',
  text: 'TEXT',
  size: TextSize.SIZE_L
};

export const SizeM = Template.bind({});
SizeM.args = {
  title: 'TITLE',
  text: 'TEXT',
  size: TextSize.SIZE_M
};
