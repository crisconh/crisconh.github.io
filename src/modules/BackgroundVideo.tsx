interface Props {
  source: string;
  clase: string;
}

export const BackgroundVideo = ({ source, clase }: Props) => {
  return (
    <video className={clase} width="auto" height="auto" autoPlay loop playsInline muted>
      <source src={source} type="video/mp4" />
    </video>
  );
};
