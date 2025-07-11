import React, { useState } from 'react';
import { TextSettingsList } from '../Options';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { Trash } from 'lucide-react';
import FontStyles from '../Shared/FontStyles';
import { useCanvasHook } from '@/app/(routes)/design/[designId]/page';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';

function TextSettingsNavbar() {
	const { canvasEditor } = useCanvasHook();
	const [show, setShow] = useState(false);

	const onDelete = () => {
		const activeObject = canvasEditor.getActiveObject();
		if (activeObject) {
			canvasEditor.remove(activeObject);
			if (activeObject) {
				canvasEditor.remove(activeObject);
			}
			canvasEditor.renderAll();
			setShow(true);
		}
	};

	// Add error handling
	if (!TextSettingsList || !Array.isArray(TextSettingsList)) {
		console.error('TextSettingsList is not defined or not an array');
		return <div>Text settings not available</div>;
	}

	return (
		<div className='flex gap-6 items-center'>
			{TextSettingsList.map((setting, index) => {
				const IconComponent = setting.icon;

				return (
					<Tooltip key={index}>
						<TooltipTrigger asChild>
							<div className='hover:scale-105 transition-all cursor-pointer'>
								{setting.component ? (
									<Popover>
										<PopoverTrigger asChild>
											<IconComponent className='w-5 h-5' />
										</PopoverTrigger>
										<PopoverContent>
											{setting.name}
											{setting.component}
										</PopoverContent>
									</Popover>
								) : (
									<IconComponent
										className='w-5 h-5'
										onClick={() => handleTextSetting(setting.name)}
									/>
								)}
							</div>
						</TooltipTrigger>
						<TooltipContent>{setting.name}</TooltipContent>
					</Tooltip>
				);
			})}

			<FontStyles />

			<Trash
				onClick={onDelete}
				className='hover:scale-105 transition-all cursor-pointer w-5 h-5'
			/>
		</div>
	);
}

export default TextSettingsNavbar;
