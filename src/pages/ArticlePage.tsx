import { Article } from "../interfaces/Record";
import RecordPage from "./RecordPage";
import ArticleListItem from "../components/article/ArticleListItem";
import ArticleFormFields from "../components/article/ArticleFormFields";

const ArticlePage: React.FC = () => {
  const apiOptions = { relations: ["author"] };

  const emptyRecord = {
    title: "",
    text: "",
  };

  return (
    <RecordPage<Article>
      ListItem={ArticleListItem}
      apiPath="articles"
      apiOptions={apiOptions}
      FormFields={ArticleFormFields}
      emptyRecord={emptyRecord}
    />
  );
};

export default ArticlePage;
