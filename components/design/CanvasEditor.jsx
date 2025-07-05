import { Canvas } from 'fabric';
import React, { useEffect, useRef, useState } from 'react';

function CanvasEditor({ designInfo }) {
	const canvasRef = useRef();
	const [canvas, setCanvas] = useState(null);

	/**
	 * Used to initialize the Canvas with default width and height
	 */
	useEffect(() => {
		console.log('design info', designInfo);
		if (canvasRef.current && designInfo) {
			const initCanvas = new Canvas(canvasRef.current, {
				width: designInfo?.width / 2,
				height: designInfo?.height / 2,
				backgroundColor: '#ffffff',
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
			return () => {
				initCanvas.dispose();
			};
		}
	}, [designInfo]);

	return (
		<div className='bg-secondary w-full h-screen flex flex-col items-center justify-center'>
			<canvas id='canvas' ref={canvasRef}></canvas>
		</div>
	);
}

export default CanvasEditor;
