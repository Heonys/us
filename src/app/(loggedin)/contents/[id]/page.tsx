"use client";
import useDetailPostQuery from "@/hooks/useDetailPostQuery";

type Props = {
  params: {
    id: string;
  };
};

const ContentsPage = ({ params: { id } }: Props) => {
  const {
    postsQuery: { data: post },
  } = useDetailPostQuery(id);

  console.log(post);

  return <div>{id}</div>;
};

export default ContentsPage;
