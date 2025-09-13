import { cors } from '@elysiajs/cors';
import { openapi } from '@elysiajs/openapi';
import { Elysia } from 'elysia';
import type { Bindings } from '@/types';

export function app(env: Bindings) {
  const openapiDocumentationRoute = '/openapi.json';
  const scalarPlugin = openapi({
    path: '/schema/scalar',
    scalar: { url: openapiDocumentationRoute },
    specPath: openapiDocumentationRoute,
    documentation: {
      info: {
        title: 'worker',
        version: '1.0.0',
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
    },
  });

  return new Elysia({ normalize: false, aot: false }).decorate('env', env).use(scalarPlugin).use(cors());
}
