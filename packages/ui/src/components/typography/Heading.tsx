import React from "react";
import { CommonProps } from "../common";

export interface HeadingProps extends CommonProps {
  size?: 'extraTiny' | 'tiny' | 'small' | 'medium' | 'large' | 'extraLarge';
  as?: 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
}

export const Heading = ({
  children,
  size = 'medium',
  as = 'h3'
}: HeadingProps) => {
  return (
    React.createElement(as, {
      className: [`ui-heading`, `ui-heading--${size}`].join(' '),
    }, children)
  );
}