import { rest } from 'msw';
import spritesJson from '../jsons/sprites.json';

export const handlers = [
  rest.get('/api/sprite/name/:spriteName', async (req, res, ctx) => {
    const { spriteName } = req.params;
    console.log('the sprites', spritesJson.sprites);

    const sprite = spritesJson.sprites.find((s) => s.name === spriteName);

    return res(ctx.json(sprite));
  }),
  rest.get('/api/v1/sprite_sheet', async (_req, res, ctx) => {
    const sprites = spritesJson.sprites;

    return res(ctx.json(sprites));
  }),
];
