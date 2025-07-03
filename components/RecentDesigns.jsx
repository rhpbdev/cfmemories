'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from './ui/button';
import CustomCanvasDialog from './CustomCanvasDialog';

function RecentDesigns() {
	const [designList, setDesignList] = useState([]);

	return (
		<div className='mt-7'>
			<h2 className='font-bold text-2xl'>Recent Designs</h2>

			{designList.length == 0 ? (
				<div className='flex flex-col gap-4 items-center mt-5'>
					<Image src={'/edit-tool.webp'} alt='edit' width={100} height={100} />
					<h2 className='text-center'>
						You don't have any designs yet! Create a new one.
					</h2>
					<CustomCanvasDialog>
						<Button>+ Create new</Button>
					</CustomCanvasDialog>
				</div>
			) : null}
		</div>
	);
}

export default RecentDesigns;
