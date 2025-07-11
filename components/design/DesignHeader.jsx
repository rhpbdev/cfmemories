// import { UserButton } from '@stackframe/stack';
// import Image from 'next/image';
// import React from 'react';

// function DesignHeader({ designInfo }) {
// 	return (
// 		<>
// 			<div className='p-3 flex justify-between bg-gradient-to-r bg-[#231F20]'>
// 				<Image
// 					src={'/cfmemories-logo-dove-only-white.webp'}
// 					alt='logo'
// 					width={60}
// 					height={60}
// 				/>
// 				<input
// 					value={designInfo?.name}
// 					placeholder='Design Name'
// 					className='text-white border-none outline-none'
// 				/>
// 				<UserButton />
// 			</div>
// 		</>
// 	);
// }

// export default DesignHeader;

import { UserButton } from '@stackframe/stack';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function DesignHeader({ designInfo, onNameChange }) {
	const [name, setName] = useState('');

	// Update local state when designInfo changes
	useEffect(() => {
		if (designInfo?.name) {
			setName(designInfo.name);
		}
	}, [designInfo?.name]);

	const handleChange = (e) => {
		setName(e.target.value);
		// Call parent handler if provided
		if (onNameChange) {
			onNameChange(e.target.value);
		}
	};

	return (
		<>
			<div className='p-3 flex justify-between bg-gradient-to-r bg-[#231F20]'>
				<Link href={'/workspace'}>
					<Image
						src={'/cfmemories-logo-dove-only-white.webp'}
						alt='logo'
						width={60}
						height={60}
					/>
				</Link>
				<input
					value={name}
					onChange={handleChange}
					placeholder='Design Name'
					className='text-white border-none outline-none'
				/>
				<UserButton />
			</div>
		</>
	);
}

export default DesignHeader;
