import React from 'react';
import { Tabs } from 'antd';
import SpriteSheetElement from './SpriteSheetElement';
import SpriteSearch from './SpriteSearch';
import AlgorithmSearch from '@/components/algorithms/AlgorithmSearch';

const { TabPane } = Tabs;

function callback(key: string) {
  console.log(key);
}

const SpritePanel = () => {
  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Sprites" key="1">
        <SpriteSheetElement />
      </TabPane>
      <TabPane tab="Library" key="2">
        <SpriteSearch />
      </TabPane>
      <TabPane tab="Algorithms" key="3">
        <AlgorithmSearch />
      </TabPane>
    </Tabs>
  );
};

export default SpritePanel;
