interface Props {
  text: string;
}

export const Status: React.FC<Props> = ({ text }) => {
  return (
    <div className="status">
      <span className="status-text">{text}</span>
    </div>
  );
};
