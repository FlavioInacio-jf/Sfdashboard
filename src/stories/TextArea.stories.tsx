import { Meta, Story } from '@storybook/react';
import { TextArea, TextAreaProps } from '../components/Form/TextArea';

export default {
  title: 'Text area',
  component: TextArea,
  argTypes: {
    children: {
      description: 'Text inside the textarea.',
      control: { type: 'text' }
    },
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
    }
  }
} as Meta;

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: 'Name', name: 'name', placeholder: 'Enter a text', children: 'Name' };