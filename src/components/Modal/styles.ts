import styled from 'styled-components';

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 3rem;
  right: 3rem;

  font-size: 2rem;
  color: ${({ theme }) => theme.colours.neutrals[999]};

  transition: 0.3s ease-in-out;

  &:hover {
    filter: brightness(0.96);
  }
`;
