// File: @app/(routes)/workspace/page.jsx
import React from 'react';
import IntroOptions from '@/components/IntroOptions';
import RecentDesigns from '@/components/RecentDesigns';

function Workspace() {
	return (
		<div className='p-10 w-full'>
			<IntroOptions />
			<RecentDesigns />
		</div>
	);
}

export default Workspace;
