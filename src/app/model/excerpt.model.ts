export class Excerpt {
    rendered: string;
    protected: boolean;

    constructor(obj: any = {}) {
        this.rendered = obj.rendered;
        this.protected = obj.protected;
    }
}
