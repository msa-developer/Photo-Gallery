import { create } from "zustand";
import axiosInstance from "../lib/axiosInstance";

const useZustand = create((set, get) => ({
  images: [],

  getAllImages: async () => {
    try {
      const res = await axiosInstance.get("/");
      set((state) => ({ images: [...state.images, ...res.data] }));
    } catch (error) {
      console.error(error);
    }
  },

  uploadImg: async (data) => {
    try {
      const res = await axiosInstance.post("/add", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      set((state) => ({ images: [res.data.image, ...state.images] }));
    } catch (error) {
      console.error(error);
    }
  },

  DelImg: async (id) => {
    try {
      await axiosInstance.delete(`/{id}`);
      set((state) => ({ image: state.images.filter((img) => img._id !== id) }));
    } catch (error) {
      console.error(error);
    }
  },
}));

export default useZustand;
