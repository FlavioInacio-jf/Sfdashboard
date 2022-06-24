import styled from 'styled-components';

export const ActionsContainer = styled.div`
  flex: 0;

  display: flex;
  align-items: center;

  font-size: 3rem;
  text-align: right;
  color: ${({ theme }) => theme.colours.neutrals.O00};

  a {
    display: inline-flex;
    align-items: center;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
  a + a {
    margin-left: ${({ theme }) => theme.sizes.xl};
  }
`;
