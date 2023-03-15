import { useState } from "react";
import useBookSearch from "./useBookSearch";

function App() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState("");
  const { loading, error, books, hasMore } = useBookSearch(query, pageNumber);
  function handleChange(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }
  return (
    <>
      <input type="text" onChange={handleChange} />
      {error && <div>Error</div>}
      {books.map((b) => <div key={b}>{b}</div>)}
      {hasMore && loading && <div>Loading...</div>}
    </>
  );
}

export default App;
