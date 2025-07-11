// File: @/services/Shared/Poems.jsx
import React from 'react';
import { useCanvasHook } from '@/app/(routes)/design/[designId]/page';
import { poemList } from '../Options';
import { FabricText, Group } from 'fabric'; // Correct import for Fabric.js v6

function Poems() {
	const { canvasEditor } = useCanvasHook();

	const onPoemSelect = (poem) => {
		if (!canvasEditor) return;

		// Create poem body first to measure its height
		const poemText = new FabricText(poem.text, {
			left: 0,
			top: 0,
			fontSize: 56,
			fontFamily: 'Arial',
			fontStyle: 'Italic',
			fill: '#000000',
			textAlign: 'center',
			width: 300,
		});

		// Create title
		const poemTitle = new FabricText(poem.name, {
			left: 0,
			top: 0,
			fontSize: 72,
			fontFamily: 'Arial',
			fontStyle: 'Italic',
			fill: '#000000',
			textAlign: 'center',
			width: 300,
		});

		// Calculate positions after text objects are created
		const titleHeight = poemTitle.getBoundingRect().height;
		const gap = 20; // Space between title and poem

		// Position title at top
		poemTitle.set({
			left: 0,
			top: 0,
			originX: 'center',
			originY: 'top',
		});

		// Position poem body below title
		poemText.set({
			left: 0,
			top: titleHeight + gap,
			originX: 'center',
			originY: 'top',
		});

		// Group them
		const group = new Group([poemTitle, poemText], {
			left: canvasEditor.width / 2,
			top: canvasEditor.height / 2,
			originX: 'center',
			originY: 'center',
		});

		// Add the group to the canvas
		canvasEditor.add(group);
		canvasEditor.setActiveObject(group);
		canvasEditor.requestRenderAll();
	};

	return (
		<div className='space-y-2'>
			{poemList.map((poem) => (
				<div
					key={poem.name}
					onClick={() => onPoemSelect(poem)}
					className='p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors'>
					<h3 className='font-semibold text-sm'>{poem.name}</h3>
					<p className='text-xs text-gray-600 mt-1 line-clamp-2'>{poem.text}</p>
				</div>
			))}
		</div>
	);
}

export default Poems;
