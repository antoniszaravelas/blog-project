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
  //   let subtitle: any;

  //   modal
  const [modalIsOpen, setIsOpen] = useState(false);
  // modal

  const handleClick = () => {
    onClick(inputValue);
  };

  const handleModal = () => {
    setIsOpen(true);
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //  subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

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

        <Button
          onClick={handleModal}
          className="rounded-sm ml-2 px-2"
          text="Create Post"
        >
          <FontAwesomeIcon className="mr-2" icon={faPlus} />
        </Button>
      </div>

      <ModalComponent
        modalIsOpen={modalIsOpen}
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}
      />
    </div>
  );
};

export default SearchBar;
