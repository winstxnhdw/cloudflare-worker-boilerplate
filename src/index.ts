import { cors } from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger';
import { Elysia } from 'elysia';

function main() {
  const swagger_plugin = swagger({
    path: '/scalar/docs',
    documentation: {
      info: {
        title: 'Worker',
        version: '1.0.0',
      },
    },
  });

  const app = new Elysia().use(swagger_plugin);

  app.use(cors());

  return app;
}

export default main();
