import { useFetch, useCounter} from '../hooks'
import { LoadingQuote, Quote } from '../03-examples';

export const Layout = () => {

    const {counter,increment,reset} = useCounter();

  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const nextQuote = () => {
    increment(1);
    // if(counter>1) reset();
  }

  // console.log(data);

  const {author, quote} = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {isLoading ? 
        <LoadingQuote />
       : 
        <Quote author={author} quote={quote}/> 
      }

      <button disabled={isLoading} className="btn btn-primary" onClick={nextQuote}>
        Next quote
      </button>
    </>
  );
};
