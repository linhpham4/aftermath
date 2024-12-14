import "./DeleteModal.scss";

const DeleteModal = ({ open, close, itemId }) => {

  if (!open) return null;

  return (
    <div className="delete">
      <div className="delete__container">
        <button className="delete__close" onClick={close}></button>
        <h1 className="delete__text">Are you sure you want to delete this item?</h1>
        <button className="delete__confirm">Delete</button>
      </div>
    </div>
  );
};

export default DeleteModal;
