import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url: string, initialData: []) => {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState('');

  useEffect(() => {
    const dataFunction = async () => {
      try {
        const { data } = await axios.get(url);
        if (data) setData(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
    };
    dataFunction();
    setData(data);
  }, [url]);

  return { data, error };
};

export default useFetch;
