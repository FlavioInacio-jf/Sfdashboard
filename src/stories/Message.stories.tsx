import { Story } from '@storybook/react';
import notFoundImg from '../assets/not_found.svg';
import { Button } from '../components/Button';
import { Message, MessageProps } from '../components/Message';

export default {
  title: 'Message',
  component: Message,
  argTypes: {
    children: {
      description: 'The values ​​provided in children must be of type ReactNode. Default: null',
      control: { type: 'text' },
      defaultValue: null
    },
    title: {
      description: 'Short title',
      control: { type: 'text' },
      defaultValue: ''
    },
    description: {
      description: 'Short description of what happened',
      control: { type: 'text' },
      defaultValue: ''
    },
    image: {
      description: 'Image address',
      control: { type: 'text' },
      defaultValue: ''
    }
  }
};

const Template: Story<MessageProps> = (args) => <Message {...args} />;

export const NotFound = Template.bind({});
NotFound.args = {
  title: 'Not Found',
  description: 'Please make sure the address is correct.',
  image: notFoundImg,
  children: null
};

export const WithButton = Template.bind({});
WithButton.args = {
  title: 'With Button',
  description: 'Please make sure the address is correct.',
  image: notFoundImg,
  children: (
    <Button variant="danger" type="button" margin="3rem 0 0 0">
      Button
    </Button>
  )
};
