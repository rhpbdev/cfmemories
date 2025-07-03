// File: @/convex/designs.js
import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const createNewDesign = mutation({
	args: {
		name: v.string(),
		width: v.number(),
		height: v.number(),
		uid: v.id('users'),
	},
	handler: async (ctx, args) => {
		const result = await ctx.db.insert('designs', {
			name: args.name,
			width: args.width,
			height: args.height,
			uid: args.uid,
		});

		return result;
	},
});

export const getDesign = query({
	args: {
		id: v.id('designs'),
	},
	handler: async (ctx, args) => {
		const result = await ctx.db.get(args.id);
		return result;
	},
});
