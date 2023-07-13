import { useEffect,useState } from "react";

const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

      const abortCont = new AbortController();
        setTimeout(() => {
          fetch(url,{signal:abortCont.signal})
            .then((res) => {
              //console.log(res);
              if (!res.ok) {
                  throw Error('could not fetch products')
              }
              return res.json();
            })
            .then((data) => {
              //console.log(data);
              setData(data);
              setIsLoading(false);
              setError(null);
            })
            .catch(err => {
             if(err.name === 'AbortError') {
              console.log('fetched aborted')
             }else{
              setIsLoading(false);
              setError(err.message);
             }
            
            })
        }, 1000);

        //cleanup
        return  () => abortCont.abort();
      }, [url]);
      return { data, isLoading, error };
}

export default useFetch;