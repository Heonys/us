"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import usePostsQuery from "@/hooks/usePostsQuery";
import ContentCard from "../_components/ContentCard";
import LoadingSpinner from "@/components/LoadingSpinner";

const HomePage = () => {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1");

  const {
    postsQuery: { data: posts },
  } = usePostsQuery(page);

  if (!posts) return <LoadingSpinner />;

  return (
    <div className="flex flex-col items-center gap-3">
      <ul className="space-y-[40px]">
        {posts.items.map((post) => {
          return (
            <ContentCard
              key={post.id}
              id={post.id}
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

      <ul className="join py-4">
        {Array.from({ length: posts.totalPages }, (_, i) => i + 1).map((v) => {
          return (
            <Link
              key={v}
              href={`/home?page=${v}`}
              className={`join-item btn ${v === page ? "btn-active" : ""}`}
            >
              {v}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;
