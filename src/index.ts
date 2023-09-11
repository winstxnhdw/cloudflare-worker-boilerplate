import type { Environment } from '@/types'
import { OpenAPIRouter } from '@cloudflare/itty-router-openapi'
import { createCors } from 'itty-router'

async function controller(request: Request): Promise<Response> {
  return new Promise((resolve) => resolve(new Response(request.body, { status: 200 })))
}

async function main(request: Request, env: Environment, ctx: unknown) {
  const router = OpenAPIRouter({
    docs_url: '/docs',
    schema: {
      info: {
        title: 'worker',
        description: 'A worker',
        version: 'v1.0.0'
      }
    }
  })

  const { preflight, corsify } = createCors({
    methods: ['*'],
    origins: ['*']
  })

  router.all('*', preflight)
  router.get('/', controller)
  router.all('*', () => new Response('Not found!', { status: 404 }))

  return router.handle(request, env, ctx).catch(console.error).then(corsify)
}

export default {
  fetch: main
}
