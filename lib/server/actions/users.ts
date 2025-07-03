// File: @/lib/server/actions/users.ts
'use server';
import { db } from '@/db';
import { auth, clerkClient } from '@clerk/nextjs/server';
import { usersTable } from '@/db/schema';

/**
 * Ensures a Clerk-registered user exists in the local database.
 * If the user record already exists (by id), does nothing.
 */
export const createNewUser = async () => {
	const { userId } = await auth();
	if (!userId) {
		return { error: true, message: 'Unauthorized' };
	}

	// Initialize Clerk client
	const client = await clerkClient();
	const clerkUser = await client.users.getUser(userId);
	const name = clerkUser.fullName ?? '';
	const email = clerkUser.emailAddresses[0]?.emailAddress ?? '';
	const picture = clerkUser.profileImageUrl ?? '';

	try {
		const [user] = await db
			.insert(usersTable)
			.values({
				id: clerkUser.id,
				name,
				email,
				picture,
				subscriptionId: clerkUser.publicMetadata.subscriptionId,
			})
			.onConflictDoNothing()
			.returning();

		return user;
	} catch (error) {
		console.error('Error creating new user:', error);
		return { error: true, message: 'Failed to create user' };
	}
};
