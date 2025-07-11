'use client';
import { useParams } from 'next/navigation';
import React, { useContext, useState } from 'react';
import DesignHeader from '@/components/design/DesignHeader';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import Sidebar from '@/components/design/Sidebar';
import CanvasEditor from '@/components/design/CanvasEditor';
import { CanvasContext } from '@/context/CanvasContext';

function DesignEditor() {
	const { designId } = useParams();
	const [canvasEditor, setCanvasEditor] = useState();
	const designInfo = useQuery(api.designs.getDesign, {
		id: designId,
	});

	return (
		<div>
			<CanvasContext.Provider value={{ canvasEditor, setCanvasEditor }}>
				<DesignHeader designInfo={designInfo} />
				<div className='flex'>
					<Sidebar />
					<CanvasEditor
						designInfo={designInfo}
						leftSidebarWidth={120}
						rightSidebarWidth={280}
					/>
				</div>
			</CanvasContext.Provider>
		</div>
	);
}

export default DesignEditor;

export const useCanvasHook = () => {
	const context = useContext(CanvasContext);
	if (!context) {
		throw new Error('Error');
	}
	return context;
};
