import { Author } from "../../interfaces/Record";
import { FormFieldsProps } from "../../interfaces/Page";

type Props = FormFieldsProps<Author>;

const AuthorFormFields: React.FC<Props> = ({ formState, handleChange }) => {
  return (
    <div>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default AuthorFormFields;
