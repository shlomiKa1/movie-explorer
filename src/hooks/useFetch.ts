import { useEffect, useState } from "react";

export function useFetch<T>(url: string, isLoading: boolean = true) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(isLoading);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isLoading) {
      setLoading(false);
      return;
    }

    let isCancelled = false;
    setLoading(true);
    setError(null);

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (!isCancelled) setData(data);
      })
      .catch((err) => {
        if (!isCancelled) setError(err.message);
      })
      .finally(() => {
        if (!isCancelled) setLoading(false);
      });

      return () => {isCancelled = true}
  }, [url, isLoading]);

  return { data, loading, error };
}
