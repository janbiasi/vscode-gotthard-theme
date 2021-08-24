const x: string = 10 as any;

function WeirdDecorator(target: any) {}

function OtherWeirdDecorator(name: string) {
    return (target: any) => {};
}

/**
 * @see https://google.com
 */
@WeirdDecorator
@OtherWeirdDecorator('test')
export class MyService {
    protected someThingElse: string[] = ['test'];

    private url: string = '';

    constructor() {
        this.doCallService('/api/v1/test');
    }

    public doCallService(endpoint: string): Record<any, unknown> {
        return {
            0: this.url,
            1: endpoint,
            2: 'hello there!',
            someTest: 'hey!',
            [endpoint]: endpoint,
        };
    }
}

export const myObjArray = [
    {
        name: 'hello there!',
        number: x,
    },
    {
        name: 'max',
        number: [x, x, 10],
    },
];
