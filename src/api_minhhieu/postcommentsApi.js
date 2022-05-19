import { useQuery, useInfiniteQuery, useMutation, useQueryClient } from 'react-query';
import { COMMENT, CREATE_COMMENT } from '../../utils/api_minhhieu';
import axios from 'axios';

const fetchPostComments = async ({postId, pageParam = 1}) => {
  const result = await axios.get(COMMENT,
  {
      params: {
        post:postId,
        page:pageParam,
        per_page:4
      }
  });

  return result;
}

const addComment = (commentInfo) => {
  return axios.post(
    CREATE_COMMENT,
    null,
    {
      params: commentInfo
    }
  )
}

export const usePostComments = ({postId}) => {
  return useInfiniteQuery(
    ['post-comments',postId], 
    fetchPostComments,
    {
      getNextPageParam: (_lastPage, pages) => {
        const isNotAllFetched = pages[pages.length*1 - 1].data.length === 4;
        if (isNotAllFetched) {
          return pages.length + 1;
        } else {
          return undefined;
        }
      }
    }
  );
}

export const useAddPostComment = () => {
  const queryClient = useQueryClient();
  return useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('post-comments');
    }
  })
}