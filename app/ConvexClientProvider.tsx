// File: @/app/ConvexClientProvider.tsx
'use client';

import { ConvexProvider, ConvexReactClient } from 'convex/react';
import { ReactNode, Suspense } from 'react';
import Provider from './provider';

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ConvexProvider client={convex}>
				<Provider>{children}</Provider>
			</ConvexProvider>
		</Suspense>
	);
}
