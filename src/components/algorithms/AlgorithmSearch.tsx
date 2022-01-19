import { RootState } from '@/store';
import React from 'react';
import { useSelector } from 'react-redux';

const selectAlgorithms = (state: RootState) => state.algorithm;

const AlgorithmSearch = () => {
  const { algorithms } = useSelector(selectAlgorithms);

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
};

export default AlgorithmSearch;
