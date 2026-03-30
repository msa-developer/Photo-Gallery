import React from "react";
import useZustand from "../zustand/zustand.js";

const Navbar = () => {
  const { images, getAllImages } = useZustand();

  React.useEffect(() => {
    getAllImages();
  });

  const ref = React.useRef();

  const uploadImg = async () => {};

  return (
    <div className="navbar bg-primary text-primary-content rounded-2xl flex justify-around">
      <input type="file" className="hidden" ref={ref} />
      <button className="btn btn-ghost text-xl" onClick={ref.current.onClick()}>
        Upload
      </button>

      <div>
        <span className="text-xl">
          Images:
          {images.length}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
