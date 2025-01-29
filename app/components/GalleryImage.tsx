/* eslint-disable @next/next/no-img-element */
import { Check, Trash2 } from 'lucide-react'
import React from 'react'

interface GalleryImageProps {
	src: string
	onDeleteClick?: () => void
	onSelectClick?: () => void
	alt?: string
}

const GalleryImage = ({ src, onDeleteClick, onSelectClick, alt }: GalleryImageProps) => {
	return (
		<div className=' relative w-full aspect-square overflow-hidden rounded'>
			<img className='w-full h-full object-cover'
				src={src}
				alt={alt} />

			<div className='absolute inset-0 flex items-center justify-center gap-4 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity'>
				<button onClick={onDeleteClick} className='text-destructive flex items-center justify-center'>
					<Trash2 />
				</button>
				<button onClick={onSelectClick} className='text-blue-500 flex items-center justify-center'>
					<Check />
				</button>
			</div>
		</div>
	)
}

export default GalleryImage