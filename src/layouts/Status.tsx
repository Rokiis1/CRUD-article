interface Props {
  text: string;
}

export const Status: React.FC<Props> = ({ text }) => {
  return (
    <div>
      <span>{text}</span>
    </div>
  );
};
