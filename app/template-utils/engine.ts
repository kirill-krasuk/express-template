import hbs                         from 'express-handlebars';

import { partialsDir, layoutsDir } from '@paths';
import helpers                     from './helpers';

export const template = hbs.create({
    layoutsDir,
    partialsDir,
    helpers,
    defaultLayout: 'layout',
    extname      : 'hbs'
});
