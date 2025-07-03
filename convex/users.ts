// File: @/convex/users.ts
import { v } from 'convex/values';
import { mutation } from './_generated/server';

export const createNewUser = mutation({
	args: {
		name: v.string(),
		email: v.string(),
		picture: v.string(),
	},
	handler: async (ctx, args) => {
		// if user already exists
		const userData = await ctx.db
			.query('users')
			.filter((q) => q.eq(q.field('email'), args.email))
			.collect();
		// if user exists, insert user
		if (userData?.length == 0) {
			const result = await ctx.db.insert('users', {
				name: args.name,
				email: args.email,
				picture: args.picture,
			});

			return result;
		}

		return userData[0];
	},
});
