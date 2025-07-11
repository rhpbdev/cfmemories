import React, { useState } from 'react';
import ColorPickerEditor from './ColorPickerEditor';
import { useCanvasHook } from '@/app/(routes)/design/[designId]/page';

function StrokeColor() {
	const [color, setColor] = useState('#000');
	const { canvasEditor } = useCanvasHook();

	const onColorChange = (color) => {
		setColor(color);
		const activeObject = canvasEditor.getActiveObject();
		activeObject.set({
			stroke: color,
		});
		// canvasEditor.add(activeObject);
		canvasEditor.renderAll();
	};

	return (
		<div>
			<ColorPickerEditor
				onColorChange={(v) => onColorChange(v)}
				value={color}
			/>
		</div>
	);
}

export default StrokeColor;
