import { useFetch } from "../../middleware/requests/useFetch";
import { FormFieldsProps } from "../../interfaces/Page";
import { Article, Author } from "../../interfaces/Record";

type Props = FormFieldsProps<Article>;

const ArticleFormFields: React.FC<Props> = ({ formState, handleChange }) => {
  const authorsFetch = useFetch<Author>("authors");
  return (
    <div className="flex flex-col gap-3 w-max ">
      <div className="flex flex-col">
        <label className="text-white">Title</label>
        <input
          type="text"
          name="title"
          value={formState.title}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-white">Text</label>
        <textarea
          name="text"
          value={formState.text}
          onChange={handleChange}
          rows={5}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-white">Author</label>
        <select
          name="author"
          value={formState.author ? formState.author.id : ""}
          onChange={handleChange}
        >
          <option value="">Select</option>
          {authorsFetch.records.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ArticleFormFields;
