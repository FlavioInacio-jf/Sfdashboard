import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  font-size: 1.4rem;
  color: ${({ theme }) => theme.colours.neutrals.O00};

  margin-right: ${({ theme }) => theme.sizes.lg};
`;

export const Avatar = styled.div`
  margin-right: 0.8rem;
  img {
    width: 3rem;
    height: 3rem;

    clip-path: circle();
  }
`;
