import { create } from "zustand";
import axiosInstance from "../lib/axiosInstance";
import toast from "react-hot-toast";

const useZustand = create((set) => ({
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
      toast.success(res?.data?.message);
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message);
    }
  },

  DelImg: async (id) => {
    try {
      const res = await axiosInstance.delete(`/delete/${id}`);
      set((state) => ({
        images: state.images.filter((img) => img._id !== id),
      }));

      toast.success(res?.data?.message);
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message);
    }
  },
}));

export default useZustand;
