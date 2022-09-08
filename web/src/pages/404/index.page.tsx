import type { NextPage } from 'next';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from '../../components/Link';
import { Message } from '../../components/Message';
import { Custom404Container } from './styles';

const Custom404: NextPage = () => {
  return (
    <Custom404Container>
      <Message
        title="Resource not found"
        description="Please, Check that the address provided is correct."
        image="/not_found.svg">
        <Link href="/" variant="primary" size="large" positionIcon="left" margin="3rem 0 0 0">
          <BsArrowLeft /> Back to top
        </Link>
      </Message>
    </Custom404Container>
  );
};

export default Custom404;
