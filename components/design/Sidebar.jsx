// File: @/components/design/Sidebar.jsx
import React, { useState } from 'react';
import { sidebarMenu } from '@/services/Options';
import SidebarSettings from './SidebarSettings';

function Sidebar() {
	const [selectedOption, setSelectedOption] = useState(sidebarMenu[0]);
	return (
		<div className='flex'>
			<div className='p-2 w-[120px] shadow-sm h-screen pt-2'>
				{sidebarMenu.map((menu, index) => (
					<div
						key={index}
						className={`
      p-2 mb-2 flex flex-col items-center hover:bg-secondary cursor-pointer
      ${selectedOption?.name === menu.name ? 'bg-secondary' : ''}
    `}
						onClick={() => setSelectedOption(menu)}>
						<menu.icon />
						<h2 className='mt-1'>{menu.name}</h2>
					</div>
				))}
			</div>
			<SidebarSettings selectedOption={selectedOption} />
		</div>
	);
}

export default Sidebar;
