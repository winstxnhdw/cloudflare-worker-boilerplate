import { OpenAPIRouter } from '@cloudflare/itty-router-openapi'

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

router.get('/', main)
router.all('*', () => new Response('Not found!', { status: 404 }))

export default {
  fetch: router.handle
}
