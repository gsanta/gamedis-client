import { Button, Checkbox, Dropdown, Menu } from 'antd';
import React, { useState } from 'react';

const Toolbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const menu = (
    <Menu>
      <Menu.Item>
        <Checkbox>Checkbox</Checkbox>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
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
        <Button>bottomLeft</Button>
      </Dropdown>
    </div>
  );
};

export default Toolbar;
