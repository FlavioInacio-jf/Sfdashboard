import { Meta, Story } from '@storybook/react';
import { Title, TitleProps } from '../components/Title';

export default {
  title: 'Title',
  component: Title,
  argTypes: {
    children: {
      description:
        'Text inside the title. The values ​​provided in children must be of type ReactNode',
      control: { type: 'text' }
    },
    size: {
      description: 'Title color. Default: medium',
      control: { type: 'select', options: ['small', 'large', 'extraLarge'] }
    },
    variant: {
      description: 'Default:',
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'quartenary', 'danger', 'success']
      }
    },

    align: {
      description: 'Title alignment. Default:',
      control: {
        type: 'select',
        options: ['center', 'left', 'right']
      },
      defaultValue: 'left'
    },
    font: {
      description: 'Font family type. Default:',
      control: {
        type: 'select',
        options: ['poppins', 'inter']
      },
      defaultValue: 'poppins'
    },
    weight: {
      description: 'Font weight type. Default:',
      control: {
        type: 'select',
        options: ['400', '500', '600', '700']
      },
      defaultValue: '400'
    },

    mxAuto: {
      description: 'Center the title on the horizontal axis. default:',
      control: { type: 'boolean' },
      defaultValue: false
    },

    margin: {
      description:
        'Margin values ​​must be passed as follows: marginTop marginRight margin Bottom marginLeft. example 1: 1rem 1rem 1rem 1rem example 2: 10px',
      control: { type: 'text' },
      defaultValue: '0'
    }
  }
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  variant: 'primary'
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger',
  variant: 'danger'
};

export const Grey = Template.bind({});
Grey.args = {
  children: 'Danger',
  variant: 'grey',
  weight: '600'
};

export const Inter = Template.bind({});
Inter.args = {
  children: 'Inter',
  font: 'inter'
};

export const Small = Template.bind({});
Small.args = {
  children: 'Small',
  font: 'inter',
  size: 'small'
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  children: 'ExtraLarge',
  font: 'inter',
  size: 'extraLarge',
  weight: '700'
};
