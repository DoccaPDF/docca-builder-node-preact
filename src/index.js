import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import requestLogger from 'bunyan-request-logger';
import bunyan from 'bunyan';
import Copin from 'copin';

import initRoutes from './routes';
import stripeRoutes from './routes/stripe';
import initTestRoutes from './routes/test-routes';

const config = Copin();
const apiUrl = config.get('docca.api_url').replace(/\/+$/, '');
const apiKey = config.get('docca.api_key');

const storage = multer.diskStorage({
  // destination: function (req, file, cb) {
  //   cb(null, '/tmp/my-uploads')
  // },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage });

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

initRoutes({ app, log, apiUrl, apiKey, upload });
stripeRoutes({ app, log, apiUrl, apiKey, upload });
initTestRoutes({ app, log, apiUrl, apiKey, upload });

startExpress(app);
