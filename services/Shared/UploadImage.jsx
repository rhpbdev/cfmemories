import ImageKit from 'imagekit';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useParams } from 'next/navigation';
import { Loader2Icon } from 'lucide-react';
import { FabricImage } from 'fabric';
import { useCanvasHook } from '@/app/(routes)/design/[designId]/page';

function UploadImage() {
	const { designId } = useParams();
	const [loading, setLoading] = useState(false);
	const { canvasEditor } = useCanvasHook();

	var imagekit = new ImageKit({
		publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
		privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY,
		urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
	});

	const onFileUpload = async (event) => {
		setLoading(true);
		const file = event.target.files[0];
		const imageRef = await imagekit.upload({
			file: file,
			fileName: designId + '.png',
			isPublished: true,
		});
		console.log(imageRef?.url);

		const canvasImageRef = await FabricImage.fromURL(imageRef?.url);

		canvasEditor.add(canvasImageRef);
		canvasEditor.renderAll();

		setLoading(false);
	};
	return (
		<div>
			<label htmlFor='uploadImage'>
				<h2 className='p-2 bg-primary text-white rounded-md text-center text-sm'>
					{loading ? <Loader2Icon className='animate-spin' /> : 'Upload Image'}
				</h2>
			</label>
			<input
				type='file'
				id='uploadImage'
				className='hidden'
				multiple={false}
				onChange={onFileUpload}
			/>
		</div>
	);
}

export default UploadImage;
