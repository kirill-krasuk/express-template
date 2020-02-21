import 'module-alias/register';
import express, { Application } from 'express';

import config                   from '@config/index';
import { template }             from '@template-utils/engine';
import { assetsPath }           from './paths';
import routing                  from './routes';
import './template-utils';

const { port } = config;

const app: Application = express();

app.engine('hbs', template.engine);
app.set('view engine', 'hbs');

app.use('/public', express.static(assetsPath));

app.use(routing);

app.listen(port, () => {
    console.log(`Running at localhost:${ port }`);
});
