import { FC } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import notFoundImg from '../../assets/not_found.svg';
import { Link } from '../../components/Link';
import { Message } from '../../components/Message';
import { Custom404Container } from './styles';

export const Custom404: FC = () => {
  return (
    <Custom404Container>
      <Message
        title="Resource not found"
        description="Please, Check that the address provided is correct."
        image={notFoundImg}>
        <Link to="/" variant="primary" size="large" positionIcon="left" margin="3rem 0 0 0">
          <BsArrowLeft /> Back to top
        </Link>
      </Message>
    </Custom404Container>
  );
};
