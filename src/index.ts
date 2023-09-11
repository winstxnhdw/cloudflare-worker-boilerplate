import { OpenAPIRouter } from '@cloudflare/itty-router-openapi'
import { createCors } from 'itty-router'

async function main(request: Request): Promise<Response> {
  return new Promise((resolve) => resolve(new Response(request.body, { status: 200 })))
}

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
router.get('/', main)
router.all('*', () => new Response('Not found!', { status: 404 }))

export default {
  fetch: async (request: Request, env: unknown, ctx: unknown) =>
    router.handle(request, env, ctx).catch(console.error).then(corsify)
}
