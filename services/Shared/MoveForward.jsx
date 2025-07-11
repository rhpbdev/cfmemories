import React from 'react';
import { useCanvasHook } from '@/app/(routes)/design/[designId]/page';

function MoveForward() {
	const { canvasEditor } = useCanvasHook();

	const MoveForward = () => {
		const activeObject = canvasEditor.getActiveObject();
		if (activeObject) {
			canvasEditor.bringObjectForward(activeObject);
		}
	};

	return (
		<div
			onClick={MoveForward}
			className='mx-auto mt-2 cursor-pointer p-2 bg-purple-300 hover:bg-purple-400 transition-all duration-300 w-45 rounded-lg text-center'>
			Move Forward
		</div>
	);
}

export default MoveForward;
