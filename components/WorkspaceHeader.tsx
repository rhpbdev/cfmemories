import { UserButton } from '@stackframe/stack';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function WorkspaceHeader() {
	return (
		<div className='p-3 flex justify-between items-center border-b'>
			<Link href={'/workspace'}>
				<Image
					src={'/cfmemories-logo-dove-only-black.webp'}
					alt='logo'
					width={100}
					height={100}
					className='w-[60px] h-[60px]'
				/>
			</Link>
			<UserButton />
		</div>
	);
}

export default WorkspaceHeader;
