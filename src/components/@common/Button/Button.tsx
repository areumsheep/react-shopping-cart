import React from 'react';
import type { ButtonProps } from './Button.types';
import * as Styled from './Button.styles';

const Button = ({ color = 'gray07', children, ...attributes }: ButtonProps) => {
  return (
    <Styled.Button color={color} {...attributes}>
      {children}
    </Styled.Button>
  );
};

export default Button;