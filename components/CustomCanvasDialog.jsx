// File: @/app/components/CustomCanvasDialog.jsx
import React, { useContext, useState } from 'react';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { UserDetailContext } from '@/context/UserDetailContext';
import { useMutation } from 'convex/react';
import { Loader2Icon } from 'lucide-react';
import { api } from '@/convex/_generated/api';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

function CustomCanvasDialog({ children }) {
	const [name, setName] = useState();
	const [height, setHeight] = useState();
	const [width, setWidth] = useState();
	const [loading, setLoading] = useState(false);
	const createDesignRecord = useMutation(api.designs.createNewDesign);
	const { userDetail } = useContext(UserDetailContext);
	const router = useRouter();

	/**
	 * Used to create new design and save to db
	 *
	 */
	const onCreate = async () => {
		toast('Loading...');
		setLoading(true);
		const result = await createDesignRecord({
			name: name,
			width: Number(width),
			height: Number(height),
			uid: userDetail?._id,
		});

		console.log('Design Id:', result);
		setLoading(false);

		// Navigate user to editor screen
		router.push('/design/' + result);
	};

	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Create Custom Canvas</DialogTitle>
					<DialogDescription asChild>
						<div className='space-y-2'>
							<h2>Provide Canvas Width and Height</h2>
							<div>
								<label htmlFor=''>Memorial Name</label>
								<Input
									className='mt-1'
									placeholder={'Name of Deceased'}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className='flex gap-5 w-full'>
								<div className='w-full'>
									<label htmlFor=''>Width</label>
									<Input
										type='number'
										className='mt-1'
										placeholder={500}
										onChange={(e) => setWidth(e.target.value)}
									/>
								</div>
								<div className='w-full'>
									<label htmlFor=''>Height</label>
									<Input
										type='number'
										className='mt-1'
										placeholder={500}
										onChange={(e) => setHeight(e.target.value)}
									/>
								</div>
							</div>
							<div className='flex justify-center mt-8'>
								<Button
									className='w-full'
									disabled={loading || !name || !width || !height}
									onClick={onCreate}>
									{loading ? (
										<Loader2Icon className='animate-spin' />
									) : (
										'Create'
									)}
								</Button>
							</div>
						</div>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}

export default CustomCanvasDialog;
