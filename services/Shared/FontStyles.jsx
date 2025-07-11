import React, { useEffect, useState } from 'react';
import { Bold, Italic, Underline } from 'lucide-react';

import { Toggle } from '@/components/ui/toggle';
import { useCanvasHook } from '@/app/(routes)/design/[designId]/page';

function FontStyles() {
	const { canvasEditor } = useCanvasHook();
	const activeObject = canvasEditor.getActiveObject();
	const [isBold, setIsBold] = useState(activeObject?.fontWeight === 'bold');
	const [isItalic, setIsItalic] = useState(
		activeObject?.fontStyle === 'italic'
	);
	const [isUnderline, setIsUnderline] = useState(activeObject?.underline);

	// Update states when active object changes
	useEffect(() => {
		setIsBold(activeObject?.fontWeight === 'bold');
		setIsItalic(activeObject?.fontStyle === 'italic');
		setIsUnderline(activeObject?.underline || false);
	}, [activeObject]);

	const onSettingClick = (type) => {
		if (
			activeObject &&
			(activeObject.type === 'i-text' ||
				activeObject.type === 'text' ||
				activeObject.type === 'textbox')
		) {
			if (type === 'bold') {
				const newBoldState = !isBold;
				activeObject.set({
					fontWeight: newBoldState ? 'bold' : 'normal',
				});
				setIsBold(newBoldState);
			}
			if (type === 'italic') {
				const newItalicState = !isItalic;
				activeObject.set({
					fontStyle: newItalicState ? 'italic' : 'normal',
				});
				setIsItalic(newItalicState);
			}
			if (type === 'underline') {
				const newUnderlineState = !isUnderline;
				activeObject.set({
					underline: newUnderlineState,
				});
				setIsUnderline(newUnderlineState);
			}

			// Render the canvas to show the changes
			canvasEditor.renderAll();
		}
	};

	return (
		<div>
			<Toggle
				aria-label='Toggle bold'
				pressed={isBold}
				onClick={() => onSettingClick('bold')}>
				<Bold className='h-4 w-4' />
			</Toggle>
			<Toggle
				aria-label='Toggle italic'
				pressed={isItalic}
				onClick={() => onSettingClick('italic')}>
				<Italic className='h-4 w-4' />
			</Toggle>
			<Toggle
				aria-label='Toggle underline'
				pressed={isUnderline}
				onClick={() => onSettingClick('underline')}>
				<Underline className='h-4 w-4' />
			</Toggle>
		</div>
	);
}

export default FontStyles;
