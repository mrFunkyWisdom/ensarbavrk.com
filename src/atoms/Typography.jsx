import * as React from 'react';
import classNames from 'classnames';

const Heading = ({ sizeClass, children, ...props }) => {
  const { className, ...restProps } = props;
  return (
    <h1
      className={classNames('font-bold', sizeClass, className)}
      {...restProps}>
      {children}
    </h1>
  );
};

const Text = ({ classes, children }) => <p className={classes}>{children}</p>;

export const H1 = ({ children, ...props }) => (
  <Heading sizeClass="text-5xl" {...props}>
    {children}
  </Heading>
);

export const H2 = ({ children }) => (
  <Heading sizeClass="text-3xl">{children}</Heading>
);

export const Small = ({ children }) => (
  <Text classes="text-sm">{children}</Text>
);

export const P = ({ children }) => <Text classes="text-text">{children}</Text>;
