import { faClose, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-modal';
import { Title } from '../typography/Headings';

interface ModalComponentProps {
  modalIsOpen: boolean;
  afterOpenModal: () => void;
  closeModal: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  modalIsOpen,
  afterOpenModal,
  closeModal,
}) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#18181B',
      width: '70%',
      height: '70%',
    },
  };

  const modalInputStyle =
    ' tracking-wider rounded-sm bg-gray-500 text-white py-1 pl-3  text-sm  border-none focus:outline-none w-1/2';

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      closeTimeoutMS={200}
    >
      <form className="flex flex-col items-center modalForm">
        <Title>Make a Post</Title>
        <div>
          <label className="mr-2 text-white" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            maxLength={60}
            className={modalInputStyle}
          />
        </div>

        <div>
          <label className="mr-2 text-white" htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            id="username"
            maxLength={20}
            className={modalInputStyle}
          />
        </div>

        <div>
          <label className="mr-2 text-white" htmlFor="email">
            Email:
          </label>
          <input type="email" id="email" className={modalInputStyle} />
        </div>

        <div>
          <label className="mr-2 text-white" htmlFor="phone">
            Phone:
          </label>
          <input type="phone" id="phone" className={modalInputStyle} />
        </div>

        <div>
          <label className="mr-2 text-white" htmlFor="address">
            Address:
          </label>
          <input type="text" id="address" className={modalInputStyle} />
        </div>

        <div>
          <label className="mr-2 text-white" htmlFor="postTitle">
            Post Title:
          </label>
          <input type="text" id="postTitle" className={modalInputStyle} />
        </div>

        <div>
          <label className="mr-2 text-white" htmlFor="postContent">
            Post Content:
          </label>
          <input type="text" id="postContent" className={modalInputStyle} />
        </div>

        <div>
          <button className="bg-green-500 p-2 rounded">
            <FontAwesomeIcon size="lg" className="mr-2" icon={faPaperPlane} />
            Post It!
          </button>

          <button className="bg-red-500 p-2 rounded ml-6" onClick={closeModal}>
            <FontAwesomeIcon className="mr-2" icon={faClose} />
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalComponent;
