import { Meta, Story } from '@storybook/react';
import { BsAlarm } from 'react-icons/bs';
import { Link, LinkProps } from '../components/Link';

export default {
  title: 'Link',
  component: Link,
  argTypes: {
    children: {
      description:
        'Text inside the link. The values ​​provided in children must be of type ReactNode',
      control: { type: 'text' }
    },
    size: {
      description: 'Default: medium',
      control: { type: 'select', options: ['small', 'large'] }
    },
    variant: {
      description: 'Default: "primary"',
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'quartenary', 'danger', 'grey']
      }
    },
    flex: {
      description:
        'If the value is true, the link will occupy all the space in the parent container. Default: inline-flex(false)',
      control: { type: 'boolean', defaultValue: true },
      defaultValue: false
    },

    margin: {
      description:
        'Margin values ​​must be passed as follows: marginTop marginRight margin Bottom marginLeft. example 1: 1rem 1rem 1rem 1rem example 2: 10px',
      control: { type: 'text' },
      defaultValue: '0'
    },
    noPadding: {
      description: 'Remove link padding. default: false',
      control: { type: 'boolean' },
      defaultValue: false
    },
    positionIcon: {
      description:
        "If the link has an icon and text, it is necessary to inform the position of the icon to apply margins in order to distance the text from the icon. NOTE: If you don't have it, you don't need to inform.",
      control: {
        type: 'select',
        options: ['left', 'right'],
        defaultValue: ''
      }
    },
    outline: { control: { type: 'boolean' }, defaultValue: true }
  }
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Hello World',
  variant: 'primary',
  size: 'small',
  href: '/'
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  variant: 'secondary',
  size: 'small',
  href: '/'
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  children: 'Tertiary',
  variant: 'tertiary',
  size: 'small',
  href: '/'
};

export const Quartenary = Template.bind({});
Quartenary.args = {
  children: 'Quartenary',
  variant: 'quartenary',
  size: 'small',
  href: '/'
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger',
  variant: 'danger',
  size: 'small',
  href: '/'
};

export const Small = Template.bind({});
Small.args = {
  children: 'Small',
  variant: 'danger',
  size: 'small',
  href: '/'
};

export const Large = Template.bind({});
Large.args = {
  children: 'Large',
  variant: 'primary',
  size: 'large',
  href: '/'
};

export const Icon = Template.bind({});
Icon.args = {
  children: (
    <>
      <BsAlarm /> Icon
    </>
  ),
  variant: 'primary',
  size: 'large',
  positionIcon: 'left',
  href: '/'
};
