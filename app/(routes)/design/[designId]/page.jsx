'use client';
import { useParams } from 'next/navigation';
import React from 'react';
import DesignHeader from '@/components/design/DesignHeader';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import Sidebar from '@/components/design/Sidebar';
import CanvasEditor from '@/components/design/CanvasEditor';

function DesignEditor() {
	const { designId } = useParams();

	const designInfo = useQuery(api.designs.getDesign, {
		id: designId,
	});

	return (
		<div>
			<DesignHeader designInfo={designInfo} />
			<div className='flex'>
				<Sidebar />
				<CanvasEditor designInfo={designInfo} />
			</div>
		</div>
	);
}

export default DesignEditor;
