import { FC, ReactNode } from 'react';
import { BsXLg } from 'react-icons/bs';
import ReactModal from 'react-modal';
import { Title } from '../Title';
import { CloseButton, Header } from './styles';

interface ModalProps {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  width?: string;
  height?: string;
  padding?: string;
  onRequestClose: () => void;
}
export const Modal: FC<ModalProps> = ({
  children,
  title,
  isOpen,
  onRequestClose,
  width = 'auto',
  height = 'auto',
  padding = '3rem'
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="overlay-modal"
      style={{
        content: {
          padding,
          background: '#FFFFFF',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '1rem',
          position: 'relative',
          border: 'none',
          inset: 'auto',
          width,
          height
        }
      }}>
      <Header padding={padding === '0' ? '3rem 3rem 0 0' : '0'}>
        <Title size="extraLarge" weight="500" font="inter" align="center">
          {title}
        </Title>
        <CloseButton type="button" onClick={onRequestClose}>
          <BsXLg />
          <span className="sr-only">Close</span>
        </CloseButton>
      </Header>
      {children}
    </ReactModal>
  );
};
