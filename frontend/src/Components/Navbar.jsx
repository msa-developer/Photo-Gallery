import React from "react";
import useZustand from "../zustand/zustand.js";

const Navbar = () => {
  const { images, getAllImages } = useZustand();

  React.useEffect(() => {
    getAllImages();
  });

  return (
    <div className="navbar bg-primary text-primary-content rounded-2xl">
      <button className="btn btn-ghost text-xl">Upload</button>
      images:{images.length}
    </div>
  );
};

export default Navbar;
