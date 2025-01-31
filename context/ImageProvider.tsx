"use client";
import { readAllImages } from "@/actions/file";
import { createContext, useContext, useEffect, useState } from "react";

interface ImageProviderProps {
  children: React.ReactNode;
}

interface InitialImageContext {
  images: string[];
  updateImages(images: string[]): void;
  removeOldImage(src: string): void;
}

const Context = createContext<InitialImageContext | null>(null);

const ImageProvider = ({ children }: ImageProviderProps) => {
  const [images, setImages] = useState<string[]>([]);

  const updateImages = (data: string[]) => {
    setImages([...data, ...images]);
  };

  const removeOldImage = (src: string) => {
    setImages(images.filter((image) => image !== src));
  };

  useEffect(() => {
    readAllImages().then((data) => setImages(data || []));
  }, []);

  return (
    <Context.Provider value={{ images, updateImages, removeOldImage }}>
      {children}
    </Context.Provider>
  );
};

export const useImages = () => useContext(Context);
export default ImageProvider;
