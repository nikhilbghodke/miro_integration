import React from 'react';
import PropTypes from 'prop-types';
import WindowCloseIcon from 'mdi-react/WindowCloseIcon';

function Whiteboard({ show, onClose, boardId }) {
  if (!show) {
    return null;
  }
  //alert(boardId)
  return (
    <div className="whiteboard-container">
      <div className="whiteboard-header">
        <div>Miro</div>
        <WindowCloseIcon onClick={onClose} style={{ cursor: 'pointer' }} />
      </div>
      <iframe
        src={`https://miro.com/app/live-embed/${boardId}/?embedAutoplay=true`}
      ></iframe>
    </div>
  );
}

Whiteboard.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Whiteboard;
