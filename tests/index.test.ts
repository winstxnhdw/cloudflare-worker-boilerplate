import { describe } from 'bun:test';
import { treaty } from '@elysiajs/eden';
import { app } from '@/app';

function create_app() {
  const api = app({});

  return treaty(api);
}

describe('worker', () => {
  const api = create_app();
});
