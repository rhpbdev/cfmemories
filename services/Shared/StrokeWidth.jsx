import { useCanvasHook } from '@/app/(routes)/design/[designId]/page';
import { Slider } from '@/components/ui/slider';
import React from 'react';

function StrokeWidth() {
	const { canvasEditor } = useCanvasHook();

	const onWidthChange = (value) => {
		if (!canvasEditor) return;

		const activeObject = canvasEditor.getActiveObject();
		if (activeObject) {
			activeObject.set({
				strokeWidth: value,
			});
			activeObject.setCoords();
			canvasEditor.renderAll();
		}
	};

	return (
		<div>
			<Slider
				defaultValue={[33]}
				max={100}
				step={1}
				onValueChange={(v) => onWidthChange(v[0])}
			/>
		</div>
	);
}

export default StrokeWidth;
