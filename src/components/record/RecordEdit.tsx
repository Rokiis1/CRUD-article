import { Record } from "../../interfaces/Record";
import { RecordEditProps } from "../../interfaces/Page";
import RecordForm from "./RecordForm";

const RecordEdit = <T extends Record>({
  FormFields,
  activeRecord,
  update,
  remove,
  success,
}: RecordEditProps<T>) => {
  return (
    <div>
      <button onClick={() => remove(activeRecord)}>Remove</button>
      <h2>Edit</h2>
      <RecordForm
        FormFields={FormFields}
        activeRecord={activeRecord}
        submitAction={update}
        success={success}
      />
    </div>
  );
};

export default RecordEdit;
