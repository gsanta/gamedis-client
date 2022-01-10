import React from 'react';
import { useDispatch } from 'react-redux';
import { addNotificationAction } from '@/features/notification/notificationReducer';
import { useSearchSpritesQuery } from '../spriteApi';

const SpriteSearch = () => {
  const { data, error, isLoading } = useSearchSpritesQuery();
  // const { data, error, isLoading } = useGetSpriteByNameQuery('player');
  const dispatch = useDispatch();

  let result: JSX.Element | null = <div>No result</div>;

  if (error) {
    dispatch({ type: addNotificationAction.type, payload: 'Failed to load sprites.' });
  }

  // const info = () => {
  // };

  if (data) {
    result = (
      <>
        {data.map((spriteSheet) => (
          <div data-testid="spritesheet-item">{spriteSheet.name}</div>
        ))}
      </>
    );
  }

  console.log(data, error, isLoading);
  return <div>{result}</div>;
};

export default SpriteSearch;
