import { FC, ReactNode } from 'react';

interface RenderIfProps {
  children: ReactNode;
  condition: boolean;
}

export const RenderIf: FC<RenderIfProps> = ({ children, condition }) => {
  return <>{condition ? children : null}</>;
};
