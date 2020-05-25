import { useState, useEffect } from "react";
import axios from "axios";
export function useFetch(id) {
  const [response, setResponse] = useState();

  useEffect(() => {
    if (id !== undefined) {
      axios.get(`http://localhost:4000/posts/${id}`).then((result) => {
        setResponse(result.data);
      });
    }
  }, [id]);

  return { response };
}
