import { useState } from 'react';
import Button from './Button';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-modal';
import ModalComponent from './Modal';

interface SearchBarProps {
  onClick: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onClick }) => {
  const [inputValue, setInputValue] = useState<string>('');
  Modal.setAppElement(document.getElementById('modal')!);

  const [modalIsOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    onClick(inputValue);
    setInputValue('');
  };

  const handleModal = () => {
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="flex flex-col w-100 md:w-1/2 mt-0 mb-10 mx-auto">
      <label
        htmlFor="searchPost"
        className="text-gray-400 mb-2 md:mb-0 text-xl"
      >
        Search Term:
      </label>
      <div className="flex flex-col md:flex-row">
        <input
          name="searchPost"
          className="md:mr-3 mb-3 md:mb-0 tracking-wider rounded-sm bg-gray-500 text-white py-1 pl-3  text-lg  border-none focus:outline-none md:w-1/2"
          type="search"
          placeholder="search by title..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          onClick={handleClick}
          className="rounded-sm px-2 mb-3 md:mb-0  py-2 md:py-0 "
          text="Search"
        ></Button>

        <Button
          onClick={handleModal}
          className="rounded-sm md:ml-2 px-2 py-2 md:py-0 mb-3 md:mb-0"
          text="Create Post"
        >
          <FontAwesomeIcon className="mr-2" icon={faPlus} />
        </Button>
      </div>

      <ModalComponent modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
};

export default SearchBar;
