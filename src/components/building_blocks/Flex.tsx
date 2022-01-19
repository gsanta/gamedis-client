import React from 'react';

export interface FlexProps {
  direction: 'row' | 'column';
  alignItems?: 'center' | 'end' | 'start';
}

const Flex = ({ children, direction, alignItems }: React.PropsWithChildren<FlexProps>) => (
  <div className="layout__flex" style={{ flexDirection: direction, alignItems: alignItems || 'start' }}>
    {children}
  </div>
);

export default Flex;
