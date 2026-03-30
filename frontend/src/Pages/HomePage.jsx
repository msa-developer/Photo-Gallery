import useZustand from "../zustand/zustand";

const HomePage = () => {
  const { images } = useZustand();

  return (
    <div className="m-3 p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 overflow-hidden">
      {images.length === 0 ? (
        <h1>No Images</h1>
      ) : (
        images.map((img) => (
          <div
            key={img._id}
            className="relative group card bg-base-100 overflow-hidden w-100 shadow-sm"
          >
            <figure>
              <img
                src={`data:image/jpeg;base64,${img.imagePath}`}
                className="w-full h-full object-cover"
              />
            </figure>

            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 ">
              <button className="bg-red-500 text-white cursor-pointer px-3 py-1 rounded">
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default HomePage;
