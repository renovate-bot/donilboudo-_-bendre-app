export class Author {
    embeddable: boolean;
    href: string;

    constructor(obj: any = {}) {
        this.embeddable = obj.embeddable;
        this.href = obj.href;
    }
}
