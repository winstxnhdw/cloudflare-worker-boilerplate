import { env } from 'cloudflare:workers';
import { Elysia } from 'elysia';
import { CloudflareAdapter } from 'elysia/adapter/cloudflare-worker';
import { app } from '@/app';
import type { Bindings } from '@/types';

export default new Elysia({ adapter: CloudflareAdapter }).use(app(env as Bindings)).compile();
