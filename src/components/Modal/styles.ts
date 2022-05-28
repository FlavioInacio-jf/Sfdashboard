import styled from 'styled-components';

export const Header = styled.header`
  position: relative;

  margin-bottom: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    flex: 1;
  }
`;

export const CloseButton = styled.button`
  flex: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2rem;
  text-align: left;
  color: ${({ theme }) => theme.colours.neutrals[999]};

  transition: 0.3s ease-in-out;

  &:hover {
    filter: brightness(0.96);
  }
`;
