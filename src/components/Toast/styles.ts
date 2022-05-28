import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

export const ToastStyled = styled(ToastContainer)`
  font-family: ${({ theme }) => theme.font.fontFamily[0]};
  font-size: 1.6rem;
  line-height: 2.08rem;
`;
