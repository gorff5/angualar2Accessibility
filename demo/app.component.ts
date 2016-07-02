import { Component } from '@angular/core';

import { accessibilityComponent } from './accessibility.component/accessibility.component';


@Component({
    selector: 'my-app',
    template: `<h1>hello dima</h1>
                <at-accessibility></at-accessibility>`,
    directives: [accessibilityComponent]
})

export class AppComponent { }