// @flow

import post from './routes/post';

import type { Synth } from './types';

export default (app: *) => (
  app
    .post('/', (req, res): Promise<Synth> => (
      post(req, res)
    ))
);
