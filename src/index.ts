async function main(request: Request): Promise<Response> {
  return new Promise((resolve) => resolve(new Response(request.body, { status: 200 })))
}

export default {
  fetch: main
}
