import React from "react";
import "./Popup.css";

const Popup = ({ show, setShow, children }) => {
  return (
    <>
      {show && (
        <div className="popup">
          <div className="popup-inner">
            <div className="popup-container">
              <div className="popup-top">{children}</div>
              <div className="popup-footer">
                <button
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
