const Dialog = ({ show, onClose, onClick, children }) => {
  if (!show) {
    return null;
  }

  const handelClick = () => {
    onClick();
    onClose();
  };

  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <div className="dialog-content">{children}</div>
        <div className="dialog-actions">
          <button onClick={handelClick} className="btn">
            ✔
          </button>
          <button onClick={onClose} className="close_button">
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
