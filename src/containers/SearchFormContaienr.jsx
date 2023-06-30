import { useState } from "react";
import SearchForm from "../components/search/SearchForm";
import useInput from "../hooks/useInput";
const SearchFormContainer = () => {
  const [title, setTitle] = useState("");
  const [response, setResponse] = useInput();
  const onChangeHandler = (e) => setTitle(e.target.value);
  console.log(response);
  return <SearchForm title={title} onChange={onChangeHandler} />;
};

export default SearchFormContainer;
