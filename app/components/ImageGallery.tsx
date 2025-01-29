import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Dispatch, SetStateAction } from 'react'
import { FileUploader } from "react-drag-drop-files";
import GalleryImage from './GalleryImage';
import { uploadFile } from '@/actions/file';

const ImageGallery = ({ open, onOpenChange }: { open: boolean, onOpenChange: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex overflow-y-auto flex-col md:max-w-screen-md h-[80%] lg:max-w-screen-lg xl:max-w-screen-xl">
        <DialogHeader>
          <DialogTitle>Add Images</DialogTitle>
          <DialogDescription>
            You can add images to your profile here.
          </DialogDescription>
        </DialogHeader>
        <div className="gap-4 py-4 ">
          <FileUploader handleChange={async (file: File) => {
            const formData = new FormData()
            formData.append('image', file)
            await uploadFile(formData)
          }}
            name="image" types={["png", "jpg", "jpeg"]} >
            <div className="flex items-center justify-center w-full">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-8 h-8 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
              </label>
            </div>
          </FileUploader>

          <p className='text-4xl p-4 text-center font-semibold opacity-45' >No Images To Render</p>

          <div className='grid gap-4 md:grid-cols-4 grid-cols-2'>
            <GalleryImage src="https://images.unsplash.com/photo-1735325332410-26cd3e9b9438?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <GalleryImage src="https://images.unsplash.com/photo-1735325332410-26cd3e9b9438?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <GalleryImage src="https://images.unsplash.com/photo-1735325332410-26cd3e9b9438?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <GalleryImage src="https://images.unsplash.com/photo-1735325332410-26cd3e9b9438?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <GalleryImage src="https://images.unsplash.com/photo-1735325332410-26cd3e9b9438?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
        </div>
        <DialogFooter className="sticky bottom-0 mt-auto">
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ImageGallery