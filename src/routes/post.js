// @flow

import R from 'ramda';

export default async (req: any, res: any) => (
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

          res
            .status(200)
            .send({
              id,
              delay,
              source,
            })
            .end();
        }],
      ])(data)
    ),
  )({
    data: R.path(['body'], req),
  })
);
