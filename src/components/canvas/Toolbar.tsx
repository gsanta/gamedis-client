import { globalContext } from '@/globalContext';
import { Tool } from '@/model/canvas/Tool';
import { Button, Checkbox, Dropdown, Menu } from 'antd';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { RenderingContext } from './RendererProvider';

const getTool = (tool: Tool, activeTool: Tool | null, setActiveTool: (tool: Tool) => void) => {
  const toolClassName = classNames('tool', {
    'tool--active': activeTool === tool,
  });

  return (
    <div className={toolClassName} onClick={() => setActiveTool(tool)}>
      {tool.toolName}
    </div>
  );
};

const Toolbar = observer(() => {
  const { toolStore } = useContext(RenderingContext);
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

  const setActiveTool = (tool: Tool | null) => {
    toolStore.setActiveTool(tool);
  };

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

      {getTool(toolStore.moveTool, toolStore.activeTool, setActiveTool)}
      {getTool(toolStore.createTool, toolStore.activeTool, setActiveTool)}
    </div>
  );
});

export default Toolbar;
