import { Meta, Story } from '@storybook/react';
import { Input, InputProps } from '../components/Form/Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    name: {
      description: 'Input name',
      control: { type: 'text' },
      defaultValue: ''
    },
    label: {
      description: 'Input label',
      control: { type: 'text' },
      defaultValue: ''
    },
    placeholder: {
      description: 'Input placeholder',
      control: { type: 'text' },
      defaultValue: ''
    },
    margin: {
      description:
        'Margin values ​​must be passed as follows: marginTop marginRight margin Bottom marginLeft. example 1: 1rem 1rem 1rem 1rem example 2: 10px',
      control: { type: 'text' },
      defaultValue: '0'
    },
    mask: {
      description: 'Input text mascara',
      control: { type: 'select', options: ['number', 'currency', 'none'] },
      defaultValue: 'none'
    }
  }
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: 'Name', name: 'name', placeholder: 'Enter a text' };

export const Currency = Template.bind({});
Currency.args = { label: 'Currency', name: 'currency', placeholder: 'Enter', mask: 'currency' };
