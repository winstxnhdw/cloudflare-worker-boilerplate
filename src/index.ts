import { env } from 'cloudflare:workers';
import { Elysia } from 'elysia';
import { CloudflareAdapter } from 'elysia/adapter/cloudflare-worker';
import { app } from '@/app';

export default new Elysia({ adapter: CloudflareAdapter }).use(app(env)).compile();
