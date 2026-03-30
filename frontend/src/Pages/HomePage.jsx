import React from "react";
import useZustand from "../zustand/zustand";

const HomePage = () => {
  const { images } = useZustand();

  return <div className="bg-black m-3 p-3"></div>;
};

export default HomePage;
