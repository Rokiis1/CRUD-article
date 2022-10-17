import { useState } from "react";
import { Record } from "../interfaces/Record";
import { RecordIndexProps } from "../interfaces/Page";
import { useFetch } from "../middleware/requests/useFetch";
import RecordList from "../components/record/RecordList";
import RecordConatiner from "../container/RecordConatiner";

const RecordPage = <T extends Record>({
  apiPath,
  apiOptions,
  ListItem,
  FormFields,
  emptyRecord,
}: RecordIndexProps<T>) => {
  const [activeRecord, setActiveRecord] = useState<T>(emptyRecord);
  const { records, setVersion, loading, error } = useFetch<T>(
    apiPath,
    apiOptions
  );

  const callback = () => {
    setVersion(+new Date());
    setActiveRecord(emptyRecord);
  };
  return (
    <div className="page">
      <div className="content">
        <RecordList<T>
          ListItem={ListItem}
          records={records}
          emptyRecord={emptyRecord}
          activeRecord={activeRecord}
          setActiveRecord={setActiveRecord}
          loading={loading}
          error={error}
        />
        <RecordConatiner<T>
          FormFields={FormFields}
          activeRecord={activeRecord}
          apiPath={apiPath}
          callback={callback}
        />
      </div>
    </div>
  );
};

export default RecordPage;
