import React, {useState, useEffect} from 'react';

const SearchBar = ({questions, filteredQuestions, setFilteredQuestions}) => {
  const [searchInput, setSearchInput] = useState('Have Questions? Search for answers...');

  useEffect( () => {
    filterQuestions();
  }, [searchInput]);

  const filterQuestions = () => {
    console.log('holla');
    if (searchInput.length >= 3 && searchInput !== 'Have Questions? Search for answers...') {
      setFilteredQuestions(questions.filter(q => q.question_body.includes(searchInput)));
    } else {
      setFilteredQuestions(null);
    }
  };

  return (
    <div className="search">
      <input value={searchInput} onChange={(event) => setSearchInput(event.target.value)} onClick={() => setSearchInput('')}/>
    </div>
  );

};

export default SearchBar;
