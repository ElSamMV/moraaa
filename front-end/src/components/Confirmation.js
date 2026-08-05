import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { confirmable, createConfirmation } from "react-confirm";

const Confirmation = ({
  okLabel = "OK",
  cancelLabel = "Cancel",
  title = "Confirmation",
  confirmation,
  show,
  proceed,
  enableEscape = true
}) => {
  return (
    <div className="static-modal">
      <Modal
        animation={false}
        show={show}
        onHide={() => proceed(false)}
        backdrop={enableEscape ? true : "static"}
        keyboard={enableEscape}
        contentClassName="bg-dark text-white"
        data-bs-theme="dark"
        style={{ borderRadius: '1rem' }}
      >
        <Modal.Header 
          style={{ 
            borderBottom: '1px solid rgba(255,255,255,0.2)',
            backgroundColor: '#212529'
          }}
        >
          <Modal.Title style={{ color: '#ffffff', fontWeight: 'bold' }}>
            {title}
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body style={{ 
          backgroundColor: '#212529', 
          color: '#ffffff',
          fontSize: '1rem'
        }}>
          {confirmation}
        </Modal.Body>
        
        <Modal.Footer style={{ 
          borderTop: '1px solid rgba(255,255,255,0.2)',
          backgroundColor: '#212529'
        }}>
          <Button 
            variant="outline-light"
            onClick={() => proceed(false)}
            style={{ 
              borderRadius: '0.5rem',
              padding: '0.5rem 1.5rem'
            }}
          >
            {cancelLabel}
          </Button>
          <Button
            variant="outline-light"
            onClick={() => proceed(true)}
            style={{ 
              borderRadius: '0.5rem',
              padding: '0.5rem 1.5rem',
              borderColor: '#ff6b6b',
              color: '#ff6b6b'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#ff6b6b';
              e.target.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#ff6b6b';
            }}
          >
            {okLabel}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

Confirmation.propTypes = {
  okLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  title: PropTypes.string,
  confirmation: PropTypes.string,
  show: PropTypes.bool,
  proceed: PropTypes.func,
  enableEscape: PropTypes.bool
};

export function confirm(
  confirmation,
  proceedLabel = "OK",
  cancelLabel = "cancel",
  options = {}
) {
  return createConfirmation(confirmable(Confirmation))({
    confirmation,
    proceedLabel,
    cancelLabel,
    ...options
  });
}