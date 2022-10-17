import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { Record } from "../../interfaces/Record";

export const useFetch = <T extends Record>(path: string, options?: {}) => {
  const [records, setRecords] = useState<T[]>([]);
  const [version, setVersion] = useState(+new Date());
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError>();

  const BASE_URL = import.meta.env.VITE_API;

  const url = `${BASE_URL}/${path}`;

  useEffect(() => {
    const callFetchFunction = async () => {
      setLoading(true);
      try {
        const res = await axios.get<T[]>(url, { params: options });
        setRecords(res.data);
      } catch (e) {
        setError(e as AxiosError);
      }
      setLoading(false);
    };
    callFetchFunction();
  }, [url, options, version]);

  return { records, setVersion, loading, error };
};
