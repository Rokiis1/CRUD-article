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
    <div className="flex text-black">
      <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
        <FormFields formState={formState} handleChange={handleChange} />
        <button
          className=" mt-5 bg-blue-600 hover:bg-blue-900 text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RecordForm;
