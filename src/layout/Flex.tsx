import React from 'react';

export interface FlexProps {
  direction: 'row' | 'column';
}

const Flex = ({ children, direction }: React.PropsWithChildren<FlexProps>) => (
  <div className="layout__flex" style={{ flexDirection: direction }}>
    {children}
  </div>
);

export default Flex;
