import { UserButton } from '@stackframe/stack';
import Image from 'next/image';
import React from 'react';

function DesignHeader({ designInfo }) {
	return (
		<>
			<div className='p-3 flex justify-between bg-gradient-to-r bg-[#231F20]'>
				<Image
					src={'/cfmemories-logo-dove-only-white.webp'}
					alt='logo'
					width={60}
					height={60}
				/>
				<input
					value={designInfo?.name}
					placeholder='Design Name'
					className='text-white border-none outline-none'
				/>
				<UserButton />
			</div>
		</>
	);
}

export default DesignHeader;
