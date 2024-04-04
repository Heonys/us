type Props = {
  src: string;
};

export function Video({ src }: Props) {
  return (
    <video width="770" height="433" controls preload="none">
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
