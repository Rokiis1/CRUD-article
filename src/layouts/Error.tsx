import { AxiosError } from "axios";
import { ValidationError } from "class-validator";

interface Props {
  error: AxiosError<any>;
}

export const RecordError: React.FC<Props> = ({ error }) => {
  const validationErrors = error?.response?.data
    ?.validation as ValidationError[];

  return (
    <div>
      <div>
        <b>Message:</b> {error.message}
      </div>
      <div>
        <b>URL:</b> {error.config?.url}
      </div>
      {error.response?.data.message && (
        <div>
          <b>Details:</b> {error.response?.data.message}
        </div>
      )}
      {validationErrors &&
        validationErrors.map((error, errorKey) => (
          <ul key={errorKey}>
            {error.constraints &&
              Object.values(error.constraints).map(
                (constraint, constraintKey) => (
                  <li key={constraintKey}>{constraint}</li>
                )
              )}
          </ul>
        ))}
    </div>
  );
};
