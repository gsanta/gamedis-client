import { Tool } from '@/model/canvas/Tool';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
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
  const context = useContext(RenderingContext);

  const setActiveTool = (tool: Tool | null) => {
    context?.toolStore.setActiveTool(tool);
  };

  const tools = context?.toolStore.getTools().map((tool) => getTool(tool, context.toolStore.activeTool, setActiveTool));

  return <div className="canvas__toolbar">{context ? <>{tools}</> : null}</div>;
});

export default Toolbar;
