// File: @/services/Components/TextSettings.jsx
import React from 'react';
import { IText, Textbox } from 'fabric';
import { useCanvasHook } from '@/app/(routes)/design/[designId]/page';

function TextSettings() {
	const { canvasEditor } = useCanvasHook();

	const onAddTextClick = (type) => {
		if (!canvasEditor) return;

		let textRef;

		if (type === 'Heading') {
			textRef = new IText('Add Heading', {
				fontSize: 30,
				fontWeight: 'bold',
				fontFamily: 'Arial',
				fill: 'black',
				left: 100,
				top: 100,
				name: 'Heading',
			});
		} else if (type === 'Subheading') {
			textRef = new IText('Add Subheading', {
				fontSize: 20,
				fontWeight: '400',
				fontFamily: 'Arial',
				fill: 'black',
				left: 100,
				top: 100,
			});
		} else {
			textRef = new Textbox('Add Paragraph', {
				fontSize: 13,
				fontWeight: 'normal',
				fontFamily: 'Arial',
				fill: 'black',
				left: 100,
				top: 100,
				width: 200,
			});
		}

		// Add the text object and set it as the active object
		canvasEditor.add(textRef);
		canvasEditor.setActiveObject(textRef);
		// Update canvas
		canvasEditor.requestRenderAll();
	};

	return (
		<div className='flex flex-col gap-3'>
			<h2
				className='font-bold text-3xl p-3 bg-secondary rounded-xl cursor-pointer hover:bg-secondary/80'
				onClick={() => onAddTextClick('Heading')}>
				Add Heading
			</h2>
			<h2
				className='font-medium text-xl p-3 bg-secondary rounded-xl cursor-pointer hover:bg-secondary/80'
				onClick={() => onAddTextClick('Subheading')}>
				Add Subheading
			</h2>
			<h2
				className='text-md p-3 bg-secondary rounded-xl cursor-pointer hover:bg-secondary/80'
				onClick={() => onAddTextClick('Para')}>
				Paragraph
			</h2>
		</div>
	);
}

export default TextSettings;
