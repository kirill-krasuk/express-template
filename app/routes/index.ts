import express       from 'express';

import friendsRouter from './friends';
import helloRouter   from './hello';

const routing = express();

routing.use('/friends', friendsRouter);
routing.use('/hello', helloRouter);

export default routing;
