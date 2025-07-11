// File: @/services/Shared/Shapes.jsx
import React from 'react';
import { shapeList } from '../Options';
import Image from 'next/image';
import { Circle, Line, Rect, Triangle } from 'fabric';
import { useCanvasHook } from '@/app/(routes)/design/[designId]/page';

function Shapes() {
	const { canvasEditor } = useCanvasHook();
	const onShapeSelect = (shape) => {
		const properties = {
			left: 100,
			top: 100,
			radius: 50,
			fill: 'black',
			stroke: 'black',
			width: 100,
			height: 100,
		};
		if (shape.name === 'Circle') {
			const circleRef = new Circle({
				...properties,
			});
			canvasEditor.add(circleRef);
			canvasEditor.renderAll();
		} else if (shape.name === 'Square') {
			const squareRef = new Rect({
				...properties,
			});
			canvasEditor.add(squareRef);
			canvasEditor.renderAll();
		} else if (shape.name === 'Line') {
			const lineRef = new Line([50, 50, 200, 200], {
				...properties,
				strokeWidth: 5,
			});
			canvasEditor.add(lineRef);
			canvasEditor.renderAll();
		} else if (shape.name === 'Triangle') {
			const triangleRef = new Triangle({
				...properties,
			});
			canvasEditor.add(triangleRef);
			canvasEditor.renderAll();
		}
	};
	return (
		<div>
			<div className='grid grid-cols-4 gap-3'>
				{shapeList.map((shape, index) => (
					<div
						key={index}
						className='p-2 border rounded-xl cursor-pointer hover:bg-gray-100'
						onClick={() => onShapeSelect(shape)}>
						<shape.icon className='w-full h-full' />
					</div>
				))}
			</div>
		</div>
	);
}

export default Shapes;
