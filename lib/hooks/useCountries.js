import { useState, useEffect, useCallback } from "react";
import instance from "lib/instance";

export default function useCountries() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ status: false, message: "" });

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await instance.fetcher("/v3.1/all");
      const { data, status } = await res;
      if (status >= 400) {
        throw res;
      }
      setData(data);
    } catch (e) {
      setError({ status: true, message: e.data, code: e.status });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
}
