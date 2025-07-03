// @/components/shared/Sidebar.jsx
'use client';

import React from 'react';
import { WorkspaceMenu } from '@/services/Options';
import { CirclePlusIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import CustomCanvasDialog from './CustomCanvasDialog';

function Sidebar() {
	const path = usePathname();
	console.log(path);
	return (
		<div className='h-screen shadow-sm p-2 bg-purple-50'>
			<CustomCanvasDialog>
				<div className='p-2 flex flex-col items-center hover:cursor-pointer mb-5'>
					<CirclePlusIcon className='bg-purple-600 text-white rounded-full h-8 w-8' />
					<h2 className='text-sm text-purple-600'>Create</h2>
				</div>
			</CustomCanvasDialog>
			{WorkspaceMenu.map((menu, index) => (
				<div
					key={index}
					className={`p-2 flex flex-col items-center mb-4 group hover:bg-purple-100 rounded-xl cursor-pointer ${
						menu.path == path && 'bg-purple-100'
					}`}>
					<menu.icon
						className={`group-hover:text-purple-800 ${
							menu.path == path && 'bg-purple-100'
						}`}
					/>
					<h2
						className={`text-sm group-hover:text-purple-800 ${
							menu.path == path && 'bg-purple-100'
						}`}>
						{menu.name}
					</h2>
				</div>
			))}
		</div>
	);
}

export default Sidebar;
