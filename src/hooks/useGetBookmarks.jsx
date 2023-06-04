import { useEffect, useState } from 'react';
import { getBookmarks } from '../service/firebase';

const useGetBookmarks = () => {
  const [dataset, setDataset] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const newData = await getBookmarks();
            setDataset(newData);
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
    };

    fetchData();
  }, []);

  return { dataset, loading, error };
};

export default useGetBookmarks;
