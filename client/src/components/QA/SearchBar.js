import React, {useState, useEffect} from 'react';

const SearchBar = ({questions, filteredQuestions, setFilteredQuestions}) => {
  const [searchInput, setSearchInput] = useState('Have Questions? Search for answers...');

  useEffect( () => {
    filterQuestions();
  }, [searchInput]);

  const filterQuestions = () => {
    (searchInput.length >= 3 && searchInput !== 'Have Questions? Search for answers...') ?
    setFilteredQuestions(questions.filter(({question_body}) => question_body.includes(searchInput))) :
    setFilteredQuestions(null);
  };

  return (
    <div className="search">
      <input value={searchInput} onChange={(event) => setSearchInput(event.target.value)}
      onClick={() => setSearchInput('')}/>
    </div>
  );

};

export default SearchBar;
