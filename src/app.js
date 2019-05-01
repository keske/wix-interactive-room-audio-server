import Express from 'express';
import R from 'ramda';
import WebSocket from 'ws';

import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

import routes from './routes';

R.pipe(({ app, port, websockets }) => {
  const wss = new WebSocket.Server({
    port: websockets.port,
  });

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

  wss.on('connection', (ws) => {
    console.log('Web Socket Connection On');

    routes({ app, ws });
  });

  app.listen(port, (err) => {
    if (err) {
      throw err;
    }

    console.log(`Started on port: ${port}`);
  });
})({
  app: Express(),
  port: 3080,
  websockets: {
    port: 8080,
  },
});
