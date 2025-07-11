import React, { useEffect, useState } from 'react';
import ShapesSettings from '../Shared/ShapesSettings';
import { useCanvasHook } from '@/app/(routes)/design/[designId]/page';
import { TextSettingsList } from '../Options';
import TextSettingsNavbar from './TextSettingsNavbar';

function TopNavBar() {
	const { canvasEditor } = useCanvasHook();
	const [showShapeSettings, setShowShapeSettings] = useState(false);
	const [enableTextSettings, setEnableTextSettings] = useState(false);
	const [hideToolbar, setHideToolbar] = useState(true);

	useEffect(() => {
		if (!canvasEditor) return;

		// Handler functions
		const handleSelectionCreated = (e) => {
			console.log('Selected Element', e);
			const activeObject = canvasEditor.getActiveObject();

			if (activeObject) {
				setHideToolbar(false);

				if (activeObject.text !== undefined) {
					setShowShapeSettings(false);
					setEnableTextSettings(true);
				} else {
					setEnableTextSettings(false);
					setShowShapeSettings(true);
				}
			}
		};

		const handleSelectionUpdated = () => {
			const activeObject = canvasEditor.getActiveObject();

			if (activeObject) {
				setHideToolbar(false);

				if (activeObject.text !== undefined) {
					setShowShapeSettings(false);
					setEnableTextSettings(true);
				} else {
					setEnableTextSettings(false);
					setShowShapeSettings(true);
				}
			}
		};

		const handleSelectionCleared = () => {
			setShowShapeSettings(false);
			setEnableTextSettings(false);
			setHideToolbar(true);
		};

		// Add event listeners
		canvasEditor.on('selection:created', handleSelectionCreated);
		canvasEditor.on('selection:updated', handleSelectionUpdated);
		canvasEditor.on('selection:cleared', handleSelectionCleared);

		// Cleanup function to remove event listeners
		return () => {
			canvasEditor.off('selection:created', handleSelectionCreated);
			canvasEditor.off('selection:updated', handleSelectionUpdated);
			canvasEditor.off('selection:cleared', handleSelectionCleared);
		};
	}, [canvasEditor]);

	// Don't render anything if toolbar should be hidden
	if (hideToolbar) {
		return null;
	}

	return (
		<div className='flex justify-center items-center'>
			<div
				className={`p-3 mt-18 bg-white absolute rounded-lg shadow-md transition-all duration-300 ${
					hideToolbar
						? 'opacity-0 pointer-events-none -translate-y-full'
						: 'opacity-100 translate-y-0'
				}`}>
				{showShapeSettings && <ShapesSettings />}
				{enableTextSettings && <TextSettingsNavbar />}
			</div>
		</div>
	);
}

export default TopNavBar;
