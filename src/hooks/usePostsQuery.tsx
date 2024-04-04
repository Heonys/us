import { getPostsByPage } from "@/api/post";
import { Posts } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

const usePostsQuery = (page: number) => {
  const { data: session } = useSession();

  const postsQuery = useQuery<Posts>({
    enabled: !!session,
    queryKey: ["posts", page],
    queryFn: () => getPostsByPage(page, session!.accessToken),
  });

  return { postsQuery };
};

export default usePostsQuery;
