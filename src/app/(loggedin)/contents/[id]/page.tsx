"use client";
import useDetailPostQuery from "@/hooks/useDetailPostQuery";
import Contents from "./_components/Contents";
import LoadingSpinner from "@/components/LoadingSpinner";
import NotFound from "./_components/NotFound";

type Props = {
  params: { id: string };
};

const ContentsPage = ({ params: { id } }: Props) => {
  const {
    postsQuery: { data: post, isError, isLoading },
  } = useDetailPostQuery(id);

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <NotFound />;

  return (
    <div className="flex flex-col items-center ">
      {post && (
        <>
          <div className="text-lg font-bold absolute top-[38px]">
            {post?.title}
          </div>
          <div className="max-w-screen-md mx-auto absolute top-[140px]">
            <Contents
              text={post.text}
              type={post.type}
              mediaUrl={post.mediaUrl}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ContentsPage;
