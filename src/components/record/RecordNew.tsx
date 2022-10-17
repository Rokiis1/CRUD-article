import { Record } from "../../interfaces/Record";
import { RecordNewProps } from "../../interfaces/Page";
import RecordForm from "./RecordForm";

const RecordNew = <T extends Record>({
  FormFields,
  activeRecord,
  create,
  success,
}: RecordNewProps<T>) => {
  return (
    <div className="new">
      <h2>New</h2>
      <RecordForm
        FormFields={FormFields}
        activeRecord={activeRecord}
        submitAction={create}
        success={success}
      />
    </div>
  );
};

export default RecordNew;
