const BASE_URL_API = 'https://voxohub.xyz/';

const GENERATE_AUTH_JWT = BASE_URL_API + 'wp-json/jwt-auth/v1/token';
const REGISTER_ACCOUNT = BASE_URL_API + 'wp-json/wp/v2/users';
const GET_CURRENT_USER = BASE_URL_API + 'api/user/get_currentuserinfo/';
const GET_NONE = BASE_URL_API + 'api/get_nonce/';

export { BASE_URL_API, GENERATE_AUTH_JWT, GET_CURRENT_USER, REGISTER_ACCOUNT, GET_NONE };
