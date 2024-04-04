import parse from "html-react-parser";
import { Video } from "./Video";
import Audio from "./Audio";

type Props = {
  type: "video" | "text" | "audio";
  text: string;
  mediaUrl: string;
};

const Contents = ({ type, text, mediaUrl }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {type === "audio" && <Audio src={mediaUrl} />}
      {type === "video" && <Video src={mediaUrl} />}
      <div>{parse(text)}</div>
    </div>
  );
};

export default Contents;
