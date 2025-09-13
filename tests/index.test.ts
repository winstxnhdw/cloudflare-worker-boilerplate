import { app } from '@/app';
import { treaty } from '@elysiajs/eden';
import { describe } from 'bun:test';

function create_app() {
  const api = app({});

  return treaty(api);
}

describe('worker', () => {
  const api = create_app();
});
