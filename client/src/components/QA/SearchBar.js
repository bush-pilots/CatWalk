/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import SearchBar from 'material-ui-search-bar';

const Search = ({ questions, setFilteredQuestions, setCount }) => {
  const [searchInput, setSearchInput] = useState('');

  const filterQuestions = () => {
    (searchInput.length >= 3 && searchInput !== 'Have Questions? Search for answers...')
      ? setFilteredQuestions(questions.filter(({question_body}) => question_body.toLowerCase().includes(searchInput.toLowerCase())))
      : setFilteredQuestions(null);
    setCount(2);
  };

  useEffect(() => {
    filterQuestions();
  }, [searchInput]);

  return (
    <SearchBar
      className="QA-SearchBar"
      placeholder="Have Questions? Search for answers..."
      value={searchInput}
      onChange={(value) => setSearchInput(value)}
      onClick={() => setSearchInput('')}
    />
  );
};

export default Search;
