import classNames from 'classnames';
import React from 'react';
import { StyleColor } from './Styles';

type TextProps = {
  children: string;
  color?: StyleColor;
};

const TextBlock = ({ children, color }: TextProps) => {
  const classes = classNames({
    ['text-color__' + color]: color,
  });

  return <p className={classes}>{children}</p>;
};

export default TextBlock;
