import { useEffect } from "react";
import ReactDOM from "react-dom";

const Overlay = ({ children }) => {
  const el = document.createElement("div");

  useEffect(() => {
    const modalRoot = document.getElementById("modal-root");
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);

  return ReactDOM.createPortal(children, el);
};

export default Overlay;
