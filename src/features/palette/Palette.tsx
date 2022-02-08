import React, { useContext, useState } from 'react';
import ShapeType from '@/model/ShapeType';
import { observer } from 'mobx-react-lite';
import { globalContext } from '@/globalContext';

function getShapeItem(
  shapeType: ShapeType,
  selectedType: ShapeType | null,
  setSelectedType: (shapeType: ShapeType | null) => void,
) {
  const className = shapeType === selectedType ? 'palette__shape--selected' : undefined;

  const onClick = () => {
    if (selectedType === shapeType) {
      setSelectedType(null);
    } else {
      setSelectedType(shapeType);
    }
  };

  return (
    <div className={className} onClick={onClick}>
      {shapeType}
    </div>
  );
}

const Palette = observer(() => {
  const { paletteStore } = useContext(globalContext);

  const setSelectedType = (selectedType: ShapeType | null) => {
    paletteStore.selectedType = selectedType;
  };

  return <div>{getShapeItem(ShapeType.Rectangle, paletteStore.selectedType, setSelectedType)}</div>;
});

export default Palette;
