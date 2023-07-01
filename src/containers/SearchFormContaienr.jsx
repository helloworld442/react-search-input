import { useCallback, useEffect, useState } from "react";
import SearchForm from "../components/search/SearchForm";
import getRequestDataHandler from "../api/api";
import _ from "lodash";
const SearchFormContainer = ({ article }) => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState(null);

  // debouncing 처리
  const handleSearchText = useCallback(
    _.debounce((text) => setTitle(text), 500),
    []
  );

  const onChangeHandler = (e) => handleSearchText(e.target.value);
  const onSubmitHandler = (e) => e.preventDefault();

  useEffect(() => {
    getRequestDataHandler(title, article)
      .then((res) => setData(res.data.documents))
      .catch((e) => setData(null));
  }, [title, article]);

  return (
    <SearchForm
      data={data}
      onChange={onChangeHandler}
      onSubmit={onSubmitHandler}
    />
  );
};

export default SearchFormContainer;
