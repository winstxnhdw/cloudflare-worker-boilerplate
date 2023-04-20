export default {
  async fetch(request: Request): Promise<Response> {
    return new Response(request.body, { status: 200 })
  }
}
