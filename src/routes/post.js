// @flow

import R from 'ramda';

type Args = {
  req: *,
  res: *,
  ws: *,
};

export default async ({ req, res, ws }: Args) => (
  R.pipe(
    ({ data }) => (
      R.cond([
        [R.isNil, () => {
          res
            .status(400)
            .end();
        }],
        [R.T, async () => {
          const { id, delay, source } = req.body;

          const message = {
            id,
            delay,
            source,
          };

          ws.send(JSON.stringify(message));

          res
            .status(200)
            .send(message)
            .end();
        }],
      ])(data)
    ),
  )({
    data: R.path(['body'], req),
  })
);
