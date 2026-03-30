import React from "react";
import useZustand from "../zustand/zustand.js";

const Navbar = () => {
  const { images, getAllImages, uploadImg } = useZustand();

  React.useEffect(() => {
    getAllImages();
  }, [getAllImages]);

  const refInput = React.useRef();

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("image", file);

    uploadImg(formData);
  };

  return (
    <div className="navbar bg-primary text-primary-content rounded-2xl flex justify-around">
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
        ref={refInput}
      />
      <button
        className="btn btn-ghost text-xl"
        onClick={() => refInput.current.click()}
      >
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
