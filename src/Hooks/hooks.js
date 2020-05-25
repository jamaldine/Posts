import { useState, useEffect } from "react";
export function useFetch(id, getPost) {
  const [response, setResponse] = useState();

  useEffect(() => {
    if (id !== undefined) {
      getPost(id);
    }
  }, [id, getPost]);

  return { response };
}
