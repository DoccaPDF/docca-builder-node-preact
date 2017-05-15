import express from 'express';
import bodyParser from 'body-parser';
import requestLogger from 'bunyan-request-logger';
import bunyan from 'bunyan';
import Copin from 'copin';

import initRoutes from './routes';
import stripeRoutes from './routes/stripe';
import initTestRoutes from './routes/test-routes';

const config = Copin();
const apiUrl = config.get('docca.api_url').replace(/\/+$/, '');
const apiKey = config.get('docca.api_key');

const serverName = config.get('server.name');

const log = bunyan.createLogger({
  name: serverName,
  level: config.get('server.log_level')
});
const requestLog = requestLogger({ name: `${serverName}-request` });

function startExpress (app) {
  const serverPort = config.get('server.port');
  app.listen(serverPort, () => log.info(`listening at ${serverPort}`));
}

const app = express();
app.enable('trust proxy');
app.use(requestLog.requestLogger());
app.use(bodyParser.json({ limit: config.get('express.json_body_parser.limit') }));

initRoutes({ app, log, apiUrl, apiKey });
stripeRoutes({ app, log, apiUrl, apiKey });
initTestRoutes({ app, log, apiUrl, apiKey });

startExpress(app);
