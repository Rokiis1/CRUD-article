import { Author } from "../interfaces/Record";
import AuthorListItem from "../components/author/AuthorListItem";
import AuthorFormFields from "../components/author/AuthorFormField";
import RecordPage from "./RecordPage";

const AuthorPage: React.FC = () => {
  const apiOptions = {};

  const emptyRecord = {
    name: "",
  };

  return (
    <RecordPage<Author>
      ListItem={AuthorListItem}
      apiPath="authors"
      apiOptions={apiOptions}
      FormFields={AuthorFormFields}
      emptyRecord={emptyRecord}
    />
  );
};

export default AuthorPage;
