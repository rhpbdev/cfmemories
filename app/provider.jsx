'use client';

import { UserDetailContext } from '@/context/UserDetailContext';
import { api } from '@/convex/_generated/api';
import { useUser } from '@stackframe/stack';
import { useMutation } from 'convex/react';
import React, { useEffect, useState } from 'react';

function Provider({ children }) {
	const user = useUser();
	const createNewUserMutation = useMutation(api.users.createNewUser);
	const [userDetail, setUserDetail] = useState(null);

	useEffect(() => {
		user && createUser();
	}, [user]);

	const createUser = async () => {
		if (!user?.displayName || !user?.primaryEmail || !user?.profileImageUrl) {
			console.warn('User information is incomplete.');
			return;
		}

		const result = await createNewUserMutation({
			name: user.displayName,
			email: user.primaryEmail,
			picture: user.profileImageUrl,
		});
		// console.log('user result', result);
		setUserDetail(result);
	};

	return (
		<div>
			<UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
				{children}
			</UserDetailContext.Provider>
		</div>
	);
}

export default Provider;
