import * as env from 'env-var';
import { config } from 'dotenv';

config();

export const PORT = env.get('PORT').asString();
export const URL = env.get('URL').asString();
