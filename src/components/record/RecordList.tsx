import { Record } from "../../interfaces/Record";
import { RecordListProps } from "../../interfaces/Page";
import { usePage } from "../../context/Page";
import { Status } from "../../layouts/Status";
import { RecordError } from "../../layouts/Error";

const RecordList = <T extends Record>({
  ListItem,
  records,
  emptyRecord,
  activeRecord,
  setActiveRecord,
  loading,
  error,
}: RecordListProps<T>) => {
  const { page } = usePage();

  return (
    <div className="list">
      {error && <RecordError error={error} />}
      <div>
        <h2>{page}</h2>
        <button className="bt-new" onClick={() => setActiveRecord(emptyRecord)}>
          New
        </button>
        <ul>
          {records.map((record) => (
            <li
              key={record.id}
              className={record.id === activeRecord?.id ? "active" : ""}
              onClick={() => setActiveRecord(record)}
            >
              <ListItem record={record} />
            </li>
          ))}
        </ul>
      </div>
      {loading && <Status text="Loading..." />}
    </div>
  );
};

export default RecordList;
