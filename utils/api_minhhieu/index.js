import { BASE_URL_API } from "../api";

const BLOG_LIST = BASE_URL_API + '/wp-json/wp/v2/posts/';
const BlOG_LIST_CATEGORY = BASE_URL_API + '/wp-json/wp/v2/posts?categories=';
const FEATURED_MEDIA = BASE_URL_API + '/wp-json/wp/v2/media/';
const POST_AUTHOR = BASE_URL_API + '/wp-json/wp/v2/users/';
const POST_COMMENT_LIST = BASE_URL_API + '/wp-json/wp/v2/comments?post=';
const COMMENT = BASE_URL_API + '/wp-json/wp/v2/comments/';
const COMMENT_LIST_BY_POST = BASE_URL_API + '/wp-json/wp/v2/comments?post=';
const CREATE_COMMENT = BASE_URL_API + '/api/respond/submit_comment/';

export { 
    BLOG_LIST, 
    BlOG_LIST_CATEGORY, 
    FEATURED_MEDIA, 
    POST_AUTHOR, 
    POST_COMMENT_LIST, 
    COMMENT, 
    COMMENT_LIST_BY_POST,
    CREATE_COMMENT 
};