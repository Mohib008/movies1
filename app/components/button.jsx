import React from "react";

function button() {
  const [isOpen2, setIsOpen2] = React.useState(true);
  return (
    <div>
      <button
        className="btn-toggle"
        onClick={() => {
          setIsOpen2((open) => !open);
        }}
        style={{
          display: "block, !important",
          visibility: "visible, !important",
        }}
      >
        {isOpen2 ? "–" : "+"}
      </button>
    </div>
  );
}

export default button;
