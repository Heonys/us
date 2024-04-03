import { getPostsByPage } from "@/api/post";
import { Posts } from "@/types";
import { useQuery } from "@tanstack/react-query";

const usePostsQuery = (page: number) => {
  const postsQuery = useQuery<Posts>({
    queryKey: ["posts", page],
    queryFn: () => getPostsByPage(page),
  });

  return { postsQuery };
};

export default usePostsQuery;
