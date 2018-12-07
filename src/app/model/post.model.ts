import { Guid } from './guid.model';
import { Title } from './title.model';
import { Content } from './content.model';
import { Excerpt } from './excerpt.model';
import { Links } from './links.model';
import { CATEGORIES } from './category.model';

export class Post {
    id: number;
    date: string;
    date_gmt: string;
    guid: Guid;
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: Title;
    content: Content;
    excerpt: Excerpt;
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta;
    categories;
    categoriesString;
    tags;
    links: Links;
    mediaLink;

    constructor(obj: any = {}) {
        this.id = obj.id;
        this.date = obj.date;
        this.date_gmt = obj.date_gmt;
        this.guid = new Guid(obj.guid);
        this.modified = obj.modified;
        this.modified_gmt = obj.modified_gmt;
        this.slug = obj.slug;
        this.status = obj.status;
        this.type = obj.type;
        this.title = new Title(obj.title);
        this.content = new Content(obj.content);
        this.excerpt = new Excerpt(obj.excerpt);
        this.author = obj.author;
        this.featured_media = obj.featured_media;
        this.comment_status = obj.comment_status;
        this.ping_status = obj.ping_status;
        this.sticky = obj.sticky;
        this.template = obj.template;
        this.format = obj.format;
        this.meta = obj.meta;
        this.categories = obj.categories;
        this.tags = obj.tags;
        this.links = obj.links;

        this.setPostCategoriesString();
        // this.setMediaLink();
    }

    setPostCategoriesString() {
        if (this.categories) {
            let categoriesString = '';
            this.categories.forEach(category => {
                const findCategory = CATEGORIES.find(element => element.value === category);
                if (findCategory) {
                if (categoriesString !== '') {
                    categoriesString += ', ';
                }
                categoriesString += findCategory.name;
                }
            });
            this.categoriesString = categoriesString;
        }
    }

    setMediaLink() {
        if (this.featured_media) {
            this.mediaLink = 'http://www.bendre.admedia-technologies.com/wp-json/wp/v2/media/' + this.featured_media;
        }
    }
}
