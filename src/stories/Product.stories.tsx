import { Story } from '@storybook/react';
import { ProductCard, ProductCardProps } from '../components/ProductCard';

export default {
  title: 'Product',
  component: ProductCard
};

const Template: Story<ProductCardProps> = (args) => <ProductCard {...args} />;

export const Apple = Template.bind({});
Apple.args = {
  product: {
    id: 1,
    title: 'Apple',
    description: 'Lorem ipsum dolor sit amet, consectetur adip',
    price: 2000,
    amount: 2,
    photo_url:
      'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    createdAt: new Date(),
    updatedAt: new Date()
  }
};
