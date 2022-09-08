import { FC, ReactNode } from 'react';

interface BoxProps {
  children: ReactNode;
}
export const Box: FC<BoxProps> = ({ children }) => {
  return <div className="w-fit p-[1.6rem] rounded-xl bg-[#242424]">{children}</div>;
};
