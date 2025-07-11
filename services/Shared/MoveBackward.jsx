import React from 'react';
import { useCanvasHook } from '@/app/(routes)/design/[designId]/page';

function MoveBackward() {
	const { canvasEditor } = useCanvasHook();

	const MoveBackward = () => {
		const activeObject = canvasEditor.getActiveObject();
		if (activeObject) {
			canvasEditor.sendObjectBackwards(activeObject);
		}
	};

	return (
		<div
			onClick={MoveBackward}
			className='mx-auto mt-2 cursor-pointer p-2 bg-purple-300 hover:bg-purple-400 transition-all duration-300 w-45 rounded-lg text-center'>
			Move Backward
		</div>
	);
}

export default MoveBackward;
