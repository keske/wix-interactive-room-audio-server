import Express from 'express';
import R from 'ramda';

import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

import routes from './routes';

R.pipe(({ app, port }) => {
  app.use(cors());
  app.use(helmet());

  app.disable('x-powered-by');

  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: false,
    }),
  );

  app.use(Express.static('./public'));

  routes(app);

  app.listen(port, (err) => {
    if (err) {
      throw err;
    }

    console.log(`Started on port: ${port}`);
  });
})({
  app: Express(),
  port: 3017,
});
