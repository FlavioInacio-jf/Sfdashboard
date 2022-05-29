import styled from 'styled-components';

interface HeaderProps {
  padding?: string;
}
export const Header = styled.header<HeaderProps>`
  position: relative;

  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${({ padding }) => padding || 0};

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
