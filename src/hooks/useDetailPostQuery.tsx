import { getDetailPostById } from "@/api/post";
import { Item } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

const useDetailPostQuery = (id: string) => {
  const { data: session } = useSession();

  const postsQuery = useQuery<Item>({
    enabled: !!session,
    queryKey: ["post", id],
    queryFn: () => getDetailPostById(id, session!.accessToken),
  });

  return { postsQuery };
};

export default useDetailPostQuery;
