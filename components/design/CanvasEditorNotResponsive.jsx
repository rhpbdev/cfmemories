// File: @/components/design/CanvasEditor.jsx
import { useCanvasHook } from '@/app/(routes)/design/[designId]/page';
import { Canvas } from 'fabric';
import React, { useEffect, useRef, useState } from 'react';
import TopNavBar from '@/services/Components/TopNavBar';

function CanvasEditor({ designInfo }) {
	const canvasRef = useRef();
	const [canvas, setCanvas] = useState(null);
	const { canvasEditor, setCanvasEditor } = useCanvasHook();

	/**
	 * Used to initialize the Canvas with default width and height
	 */
	useEffect(() => {
		console.log('design info', designInfo);
		if (canvasRef.current && designInfo) {
			const initCanvas = new Canvas(canvasRef.current, {
				width: designInfo?.width / window.devicePixelRatio,
				height: designInfo?.height / window.devicePixelRatio,
				backgroundColor: '#ffffff',
				preserveObjectStacking: true,
			});

			// Set high resolution canvas
			const scaleFactor = window.devicePixelRatio || 1;
			initCanvas.set({
				width: designInfo?.width * scaleFactor,
				height: designInfo?.height * scaleFactor,
				zoom: 1 / scaleFactor,
			});
			initCanvas.renderAll();
			setCanvas(initCanvas);
			setCanvasEditor(initCanvas);
			return () => {
				initCanvas.dispose();
			};
		}
	}, [designInfo]);

	/**
	 * Used to delete selected Object/Element
	 */
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === 'Delete' || event?.key === 'Backspace') {
				if (canvasEditor) {
					const activeObject = canvasEditor.getActiveObject();
					if (activeObject) {
						canvasEditor.remove(activeObject);
						canvasEditor.renderAll();
					}
				}
			}
		};

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [canvasEditor]);

	return (
		<div className='flex flex-col w-full h-screen'>
			<TopNavBar />
			<div className='bg-secondary flex w-full h-screen justify-center items-center'>
				<canvas id='canvas' ref={canvasRef} />
			</div>
		</div>
	);
}

export default CanvasEditor;
