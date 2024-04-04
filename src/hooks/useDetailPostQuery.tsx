import { getDetailPostById } from "@/api/post";
import { Item } from "@/types";
import { useQuery } from "@tanstack/react-query";

const useDetailPostQuery = (id: string) => {
  const postsQuery = useQuery<Item>({
    queryKey: ["post", id],
    queryFn: () => getDetailPostById(id),
  });

  return { postsQuery };
};

export default useDetailPostQuery;
