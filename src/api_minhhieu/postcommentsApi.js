import { useQuery } from 'react-query';
import { COMMENT_LIST_BY_POST } from '../../utils/api_minhhieu';
import axios from 'axios';

const fetchPostComments = async (postId) => {
  const result = await axios.get(COMMENT_LIST_BY_POST,
  {
      params: {
          post:postId
      }
  });

  return result;
}

export const usePostComments = (postId) => {
  return useQuery(['post-comments', postId], () => fetchPostComments(postId));
}