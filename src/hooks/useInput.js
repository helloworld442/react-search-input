import { useEffect, useState } from "react";
import getRequestMethodHandler from "../api/api";
const useInput = (input) => {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const inputData = await getRequestMethodHandler;
      return setResponse(inputData.data);
    };
    fetchData();
  }, []);
  return [response, useInput];
};

export default useInput;
