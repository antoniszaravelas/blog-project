import { useState } from 'react';
import Button from './Button';

interface SearchBarProps {
  onClick: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onClick }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleClick = () => {
    onClick(inputValue);
  };

  return (
    <div className="flex flex-col w-1/2 mt-0 mb-10 mx-auto">
      <label htmlFor="searchPost" className="text-gray-400 text-xl">
        Search Term:
      </label>
      <div className="flex">
        <input
          name="searchPost"
          className="mr-3 tracking-wider rounded-sm bg-gray-500 text-white py-1 pl-3  text-lg  border-none focus:outline-none w-1/2"
          type="search"
          placeholder="search by title..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          onClick={handleClick}
          className="rounded-sm px-2"
          text="Search"
        ></Button>
      </div>
    </div>
  );
};

export default SearchBar;
