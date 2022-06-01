/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { FC, memo } from 'react';
import { BsFillEyeFill, BsFillTrashFill, BsPen } from 'react-icons/bs';
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
  onRequestOpenEditModal: () => void;
  onRequestOpenDetailsModal: () => void;
  onAddProductEdit: (product: ProductType) => void;
  onAddProductDetails: (product: ProductType) => void;
  onDeleteProduct: (id: number) => void;
}
export const ProductCard: FC<ProductCardProps> = memo(
  ({
    product,
    width,
    onRequestOpenEditModal,
    onRequestOpenDetailsModal,
    onAddProductEdit,
    onAddProductDetails,
    onDeleteProduct
  }) => {
    const { photo_url, name, description, price, id } = product;

    const handleEditProduct = () => {
      onAddProductEdit(product);
      onRequestOpenEditModal();
    };
    const handleDetailsProduct = () => {
      onAddProductDetails(product);
      onRequestOpenDetailsModal();
    };

    return (
      <ProductCardContainer width={width}>
        <ProductCardHeader>
          <img src={photo_url} alt={name} width="auto" height="auto" />
        </ProductCardHeader>
        <ProductCardBody>
          <Title font="inter" weight="600" uppercase>
            {name}
          </Title>
          <p>{description}</p>
          <span>{formatPrice(price)}</span>
        </ProductCardBody>
        <ProductCardFooter>
          <Column column="3" gap="0.5rem" justifyContent="center" justifyItems="center">
            <Button
              type="button"
              variant="primary"
              positionIcon="left"
              onClick={handleDetailsProduct}>
              <BsFillEyeFill /> View details
            </Button>
            <Button
              type="button"
              variant="grey"
              title="Delete this product"
              onClick={() => onDeleteProduct(id)}>
              <BsFillTrashFill />
            </Button>
            <Button
              type="button"
              variant="grey"
              title="Edit this product"
              onClick={handleEditProduct}>
              <BsPen />
            </Button>
          </Column>
        </ProductCardFooter>
      </ProductCardContainer>
    );
  }
);
