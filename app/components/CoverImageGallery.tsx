"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Dispatch, SetStateAction, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import GalleryImage from "./GalleryImage";
import { removeImage, uploadCoverImage } from "@/actions/file";
import ImageLoader from "./ImageLoader";
import { useImages } from "@/context/ImageProvider";

interface CoverImageGalleryProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  onSelect?(src: string): void;
}

const CoverImageGallery = ({
  open,
  onOpenChange,
  onSelect,
}: CoverImageGalleryProps) => {
  const [uploading, setUploading] = useState(false);
  const [removing, setRemoving] = useState(false);
  const [removedItem, setRemovedItem] = useState("");

  const image = useImages();
  const coverImages = image?.coverImages;
  const updateCoverImages = image?.updateCoverImages;
  const removeOldCoverImage = image?.removeOldCoverImage;

  const handleSelection = (image: string) => {
    onSelect?.(image);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex overflow-y-auto flex-col md:max-w-screen-md h-[80%] lg:max-w-screen-lg xl:max-w-screen-xl">
        <DialogHeader>
          <DialogTitle>Select Cover Image</DialogTitle>
          <DialogDescription>
            You can add and select cover image for your blog here.
          </DialogDescription>
        </DialogHeader>
        <div className="gap-4 py-4 ">
          <FileUploader
            handleChange={async (file: File) => {
              setUploading(true);
              try {
                const formData = new FormData();
                formData.append("image", file);
                const res = await uploadCoverImage(formData);
                if (res && updateCoverImages) {
                  updateCoverImages([res.secure_url]);
                }
              } catch (error) {
                console.error(error);
              }
              setUploading(false);
            }}
            name="image"
            types={["png", "jpg", "jpeg"]}
          >
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-2 text-gray-500 dark:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
              </label>
            </div>
          </FileUploader>

          {!coverImages?.length ? (
            <p className="text-4xl p-4 text-center font-semibold opacity-45">
              No Images To Render
            </p>
          ) : null}

          <div className="grid gap-4 md:grid-cols-4 grid-cols-2 mt-4">
            {coverImages?.map((item) => {
              return (
                <GalleryImage
                  key={item}
                  removedItem={removedItem}
                  loading={removing}
                  onSelectClick={() => handleSelection(item)}
                  onDeleteClick={async () => {
                    if (
                      confirm("Are you sure you want to delete this image?")
                    ) {
                      setRemoving(true);
                      setRemovedItem(item);
                      const id = item
                        .split("/")
                        .slice(-2)
                        .join("/")
                        .split(".")[0];
                      await removeImage(id);
                      if (removeOldCoverImage) {
                        removeOldCoverImage(item);
                      }
                      setRemovedItem("");
                      setRemoving(false);
                    }
                  }}
                  src={item}
                />
              );
            })}
            {uploading && <ImageLoader />}
          </div>
        </div>
        <DialogFooter className="sticky bottom-0 mt-auto">
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CoverImageGallery;
