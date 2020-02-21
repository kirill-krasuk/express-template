import { getEnv } from '@utils/getEnv';

export default {
    env : getEnv('NODE_ENV', 'production'),
    port: getEnv('PORT', '3000')
};
