import { useQuery } from 'react-query';
import { BLOG_LIST } from '../../utils/api_minhhieu';
import axios from 'axios';

const fetchDetailPost = async (postId) => {

    const result = await axios.get(BLOG_LIST + '414' + '?_embed');
  
    return result;
}
  
export const useDetailPost = (postId) => {
    return useQuery(['detail-post', postId], () => fetchDetailPost(postId))
}