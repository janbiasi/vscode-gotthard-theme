import { Component, Input, Output, Inject, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-my-output',
    template: `
        <app-interval-dir (everySecond)="onEverySecond()" (everyFiveSeconds)="onEveryFiveSeconds()">
            <h1 [style.font-size.px]="size">{{ title }}</h1>
            <ng-content></ng-content>
        </app-interval-dir>
    `,
})
export class MyOutputComponent {
    @Input()
    public title: string;

    @Output()
    public newItemEvent = new EventEmitter<string>();

    constructor(@Inject(BROWSER_STORAGE) public storage: Storage) {
        this.onEverySecond();
        this.onEveryFiveSeconds();
    }

    private onEverySecond() {
        console.log('second');
    }

    private onEveryFiveSeconds() {
        console.log('five seconds');
    }
}
