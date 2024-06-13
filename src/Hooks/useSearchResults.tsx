import { useEffect, useState } from 'react';

const useSearchResults = (data: any[] | undefined, query: string | null) => {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const filteredResults = data?.filter((item: any) =>
      item?.toLowerCase()?.includes(query?.toLowerCase())
    ) ?? [];

    setResults(filteredResults);
    
    if(results?.length === 0 && query != null && query?.length > 1 ){
    }
  }, [query]);

  return results;
};

export default useSearchResults;


