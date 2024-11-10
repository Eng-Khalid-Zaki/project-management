import { createPortal } from "react-dom";
import { useRef } from "react";
import Button from "./Button.jsx";
import { forwardRef, useImperativeHandle } from "react";
const Modal = forwardRef(function Modal({ children }, ref) {
  const modal = useRef();
  useImperativeHandle(ref, () => ({
    open() {
      modal.current.showModal();
    },
  }));
  return createPortal(
    <dialog
      ref={modal}
      className="rounded-md shadow-md backdrop:bg-stone-900/90 p-4"
    >
      {children}
      <form action="modal" className="text-right">
        <Button>Close</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
