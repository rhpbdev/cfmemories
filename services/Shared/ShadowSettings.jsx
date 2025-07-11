import { useCanvasHook } from '@/app/(routes)/design/[designId]/page';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import React, { useEffect, useState } from 'react';

function ShadowSettings() {
	const { canvasEditor } = useCanvasHook();

	const addShadow = () => {
		if (!canvasEditor) return;

		const activeObject = canvasEditor.getActiveObject();
		if (activeObject) {
			activeObject.set({
				shadow: {
					color: 'rgba(0,0,0,0.5)',
					blur: 6,
					offsetX: 6,
					offsetY: 6,
				},
			});
			canvasEditor.requestRenderAll();
		}
	};

	const removeShadow = () => {
		if (!canvasEditor) return;

		const activeObject = canvasEditor.getActiveObject();
		if (activeObject) {
			activeObject.set({
				shadow: false,
			});
			canvasEditor.requestRenderAll();
		}
	};

	return (
		<div className='flex flex-col space-y-2'>
			<Button onClick={addShadow}>Add Shadow</Button>
			<Button onClick={removeShadow}>Remove Shadow</Button>
		</div>
	);
}

export default ShadowSettings;
