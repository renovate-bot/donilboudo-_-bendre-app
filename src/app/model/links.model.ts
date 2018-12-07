import { Author } from './author.model';

export class Links {
    self;
    collection;
    about;
    author;
    replies;
    versionHistory;
    predecessorVersion;
    wpAttachment;
    wpTerm;
    curies;

    constructor(obj: any = {}) {
        this.self = obj.self;
        this.collection = obj.collection;
        this.about = obj.about;
        this.author = new Author(obj.author);
        this.replies = obj.replies;
        this.versionHistory = obj.versionHistory;
        this.predecessorVersion = obj.predecessorVersion;
        this.wpAttachment = obj.wpAttachment;
        this.wpTerm = obj.wpTerm;
        this.curies = obj.curies;
    }
}
