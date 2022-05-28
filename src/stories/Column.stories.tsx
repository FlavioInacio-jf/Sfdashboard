import { Meta, Story } from '@storybook/react';
import { Button } from '../components/Button';
import { Column, ColumnProps } from '../components/Column';

export default {
  title: 'Column',
  component: Column,
  argTypes: {
    children: {
      description: 'Elements of the react node type that you want to organize in columns.'
    },
    column: {
      description:
        'Number of columns. If no value is passed in column or sizeColumns, a column will be created. Default: 1',
      control: { type: 'number', min: 1 }
    },
    justifyItems: {
      description:
        'If no value is passed, the columns will be aligned to the center of the x axis. Default: center',
      control: {
        type: 'select',
        options: ['center', 'start', 'end']
      }
    },
    justifyContent: {
      description:
        'If no value is passed, the contents of the columns will be aligned to the center of the x axis. Default: center',
      control: {
        type: 'select',
        options: ['center', 'start', 'end']
      }
    },

    margin: {
      description:
        'Margin values ​​must be passed as follows: marginTop marginRight margin Bottom marginLeft. example 1: 1rem 1rem 1rem 1rem example 2: 10px',
      control: { type: 'text' },
      defaultValue: '0'
    },
    gap: {
      description:
        'Spacing between columns. With no value passed, a gap of 2rem will be used. Example: 10rem',
      control: { type: 'text' },
      defaultValue: ''
    },

    sizeColumns: {
      description:
        'Unlike the column property, here it is possible to inform the size of the columns individually, either in px or rem. In the following example, 3 columns will be created and each will be 1 rem wide. example 1: 1rem 1rem 1rem 1rem',
      control: {
        type: 'text',
        defaultValue: ''
      }
    }
  }
} as Meta;

const Template: Story<ColumnProps> = (args) => <Column {...args} />;

export const TwoColumns = Template.bind({});
TwoColumns.args = {
  children: (
    <>
      <Button variant="primary">1</Button> <Button variant="primary">2</Button>
    </>
  ),
  column: '2',
  justifyContent: 'center',
  justifyItems: 'center'
};

export const ThreeColumns = Template.bind({});
ThreeColumns.args = {
  children: (
    <>
      <Button variant="primary">1</Button> <Button variant="primary">2</Button>
      <Button variant="primary">3</Button>
    </>
  ),
  column: '3',
  justifyContent: 'center',
  justifyItems: 'center'
};
