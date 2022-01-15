import { useAuthorizedApiQuery } from '../../hooks/useApiQuery';
import { SpriteSheet } from './SpriteSheet';

const useGetSpriteByName = (name: string) => {
  return useAuthorizedApiQuery(['sprite', name], `v1/sprite_sheet/${name}`);
};

const useSearchSprites = () => {
  return useAuthorizedApiQuery<SpriteSheet[], unknown>(['sprites'], `v1/sprite_sheet`);
};

const spriteApi = {
  useGetSpriteByName,
  useSearchSprites,
};

export default spriteApi;

// const spriteApi = emptySplitApi.injectEndpoints({
//   endpoints: (builder) => ({
//     getSpriteByName: builder.query<AxiosResponse<Sprite>, string>({
//       query: (name) => ({ url: `sprite/${name}`, method: 'get' }),
//     }),
//     searchSprites: builder.query<SpriteSheet[], void>({
//       query: () => ({ url: `sprite_sheet`, method: 'get' }),
//     }),
//   }),
//   overrideExisting: false,
// });

// export const { useGetSpriteByNameQuery, useSearchSpritesQuery } = spriteApi;
