// File: @/components/IntroOptions.jsx
'use client';

import { UserDetailContext } from '@/context/UserDetailContext';
import { api } from '@/convex/_generated/api';
import { canvasSizeOptions } from '@/services/Options';
import { useMutation } from 'convex/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import { toast } from 'sonner';

export default function IntroOptions() {
	const createDesignRecord = useMutation(api.designs.createNewDesign);
	const { userDetail } = useContext(UserDetailContext);
	const router = useRouter();

	// Don't render the component if user is not loaded
	if (!userDetail?._id) {
		return <div>Loading user...</div>; // Or redirect to login
	}

	/**
	 * Used to create new design and save to db
	 * @param {*} option
	 */
	const onCanvasOptionSelect = async (option) => {
		toast('Loading...');
		const result = await createDesignRecord({
			name: option.name,
			width: option.width,
			height: option.height,
			uid: userDetail?._id,
		});

		console.log('Design Id:', result);

		// Navigate user to editor screen
		router.push('/design/' + result);
	};

	return (
		<div>
			<div className='relative'>
				<Image
					src={'/banner-home.jpg'}
					alt='banner'
					width={1700}
					height={300}
					className='w-full h-[300px] rounded-2xl object-cover object-bottom'
				/>
				<h2 className='text-3xl text-white absolute bottom-5 left-5'>
					Start With a Template
				</h2>
			</div>
			<div>
				<div className='flex flex-wrap gap-4 items-center justify-center mt-10'>
					{canvasSizeOptions.map((option, index) => (
						<div
							key={index}
							className='flex flex-col items-center'
							onClick={() => onCanvasOptionSelect(option)}>
							<Image
								src={option.icon}
								alt={option.name}
								width={100}
								height={100}
								className='hover:scale-105 transition-all cursor-pointer'
							/>
							<h3 className='text-sm mt-2 font-medium'>{option.name}</h3>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
