export class User {
    id: number;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    email: string;
    url: string;
    description: string;
    link: string;
    locale: string;
    nickname: string;
    slug: string;
    registered_date;
    roles;
    password: string;
    capabilities;
    extra_capabilities;
    avatar_urls;
    meta;

    constructor(obj: any = {}) {
        this.id = obj.id;
        this.username = obj.username;
        this.name = obj.name;
        this.first_name = obj.first_name;
        this.last_name = obj.last_name;
        this.email = obj.email;
        this.url = obj.url;
        this.description = obj.description;
        this.link = obj.link;
        this.locale = obj.locale;
        this.nickname = obj.nickname;
        this.slug = obj.slug;
        this.registered_date = obj.registered_date;
        this.roles = obj.roles;
        this.password = obj.password;
        this.capabilities = obj.capabilities;
        this.extra_capabilities = obj.extra_capabilities;
        this.avatar_urls = obj.avatar_urls;
        this.meta = obj.meta;
    }
}
