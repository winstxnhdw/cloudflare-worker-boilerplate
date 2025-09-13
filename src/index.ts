import { app } from '@/app';
import type { Bindings } from '@/types';

export default {
  fetch: (request: Request, env: Bindings) => app(env).handle(request),
};
