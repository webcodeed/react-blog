import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData(url) {
      try {
        const res = await fetch(url);
        const data = await res.json();

        setIsPending(false);
        setData(data);
      } catch (error) {
        setIsPending(false);
        setError(error.message);
      }
    }

    setTimeout(() => {
      fetchData(url);
    }, 1500);
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
