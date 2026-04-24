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
    <div className="navbar sticky top-4 z-50 mx-4 mt-4 max-w-7xl lg:mx-auto rounded-2xl bg-primary/80 backdrop-blur-md shadow-lg border border-primary-content/20">
      <div className="navbar-start">
        {/* App Logo / Brand */}
        <a className="btn btn-ghost text-xl text-primary-content gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="hidden sm:inline font-bold tracking-wide">
            Gallery
          </span>
        </a>
      </div>

      <div className="navbar-center">
        {/* Image Counter Badge */}
        <div className="badge badge-secondary badge-lg gap-2 shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <span className="font-semibold">{images.length}</span>
          <span className="hidden sm:inline">Images</span>
        </div>
      </div>

      <div className="navbar-end">
        {/* Hidden File Input */}
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
          ref={refInput}
        />

        {/* Upload Button */}
        <button
          className="btn btn-secondary btn-sm sm:btn-md gap-2 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
          onClick={() => refInput.current.click()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
          <span className="hidden sm:inline">Upload</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
