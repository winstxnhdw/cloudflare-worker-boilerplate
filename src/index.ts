import { env } from 'cloudflare:workers';
import { app } from '@/app';

export default app(env);
