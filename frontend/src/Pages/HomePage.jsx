import useZustand from "../zustand/zustand";

const HomePage = () => {
  const { images, DelImg } = useZustand();

  return (
    <div className="min-h-screen bg-base-200 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Optional: A nice header for the gallery */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">
            My Garden Gallery
          </h1>
          <p className="text-base-content/70">
            A collection of beautiful moments
          </p>
        </div>

        {images?.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[50vh] text-base-content/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 mb-4 opacity-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <h2 className="text-2xl font-semibold">No Images Yet</h2>
            <p>Upload some photos to see them here</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images?.map((img) => (
              <div
                key={img._id}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden rounded-2xl border border-base-300"
              >
                {/* Image Container with fixed aspect ratio */}
                <figure className="relative aspect-[4/3] overflow-hidden bg-base-300">
                  <img
                    src={`data:image/jpeg;base64,${img.imagePath}`}
                    alt="Gallery image"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-6">
                    <button
                      onClick={() => DelImg(img._id)}
                      className="btn btn-error btn-sm gap-2 shadow-lg hover:scale-105 transition-transform"
                    >
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      Delete
                    </button>
                  </div>
                </figure>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
