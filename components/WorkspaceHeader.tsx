import { UserButton } from '@stackframe/stack';
import Image from 'next/image';
import React from 'react';

function WorkspaceHeader() {
	return (
		<div className='p-4 flex justify-between items-center border-b'>
			<Image
				src={'/cfmemories-logo-dove-only-black.webp'}
				alt='logo'
				width={100}
				height={100}
				className='w-[60px] h-[60px]'
			/>
			<UserButton />
		</div>
	);
}

export default WorkspaceHeader;
