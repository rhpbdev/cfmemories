// File: @/services/Options.jsx
import {
	Folder,
	Home,
	ImageIcon,
	LayoutDashboardIcon,
	LayoutTemplateIcon,
	ScrollTextIcon,
	SettingsIcon,
	ShapesIcon,
	SparkleIcon,
	TypeIcon,
	WandSparklesIcon,
} from 'lucide-react';

export const WorkspaceMenu = [
	{
		name: 'Home',
		icon: Home,
		path: '/workspace',
	},
	{
		name: 'Projects',
		icon: Folder,
		path: '/projects',
	},
	{
		name: 'Templates',
		icon: LayoutDashboardIcon,
		path: '/templates',
	},
];

export const canvasSizeOptions = [
	{
		name: 'Bifold',
		width: 1200,
		height: 600,
		icon: '/bifold-icon.webp',
	},
	{
		name: 'Trifold',
		width: 500,
		height: 500,
		icon: '/trifold-icon.webp',
	},
	{
		name: 'Bookmark',
		width: 500,
		height: 500,
		icon: '/bookmark-icon.webp',
	},
	{
		name: 'Thank-You Card',
		width: 500,
		height: 500,
		icon: '/thank-you-card-icon.webp',
	},
	{
		name: 'Plaque',
		width: 500,
		height: 500,
		icon: '/plaque-icon.webp',
	},
	{
		name: 'Glass Plaque',
		width: 500,
		height: 500,
		icon: '/plaque-icon.webp',
	},
	{
		name: 'Registry Book',
		width: 500,
		height: 500,
		icon: '/registry-book-icon.webp',
	},
	{
		name: 'Banner',
		width: 500,
		height: 500,
		icon: '/banner-icon.webp',
	},
];

export const sidebarMenu = [
	{
		name: 'Templates',
		desc: 'Select prebuilt templates',
		icon: LayoutTemplateIcon,
	},
	{
		name: 'Element',
		desc: 'Select shapes and stickers',
		icon: ShapesIcon,
	},
	{
		name: 'Images',
		desc: 'Add an image or upload your own',
		icon: ImageIcon,
	},
	{
		name: 'Text',
		desc: 'Add body text and headings',
		icon: TypeIcon,
	},
	{
		name: 'AI',
		desc: 'Use AI features to enhance your design',
		icon: SparkleIcon,
	},
	{
		name: 'Poems',
		desc: 'Select a poem from our curated selection',
		icon: ScrollTextIcon,
	},
	{
		name: 'Background',
		desc: 'Select a background from our curated selection',
		icon: WandSparklesIcon,
	},
	{
		name: 'Settings',
		desc: 'Update canvas size and background',
		icon: SettingsIcon,
	},
];
