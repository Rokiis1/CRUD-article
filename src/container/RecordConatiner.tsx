import { useEffect } from "react";
import { Record } from "../interfaces/Record";
import { RecordMutationsProps } from "../interfaces/Page";
import RecordEdit from "../components/record/RecordEdit";
import RecordNew from "../components/record/RecordNew";
import { useMutation } from "../middleware/requests/useMutation";
import { Status } from "../layouts/Status";
import { RecordError } from "../layouts/Error";

const RecordConatiner = <T extends Record>({
  FormFields,
  activeRecord,
  apiPath,
  callback,
}: RecordMutationsProps<T>) => {
  const { create, update, remove, processing, success, error, setError } =
    useMutation<T>(apiPath, callback);

  useEffect(() => {
    if (activeRecord.id) {
      setError(undefined);
    }
  }, [activeRecord, setError]);

  return (
    <div>
      {error && <RecordError error={error} />}
      {activeRecord.id ? (
        <RecordEdit<T>
          FormFields={FormFields}
          activeRecord={activeRecord}
          update={update}
          remove={remove}
          success={success}
        />
      ) : (
        <RecordNew<T>
          FormFields={FormFields}
          activeRecord={activeRecord}
          create={create}
          success={success}
        />
      )}
      {processing && <Status text="Processing..." />}
    </div>
  );
};

export default RecordConatiner;
