import { useEffect } from "react";
import { Record } from "../../interfaces/Record";
import { RecordFormProps } from "../../interfaces/Page";
import { useForm } from "../../hooks/useFrom";

const RecordForm = <T extends Record>({
  FormFields,
  activeRecord,
  submitAction,
  success,
}: RecordFormProps<T>) => {
  const { formState, setFormState, handleChange, handleSubmit } = useForm<T>(
    activeRecord,
    submitAction
  );

  useEffect(() => {
    if (activeRecord.id || success) {
      setFormState(activeRecord);
    }
  }, [setFormState, activeRecord, success]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormFields formState={formState} handleChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default RecordForm;
