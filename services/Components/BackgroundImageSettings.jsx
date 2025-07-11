import React, { useState } from 'react';
import { useCanvasHook } from '@/app/(routes)/design/[designId]/page';
import SearchImagesBackground from '../Shared/SearchImagesBackground';

function BackgroundImageSettings() {
	const { canvasEditor } = useCanvasHook();

	return (
		<div>
			<SearchImagesBackground />
		</div>
	);
}

export default BackgroundImageSettings;
