import { Author } from "../../interfaces/Record";
import { ListItemProps } from "../../interfaces/Page";

type Props = ListItemProps<Author>;

const AuthorListItem: React.FC<Props> = ({ record }) => {
  return <div className="title">{record.name}</div>;
};

export default AuthorListItem;
