import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

type Props = {
  src: string;
};

const Audio = ({ src }: Props) => {
  return (
    <AudioPlayer
      src={src}
      progressJumpSteps={{ backward: 10000, forward: 10000 }}
    />
  );
};

export default Audio;
