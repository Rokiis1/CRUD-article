import { Article } from "../../interfaces/Record";
import { ListItemProps } from "../../interfaces/Page";

type Props = ListItemProps<Article>;

const ArticleListItem: React.FC<Props> = ({ record }) => {
  return (
    <div>
      <p>{record.title}</p>
      <p>By {record.author?.name || "Unkown"}</p>
    </div>
  );
};

export default ArticleListItem;
