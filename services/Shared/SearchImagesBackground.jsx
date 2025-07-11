// File: @/services/Shared/SearchImagesBackground.jsx
import { useCanvasHook } from '@/app/(routes)/design/[designId]/page';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FabricImage } from 'fabric';
import { SearchIcon, Trash2Icon } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function SearchImagesBackground() {
	const [imageList, setImageList] = useState([]);
	const [searchInput, setSearchInput] = useState('');
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
			per_page: 14,
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

	// Add selected image to Canvas as background
	const addBgToCanvas = async (imageUrl) => {
		try {
			// Load image with CORS enabled
			const img = await FabricImage.fromURL(imageUrl, {
				crossOrigin: 'anonymous',
			});

			// Get the current zoom level
			const zoom = canvasEditor.getZoom();

			// Get the original canvas dimensions (before scaling)
			const canvasWidth = canvasEditor.width / zoom;
			const canvasHeight = canvasEditor.height / zoom;

			// Calculate scale to fit canvas
			const scaleX = canvasWidth / img.width;
			const scaleY = canvasHeight / img.height;

			// Use the larger scale to ensure the image covers the entire canvas
			const scale = Math.max(scaleX, scaleY);

			// Scale the image
			img.scaleX = scale;
			img.scaleY = scale;

			// Center the image on the canvas
			img.set({
				originX: 'center',
				originY: 'center',
				left: canvasWidth / 2,
				top: canvasHeight / 2,
			});

			// Set as background image
			canvasEditor.backgroundImage = img;
			canvasEditor.renderAll();
		} catch (error) {
			console.error('Error loading background image:', error);
		}
	};

	// Handle search on Enter key
	const handleKeyDown = (event) => {
		if (event.key === 'Enter' && searchInput.trim()) {
			getImageList(searchInput);
		}
	};

	// Handle search button click
	const handleSearch = () => {
		if (searchInput.trim()) {
			getImageList(searchInput);
		}
	};

	// Delete background from canvas
	const deleteBackground = () => {
		canvasEditor.backgroundImage = null;
		canvasEditor.renderAll();
	};

	return (
		<div className='mt-5'>
			<h2 className='font-bold'>Search Images</h2>
			<div className='flex gap-2 items-center my-2'>
				<Input
					placeholder='Clouds'
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
					onKeyDown={handleKeyDown}
				/>
				<Button onClick={handleSearch}>
					<SearchIcon />
				</Button>
			</div>
			<div>
				<Button
					onClick={deleteBackground}
					variant='destructive'
					size='icon'
					className='w-full cursor-pointer'>
					Clear BG Image
				</Button>
			</div>
			<div className='mt-3 grid grid-cols-2 gap-2 overflow-auto max-h-[75vh]'>
				{imageList.map((image) => (
					<div
						key={image.id}
						onClick={() => addBgToCanvas(image.urls?.full || image.urls?.small)}
						className='cursor-pointer group relative'>
						<Image
							src={image.urls?.thumb}
							alt={image.alt_description || image.slug}
							width={300}
							height={300}
							className='w-full h-[80px] object-cover rounded-sm group-hover:opacity-75 transition-all duration-300'
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default SearchImagesBackground;
