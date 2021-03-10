import React, {useState, useEffect} from 'react';
import SearchBar from "material-ui-search-bar";

const style = {
  color:  'rgba(77,100,154,1)'
}

const Search = ({questions, filteredQuestions, setFilteredQuestions, setCount}) => {
  const [searchInput, setSearchInput] = useState('Have Questions? Search for answers...');

  useEffect( () => {
    filterQuestions();
  }, [searchInput]);

  const filterQuestions = () => {
    (searchInput.length >= 3 && searchInput !== 'Have Questions? Search for answers...') ?
    setFilteredQuestions(questions.filter(({question_body}) => question_body.toLowerCase().includes(searchInput.toLowerCase()))) :
    setFilteredQuestions(null);
    setCount(2);
  };

  return (
    <SearchBar
    className="QA-SearchBar" style={style} value={searchInput} onChange={(value) => setSearchInput(value)}
    onClick={() => setSearchInput('')}/>
  );

};

export default Search;

