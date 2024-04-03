"use client";
import usePostsQuery from "@/hooks/usePostsQuery";
import ContentCard from "../_components/ContentCard";
import { useState } from "react";

const HomePage = () => {
  const [page, setPage] = useState(1);

  const {
    postsQuery: { data: posts },
  } = usePostsQuery(page);

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  if (!posts) return <div>로딩중</div>;

  return (
    <div className="flex flex-col items-center gap-3">
      <ul className="space-y-3">
        {posts.items.map((post) => {
          return (
            <ContentCard
              key={post.id}
              name={post.expand.author.name}
              job={post.expand.author.job}
              profileImage={post.expand.author.profileImage}
              updated={post.created}
              title={post.title}
              description={post.expand.news?.description}
            />
          );
        })}
      </ul>

      <div className="join py-4">
        {[1, 2, 3, 4, 5].map((v) => {
          return (
            <button
              key={v}
              className={`join-item btn ${v === page ? "btn-active" : ""}`}
              onClick={() => handlePageChange(v)}
            >
              {v}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
