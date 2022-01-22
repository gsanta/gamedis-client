import { globalContext } from '@/globalContext';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';

const AlgorithmSearch = observer(() => {
  const {
    algStore: { algorithms },
  } = useContext(globalContext);

  const result = (
    <>
      {algorithms.map(({ name }) => (
        <div key={name} data-testid="algorithm-item">
          {name}
        </div>
      ))}
    </>
  );

  return <div>{result}</div>;
});

export default AlgorithmSearch;
