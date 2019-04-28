// @flow

import post from './routes/post';

import type { Synth } from './types';

type Args = {
  app: *,
  ws: *,
};

export default ({ app, ws }: Args) => (
  app
    .post('/', (req, res): Promise<Synth> => (
      post({ req, res, ws })
    ))
);
