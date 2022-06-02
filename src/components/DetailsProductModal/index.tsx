import { FC } from 'react';
import { ProductType } from '../../types/productType';
import { formatPrice } from '../../utils/format';
import { Modal } from '../Modal';
import { Title } from '../Title';
import {
  Container,
  DetailsProductBody,
  DetailsProductFooter,
  DetailsProductHeader,
  OverflowVertical
} from './styles';

interface DetailsProductModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  productSeeing: ProductType;
}

export const DetailsProductModal: FC<DetailsProductModalProps> = ({
  isOpen,
  onRequestClose,
  productSeeing
}) => {
  const { name, price, description, photo_url, amount } = productSeeing;

  return (
    <Modal
      title={`Details ${name?.slice(0, 20)}`}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      width="50rem"
      padding="0">
      <Container>
        <OverflowVertical>
          <DetailsProductHeader>
            <img src={photo_url} alt={name} width="auto" height="auto" />
          </DetailsProductHeader>
          <DetailsProductBody>
            <Title font="inter" weight="600" size="large" uppercase>
              {name}
            </Title>
            <p>{description}</p>
          </DetailsProductBody>
        </OverflowVertical>

        <DetailsProductFooter>
          <span className="price">{formatPrice(price)}</span>
          <span className="amount">{amount}</span>
        </DetailsProductFooter>
      </Container>
    </Modal>
  );
};
