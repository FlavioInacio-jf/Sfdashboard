import { FC } from 'react';
import notFoundImg from '../../assets/not_found.svg';
import { Message } from '../../components/Message';
import { Custom404Container } from './styles';

export const Custom404: FC = () => {
  return (
    <Custom404Container>
      <Message
        title="Resource not found"
        description="Please, Check that the address provided is correct."
        image={notFoundImg}
      />
    </Custom404Container>
  );
};
