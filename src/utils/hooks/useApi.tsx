import { useState, useEffect } from "react";
import HomeApi from "../apis/home.api";

export default function useApiHook({ url }: any): any {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function init() {
      try {
        await HomeApi.get(url)
          .then((response) => {
            if (isMounted) {
              setData(response.data);
            }
          })
          .catch((err) => {
            if (isMounted) {
              setError(err);
              console.log(err);
            }
          });
      } catch (e: any) {
        if (isMounted) {
          setError(e);
          console.log(e);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    init();
    return () => {
      isMounted = false;
    };
  }, []);

  return { data, error, loading };
}
