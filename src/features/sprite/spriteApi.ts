import emptySplitApi from '@/services/emptySplitApi';
import { AxiosResponse } from 'axios';
import { Sprite } from 'babylonjs';
import { SpriteSheet } from './SpriteSheet';

const spriteApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpriteByName: builder.query<AxiosResponse<Sprite>, string>({
      query: (name) => ({ url: `sprite/${name}`, method: 'get' }),
    }),
    searchSprites: builder.query<SpriteSheet[], void>({
      query: () => ({ url: `sprite_sheet`, method: 'get' }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetSpriteByNameQuery, useSearchSpritesQuery } = spriteApi;
