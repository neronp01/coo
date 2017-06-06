
import { ElementFinder } from 'protractor';

import { reactiveComponent } from './reactive.component';

describe('reactive: ', () => {
    describe('Events and Lifecycle', () => {
        beforeEach(() => {
            this.instance = new reactiveComponent();
        });

        it('Properties are defined', () => {
            // TODO
        });
    });
});
