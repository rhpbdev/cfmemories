// File: @/components/design/CanvasEditor.jsx
import { useCanvasHook } from '@/app/(routes)/design/[designId]/page';
import { Canvas } from 'fabric';
import React, { useEffect, useRef, useState } from 'react';
import TopNavBar from '@/services/Components/TopNavBar';
import { Button } from '../ui/button';

function CanvasEditor({
	designInfo,
	sidebarWidths = { left: 120, right: 280 },
}) {
	const canvasRef = useRef();
	const containerRef = useRef();
	const [canvas, setCanvas] = useState(null);
	const [originalDimensions, setOriginalDimensions] = useState(null);
	const { canvasEditor, setCanvasEditor } = useCanvasHook();

	/**
	 * Resize canvas to fit container while maintaining aspect ratio
	 */
	const resizeCanvas = () => {
		if (!canvas || !containerRef.current || !originalDimensions) return;

		const container = containerRef.current;
		const ratio = originalDimensions.width / originalDimensions.height;

		// Account for sidebars - only use left sidebar for now based on your code
		const containerWidth = container.clientWidth - 280;
		const containerHeight = container.clientHeight - 280;

		// Calculate scale to fit container
		let scale = containerWidth / originalDimensions.width;
		let newWidth = containerWidth;
		let newHeight = containerWidth / ratio;

		// If height exceeds container, scale by height instead
		if (newHeight > containerHeight) {
			scale = containerHeight / originalDimensions.height;
			newHeight = containerHeight;
			newWidth = containerHeight * ratio;
		}

		// Apply the scaling using viewport transform
		// This maintains the internal canvas resolution while scaling the display
		canvas.setZoom(scale);
		canvas.setDimensions({
			width: newWidth,
			height: newHeight,
		});

		// Center the canvas content
		canvas.renderAll();
	};

	/**
	 * Used to initialize the Canvas with default width and height
	 */
	useEffect(() => {
		console.log('design info', designInfo);
		if (canvasRef.current && designInfo) {
			// Store original dimensions for export
			setOriginalDimensions({
				width: designInfo?.width,
				height: designInfo?.height,
			});

			const initCanvas = new Canvas(canvasRef.current, {
				width: designInfo?.width,
				height: designInfo?.height,
				backgroundColor: '#ffffff',
				preserveObjectStacking: true,
				// Enable CORS for image loading
				crossOrigin: 'anonymous',
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
	 * Handle canvas resizing when canvas is initialized or window resizes
	 */
	useEffect(() => {
		if (!canvas) return;

		// Initial resize
		resizeCanvas();

		// Handle window resize
		const handleResize = () => {
			resizeCanvas();
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [canvas, originalDimensions]);

	/**
	 * Export high resolution image
	 */
	const exportHighResolution = () => {
		if (!canvas || !originalDimensions) return;

		try {
			// Temporarily reset to original dimensions
			const currentZoom = canvas.getZoom();
			canvas.setZoom(1);
			canvas.setDimensions({
				width: originalDimensions.width,
				height: originalDimensions.height,
			});

			// Export at full resolution
			const dataURL = canvas.toDataURL({
				format: 'jpg',
				multiplier: 1,
				quality: 1,
			});

			// Restore display scaling
			canvas.setZoom(currentZoom);
			resizeCanvas();

			// Create download link
			const link = document.createElement('a');
			link.download = 'high-res-export.jpg';
			link.href = dataURL;
			link.click();
		} catch (error) {
			console.error('Export error:', error);
		}
	};

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
			<div
				ref={containerRef}
				className='bg-secondary flex flex-col space-y-4 w-full h-screen justify-center items-center fabric-canvas-wrapper'>
				<canvas id='canvas' ref={canvasRef} />
				<Button onClick={exportHighResolution} className='cursor-pointer'>
					Export
				</Button>
			</div>
		</div>
	);
}

export default CanvasEditor;
