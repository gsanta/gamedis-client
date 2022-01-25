import { globalContext } from '@/globalContext';
import { Button, Checkbox, Dropdown, Menu } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';

const Toolbar = observer(() => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const {
    gridStore: { isGridVisible, setGridVisible },
  } = useContext(globalContext);

  const menu = (
    <Menu>
      <Menu.Item>
        <Checkbox checked={isGridVisible} onChange={() => setGridVisible(!isGridVisible)}>
          Show grid
        </Checkbox>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="canvas__toolbar">
      <Dropdown
        overlay={menu}
        placement="bottomLeft"
        trigger={['click']}
        onVisibleChange={(flag) => setDropdownVisible(flag)}
        visible={isDropdownVisible}
      >
        <Button>Canvas</Button>
      </Dropdown>
    </div>
  );
});

export default Toolbar;
