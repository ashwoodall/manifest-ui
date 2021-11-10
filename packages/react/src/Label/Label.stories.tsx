import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Label, LabelProps } from './';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    size: {
      name: 'size',
      type: { name: 'string', required: false },
      description: 'Different supported label sizes',
      table: {
        type: {
          summary: 'small|standard',
        },
        defaultValue: { summary: 'medium' },
      },
      control: { type: 'radio' },
      options: ['small', 'standard'],
    },
    children: {
      description: 'Inner text for label element',
      table: {
        type: { summary: 'text|node' },
      },
    },
  },
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Medium = Template.bind({});
Medium.args = {
  children: 'Label',
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Label',
  size: 'small',
};
