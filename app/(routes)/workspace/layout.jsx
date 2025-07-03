// File: @/app/(routes)/workspace/layout.jsx
import React from 'react';
import Sidebar from '@/components/Sidebar';
import WorkspaceHeader from '@/components/WorkspaceHeader';

function WorkspaceLayout({ children }) {
	return (
		<div>
			<WorkspaceHeader />
			<div className='flex'>
				<Sidebar />
				{children}
			</div>
		</div>
	);
}

export default WorkspaceLayout;
