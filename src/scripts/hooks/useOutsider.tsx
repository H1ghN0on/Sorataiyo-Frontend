import React from "react";

function useOutsideAlerter(ref: any, callback: any) {
  React.useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

interface IOutsiderProps {
  children: React.ReactNode;
  onOutsideClick: () => void;
}

const Outsider: React.FC<IOutsiderProps> = ({ children, onOutsideClick }) => {
  const wrapperRef = React.useRef(null);
  useOutsideAlerter(wrapperRef, onOutsideClick);

  return (
    <div style={{ width: "100%", height: "100%" }} ref={wrapperRef}>
      {children}
    </div>
  );
};

export default Outsider;
