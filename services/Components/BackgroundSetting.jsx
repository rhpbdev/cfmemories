import React, { useState } from 'react';
import ColorPickerEditor from '../Shared/ColorPickerEditor';
import { useCanvasHook } from '@/app/(routes)/design/[designId]/page';
import { Button } from '@/components/ui/button';

function BackgroundSetting() {
	const [bgColor, setBgColor] = useState('#fff');
	const { canvasEditor } = useCanvasHook();

	/**
	 * Use to change the canvas color
	 * @param {*} color
	 */
	const onColorChange = (color) => {
		const bgImage = canvasEditor.backgroundImage;
		setBgColor(color);
		canvasEditor?.set({
			backgroundColor: color,
			backgroundImage: bgImage,
		});
	};
	const resetBgColor = () => {
		const bgImage = canvasEditor.backgroundImage;
		setBgColor('#FFF');
		canvasEditor?.set({
			backgroundColor: '#FFF',
			backgroundImage: bgImage,
		});
	};
	canvasEditor?.renderAll();

	return (
		<div className='space-y-6'>
			<ColorPickerEditor
				value={bgColor}
				onColorChange={(v) => onColorChange(v)}
			/>
			<Button
				onClick={resetBgColor}
				variant='destructive'
				size='icon'
				className='w-full cursor-pointer'>
				Clear BG Image
			</Button>
		</div>
	);
}

export default BackgroundSetting;
