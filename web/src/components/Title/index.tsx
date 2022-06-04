import { FC, ReactNode } from 'react';
import { TitleStyled, TitleStyledProps } from './styles';

export interface TitleProps extends TitleStyledProps {
  children: ReactNode;
  tag?: 'h1' | 'h2' | 'h3';
}
export const Title: FC<TitleProps> = ({
  children,
  tag = 'h1',
  weight = '400',
  align = 'left',
  font = 'poppins',
  ...props
}) => {
  return (
    <TitleStyled as={tag} font={font} weight={weight} align={align} {...props}>
      {children}
    </TitleStyled>
  );
};
