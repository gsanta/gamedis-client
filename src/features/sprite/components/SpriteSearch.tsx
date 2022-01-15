import React from 'react';
import { useDispatch } from 'react-redux';
import { addNotificationAction } from '@/features/notification/notificationReducer';
import spriteApi from '../spriteApi';

const SpriteSearch = () => {
  const { data, error, isLoading } = spriteApi.useSearchSprites();
  // const { data, error, isLoading } = useGetSpriteByNameQuery('player');
  const dispatch = useDispatch();

  let result: JSX.Element | null = <div>No result</div>;

  if (error) {
    dispatch({ type: addNotificationAction.type, payload: 'Failed to load sprites.' });
  }

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
