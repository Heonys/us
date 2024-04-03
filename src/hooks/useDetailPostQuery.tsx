import { getDetailPostById } from "@/api/post";
import { useQuery } from "@tanstack/react-query";

const useDetailPostQuery = () => {
  const postsQuery = useQuery({
    queryKey: [""],
    queryFn: () => getDetailPostById("afeq4igf5gou2i2"),
  });

  return { postsQuery };
};

export default useDetailPostQuery;
