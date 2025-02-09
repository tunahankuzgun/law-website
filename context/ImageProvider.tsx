"use client";
import { readBlogImages, readCoverImages } from "@/actions/file";
import { createContext, useContext, useEffect, useState } from "react";

interface ImageProviderProps {
  children: React.ReactNode;
}

interface InitialImageContext {
  blogImages: string[];
  coverImages: string[];
  updateBlogImages: (images: string[]) => void;
  updateCoverImages: (images: string[]) => void;
  removeOldBlogImage: (src: string) => void;
  removeOldCoverImage: (src: string) => void;
}

const Context = createContext<InitialImageContext | null>(null);

const ImageProvider = ({ children }: ImageProviderProps) => {
  const [blogImages, setBlogImages] = useState<string[]>([]);
  const [coverImages, setCoverImages] = useState<string[]>([]);

  const updateBlogImages = (data: string[]) => {
    setBlogImages((prevImages) => [...prevImages, ...data]);
  };

  const updateCoverImages = (data: string[]) => {
    setCoverImages((prevImages) => [...prevImages, ...data]);
  };

  const removeOldBlogImage = (src: string) => {
    setBlogImages((prevImages) => prevImages.filter((image) => image !== src));
  };

  const removeOldCoverImage = (src: string) => {
    setCoverImages((prevImages) => prevImages.filter((image) => image !== src));
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const [fetchedBlogImages, fetchedCoverImages] = await Promise.all([
          readBlogImages(),
          readCoverImages(),
        ]);
        setBlogImages(fetchedBlogImages || []);
        setCoverImages(fetchedCoverImages || []);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <Context.Provider
      value={{
        blogImages,
        coverImages,
        updateBlogImages,
        updateCoverImages,
        removeOldBlogImage,
        removeOldCoverImage,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useImages = () => useContext(Context);
export default ImageProvider;
