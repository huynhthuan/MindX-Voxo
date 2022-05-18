import { useQuery, useMutation, useQueryClient } from 'react-query';
import { COMMENT_LIST_BY_POST, CREATE_COMMENT } from '../../utils/api_minhhieu';
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

const addComment = (commentInfo) => {
  console.log(commentInfo);
  return axios.post(
    CREATE_COMMENT,
    null,
    {
      params: commentInfo
    }
  )
}

export const usePostComments = (postId) => {
  return useQuery(['post-comments', postId], () => fetchPostComments(postId));
}

export const useAddPostComment = () => {
  const queryClient = useQueryClient();
  return useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('post-comments');
    }
  })
}