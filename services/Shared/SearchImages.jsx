import { useCanvasHook } from '@/app/(routes)/design/[designId]/page';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FabricImage } from 'fabric';
import { SearchIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function SearchImages() {
	const [imageList, setImageList] = useState([]);
	const [searchInput, setSearchInput] = useState();
	const { canvasEditor } = useCanvasHook();

	useEffect(() => {
		getImageList('Blue Clouds');
	}, []);

	/**
	 * Get list of images from Unsplash
	 * @param {*} searchInput
	 */
	const getImageList = async (searchInput) => {
		// Query parameters
		const params = new URLSearchParams({
			query: searchInput,
			page: 1,
			per_page: 12,
		});

		const result = await fetch(
			`https://api.unsplash.com/search/photos?${params}`,
			{
				method: 'GET',
				headers: {
					Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
				},
			}
		);

		// Check if result was successful
		if (!result.ok) {
			console.error('Error:', result.status, result.statusText);
			return;
		}

		// Parse JSON response
		const data = await result.json();
		setImageList(data?.results || []); // Fallback to empty array
		console.log(data);
	};

	// Add selected image to Canvas
	const addImageToCanvas = async (imageUrl) => {
		const canvasImageRef = await FabricImage.fromURL(imageUrl);
		canvasEditor.add(canvasImageRef);
		canvasEditor.setActiveObject(canvasImageRef);
		canvasEditor.renderAll();
	};

	// Handle search on Enter key
	const handleKeyDown = (event) => {
		if (event?.key === 'Enter' && searchInput.trim()) {
			getImageList(searchInput);
		}
	};

	return (
		<div className='mt-5'>
			<h2 className='font-bold'>Search Images</h2>
			<div className='flex gap-2 items-center my-2'>
				<Input
					placeholder={'Clouds'}
					onChange={(e) => setSearchInput(e.target.value)}
					onKeyDown={handleKeyDown}
				/>
				<Button onClick={() => getImageList(searchInput)}>
					<SearchIcon />
				</Button>
			</div>
			<div className='mt-3 grid grid-cols-2 gap-2 overflow-auto max-h-[75vh]'>
				{imageList.map((image) => (
					<div
						key={image.id}
						onClick={() => addImageToCanvas(image.urls?.regular)}
						className='cursor-pointer'>
						<Image
							src={image.urls?.thumb}
							alt={image.alt_description || image.slug}
							width={300}
							height={300}
							className='w-full h-[80px] object-cover rounded-sm hover:opacity-75 transition-all duration-300'
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default SearchImages;
