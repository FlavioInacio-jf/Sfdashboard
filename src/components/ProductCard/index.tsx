import { FC } from 'react';
import { BsFillTrashFill, BsPen } from 'react-icons/bs';
import { ProductType } from '../../types/productType';
import { formatPrice } from '../../utils/format';
import { Button } from '../Button';
import { Column } from '../Column';
import { Title } from '../Title';
import {
  ProductCardBody,
  ProductCardContainer,
  ProductCardContainerProps,
  ProductCardFooter,
  ProductCardHeader
} from './styles';

export interface ProductCardProps extends ProductCardContainerProps {
  product: ProductType;
}
export const ProductCard: FC<ProductCardProps> = ({ product, width }) => {
  const { photo_url, title, description, price, amount } = product;

  return (
    <ProductCardContainer width={width}>
      <ProductCardHeader>
        <img src={photo_url} alt={title} width="auto" height="auto" />
      </ProductCardHeader>
      <ProductCardBody>
        <Title font="inter" weight="600" uppercase>
          {title}
        </Title>
        <p>{description}</p>
        <span>
          {formatPrice(price)} <span>{amount}</span>
        </span>
      </ProductCardBody>
      <ProductCardFooter>
        <Column column="3" gap="0" justifyContent="center" justifyItems="center">
          <Button type="button" variant="primary">
            View details
          </Button>
          <Button type="button" variant="grey" title="Delete this product">
            <BsFillTrashFill />
          </Button>
          <Button type="button" variant="grey" title="Edit this product">
            <BsPen />
          </Button>
        </Column>
      </ProductCardFooter>
    </ProductCardContainer>
  );
};