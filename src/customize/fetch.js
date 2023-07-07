import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  
   useEffect(() => {
    try {
      async function fetchApi() {
        let res = await axios.get(url);
        let data =
          res && res.data && res.data.locations ? res.data.locations : [];
        // data = data.reverse()
        setData(data);
        setIsLoading(false);
        setIsError(false);
      }
      fetchApi();
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  }, [url]);
  return {
    data, isLoading, isError
  }
};

export default useFetch;
