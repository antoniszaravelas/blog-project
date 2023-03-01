import { faClose, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-modal';
import { Title } from '../typography/Headings';
import { useState } from 'react';

interface ModalComponentProps {
  modalIsOpen: boolean;
  afterOpenModal: () => void;
  closeModal: () => void;
}

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

const ModalComponent: React.FC<ModalComponentProps> = ({
  modalIsOpen,
  afterOpenModal,
  closeModal,
}) => {
  const [formInfo, setFormInfo] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    address: '',
    postTitle: '',
    postContent: '',
  });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

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
            onChange={(event) =>
              setFormInfo({ ...formInfo, name: event.target.value })
            }
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
            onChange={(event) =>
              setFormInfo({ ...formInfo, username: event.target.value })
            }
          />
        </div>

        <div>
          <label className="mr-2 text-white" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className={modalInputStyle}
            onChange={(event) =>
              setFormInfo({ ...formInfo, email: event.target.value })
            }
          />
        </div>

        <div>
          <label className="mr-2 text-white" htmlFor="phone">
            Phone:
          </label>
          <input
            type="phone"
            id="phone"
            onChange={(event) =>
              setFormInfo({ ...formInfo, phone: event.target.value })
            }
            className={modalInputStyle}
          />
        </div>

        <div>
          <label className="mr-2 text-white" htmlFor="address">
            Address:
          </label>
          <input
            type="text"
            id="address"
            onChange={(event) =>
              setFormInfo({ ...formInfo, address: event.target.value })
            }
            className={modalInputStyle}
          />
        </div>

        <div>
          <label className="mr-2 text-white" htmlFor="postTitle">
            Post Title:
          </label>
          <input
            type="text"
            id="postTitle"
            onChange={(event) =>
              setFormInfo({ ...formInfo, postTitle: event.target.value })
            }
            className={modalInputStyle}
          />
        </div>

        <div>
          <label className="mr-2 text-white" htmlFor="postContent">
            Post Content:
          </label>
          <textarea
            name="content"
            id="postContent"
            cols={30}
            rows={10}
            onChange={(event) =>
              setFormInfo({ ...formInfo, postContent: event.target.value })
            }
          ></textarea>{' '}
        </div>

        <div>
          <button onClick={handleSubmit} className="bg-green-500 p-2 rounded">
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
