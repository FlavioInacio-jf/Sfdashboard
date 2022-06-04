import styled from 'styled-components';

export const MessageContainer = styled.div`
  width: 100%;
  height: calc(100% - 4rem);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MessageWrapperImage = styled.div`
  margin-bottom: 3rem;
`;

export const MessageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const MessageDescription = styled.p`
  font-family: ${({ theme }) => theme.font.fontFamily[0]};
  font-size: 1.6rem;
  line-height: 2.08rem;

  color: ${({ theme }) => theme.colours.neutrals[500]};

  margin-top: 0.5rem;
`;
