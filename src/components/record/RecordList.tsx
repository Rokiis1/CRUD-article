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
    <div>
      {error && <RecordError error={error} />}
      <div>
        <h2 className="text-4xl text font-bold py-2">{page}</h2>
        <button
          className="py-1 px-5 my-3 bg-green-500 hover:bg-green-700"
          onClick={() => setActiveRecord(emptyRecord)}
        >
          New
        </button>
        <ul className="text-xl flex flex-col gap-5">
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
