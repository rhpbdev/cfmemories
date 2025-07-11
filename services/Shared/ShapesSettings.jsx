import React, { useState } from 'react';
import { shapesSettingsList } from '../Options';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { Trash } from 'lucide-react';
import { useCanvasHook } from '@/app/(routes)/design/[designId]/page';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';

function ShapesSettings() {
	const { canvasEditor } = useCanvasHook();
	const [show, setShow] = useState(false);

	const onDelete = () => {
		const activeObject = canvasEditor.getActiveObject();
		if (activeObject) {
			canvasEditor.remove(activeObject);
			setShow(true);
		}
	};

	return (
		<div className='flex gap-6'>
			{shapesSettingsList.map((shape, index) => (
				<Tooltip key={index}>
					<TooltipTrigger asChild>
						<div className='hover:scale-104 transition-all cursor-pointer'>
							<Popover>
								<PopoverTrigger asChild>
									<shape.icon />
								</PopoverTrigger>
								<PopoverContent className='mt-4'>
									<h3 className='mb-2 font-semibold text-sm'>{shape.name}</h3>
									{shape.component}
								</PopoverContent>
							</Popover>
						</div>
					</TooltipTrigger>
					<TooltipContent>{shape.name}</TooltipContent>
				</Tooltip>
			))}
			<Tooltip>
				<TooltipTrigger asChild>
					<Trash
						onClick={onDelete}
						className='hover:scale-104 transition-all cursor-pointer'
					/>
				</TooltipTrigger>
				<TooltipContent>Delete</TooltipContent>
			</Tooltip>
		</div>
	);
}

export default ShapesSettings;
