import { useState, useEffect, useCallback } from "react";
import instance from "lib/instance";

export default function useCountries(regionSelect) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ status: false, message: "" });

  const fetchData = useCallback(async (region) => {
    let URL = "/v3.1/all";
    if (region !== "") {
      URL = `/v3.1/region/${region}`;
    }

    try {
      setLoading(true);
      const res = await instance.fetcher(URL);
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
    fetchData(regionSelect);
  }, [fetchData, regionSelect]);

  return { data, loading, error };
}
