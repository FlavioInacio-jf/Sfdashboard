import { FC, ReactNode } from 'react';
import { BsXLg } from 'react-icons/bs';
import ReactModal from 'react-modal';
import { CloseButton } from './styles';

interface ModalProps {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onRequestClose: () => void;
}
export const Modal: FC<ModalProps> = ({ children, title, isOpen, onRequestClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="overlay-modal"
      style={{
        content: {
          padding: '3rem',
          background: '#FFFFFF',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '0.5rem',
          position: 'relative'
        }
      }}>
      <header>{title}</header>
      {children}
      <CloseButton type="button" onClick={onRequestClose}>
        <BsXLg />
        <span className="sr-only">Close</span>
      </CloseButton>
    </ReactModal>
  );
};
