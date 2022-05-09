import { BASE_URL_API } from "../api";

const BLOG_LIST = BASE_URL_API + '/wp-json/wp/v2/posts';
const BlOG_LIST_CATEGORY = BASE_URL_API + '/wp-json/wp/v2/posts?categories';

export { BLOG_LIST, BlOG_LIST_CATEGORY };