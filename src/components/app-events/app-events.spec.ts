import { render } from '@stencil/core/testing';
import { AppEvents } from './app-events';

describe('app', () => {
  it('should build', () => {
    expect(new AppEvents()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppEvents],
        html: '<app-events></app-events>'
      });
    });
  });
});