import { FC, ReactNode } from 'react';
import { Title } from '../Title';
import {
  MessageContainer,
  MessageContent,
  MessageDescription,
  MessageWrapperImage
} from './styles';

export interface MessageProps {
  title: string;
  description?: string;
  image: string;
  children?: ReactNode | null;
}

export const Message: FC<MessageProps> = ({ title, description, image, children = null }) => {
  return (
    <MessageContainer>
      <MessageContent>
        <MessageWrapperImage>
          <img src={image} width="400" height="400" alt="Empty result" />
        </MessageWrapperImage>

        <Title size="large" font="inter" weight="600">
          {title}
        </Title>
        {description && <MessageDescription>{description}</MessageDescription>}
        {children}
      </MessageContent>
    </MessageContainer>
  );
};
