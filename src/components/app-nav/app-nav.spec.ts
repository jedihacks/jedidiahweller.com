import { render } from '@stencil/core/testing';
import { AppNav } from './app-nav';

describe('app-nav', () => {
    it('should build', () => {
        expect(new AppNav()).toBeTruthy();
    });

    describe('rendering', () => {
        beforeEach(async () => {
            await render({
                components: [AppNav],
                html: '<app-nav></app-nav>'
            });
        });
    });
});