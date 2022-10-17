import { useState } from "react";
import { Action } from "../middleware/requests/useMutation";

export type ChangeElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

export const useForm = <T>(initialState: T, handleAction: Action<T>) => {
  const [formState, setFormState] = useState<T>(initialState);

  const handleChange = (event: React.ChangeEvent<ChangeElement>): void => {
    const { tagName, name, value } = event.target;
    const parsedValue = tagName === "SELECT" && value === "" ? null : value;
    setFormState({ ...formState, [name]: parsedValue });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    handleAction(formState);
  };

  return { formState, setFormState, handleChange, handleSubmit };
};
