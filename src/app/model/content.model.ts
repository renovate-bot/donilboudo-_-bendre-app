export class Content {
    rendered: string;
    protected: boolean;

    constructor(obj: any = {}) {
        this.rendered = obj.rendered;
        this.protected = obj.protected;
    }
}
