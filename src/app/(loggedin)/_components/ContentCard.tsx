import Image from "next/image";
import Link from "next/link";
import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";
register("ko", koLocale);

type Props = {
  id: string;
  profileImage: string;
  name: string;
  job: string;
  updated: string;
  title: string;
  description?: string;
};

const ContentCard = ({
  id,
  profileImage,
  name,
  job,
  updated,
  title,
  description,
}: Props) => {
  return (
    <div className="w-[570px] border-1 shadow-md px-[35px] py-3 rounded-xl flex flex-col">
      <Link href={`/contents/${id}`} className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="avatar">
              <div className="w-[80px] mask mask-squircle">
                <Image
                  src={profileImage}
                  alt="profileImage"
                  width="80"
                  height="80"
                />
              </div>
            </div>
            <div className="flex flex-col justify-start">
              <div className="font-bold text-xl">{name}</div>
              <div>{job}</div>
            </div>
          </div>
          <div>{format(updated, "ko")}</div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-xl text-ellipsis">{title}</h1>
          <p className="textarea-md">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ContentCard;
