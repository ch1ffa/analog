import { describe, it, expect } from 'vitest';
import { angular } from './angular-vite-plugin';

describe('angularVitePlugin', () => {
  it('should work', () => {
    expect(angular().name).toEqual('@analogjs/vite-plugin-angular');
  });
});
