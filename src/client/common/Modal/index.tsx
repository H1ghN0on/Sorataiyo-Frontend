import React from "react";
import clsx from "clsx";

import { ReactComponent as CloseIcon } from "client/shared/icons/cross.svg";

import "./Modal.scss";

interface IModalProps {
  children: React.ReactNode;
  className?: string;
  title: string;
  opened: boolean;
  onClose: () => void;
}

const Modal: React.FC<IModalProps> = ({ children, className, opened, onClose, title }) => {
  return (
    <>
      createPortal(
      <div
        className={clsx("modal", {
          "modal-hidden": !opened,
        })}
      >
        <div className={clsx("modal-content", className)}>
          <div className="modal-header">
            <div className="modal-title">{title}</div>
            <CloseIcon className="modal-close-btn" onClick={onClose} />
          </div>
          {children}
        </div>
      </div>
      , document.body );
    </>
  );
};

export default Modal;
