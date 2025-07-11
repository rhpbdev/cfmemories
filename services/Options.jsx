// File: @/services/Options.jsx
import {
	ArrowDownIcon,
	ArrowUpIcon,
	BlendIcon,
	BookTypeIcon,
	CircleIcon,
	ComponentIcon,
	ContrastIcon,
	Folder,
	Home,
	ImageIcon,
	ImageUpscaleIcon,
	Layers2Icon,
	LayersIcon,
	LayoutDashboardIcon,
	LayoutTemplateIcon,
	LineSquiggleIcon,
	MinusIcon,
	MoonIcon,
	PaletteIcon,
	ScrollTextIcon,
	SettingsIcon,
	ShapesIcon,
	SlashIcon,
	SparkleIcon,
	SquareIcon,
	SquareRoundCornerIcon,
	SunDimIcon,
	TriangleIcon,
	TypeIcon,
	WandSparklesIcon,
} from 'lucide-react';
import BackgroundSetting from '@/services/Components/BackgroundSetting';
import AddImageSettings from '@/services/Components/AddImageSettings';
import Elements from '@/services/Components/Elements';
import MoveForward from './Shared/MoveForward';
import MoveBackward from './Shared/MoveBackward';
import BackgroundImageSettings from './Components/BackgroundImageSettings';
import PoemSettings from './Components/PoemSettings';
import FillColor from './Shared/FillColor';
import TextSettings from './Components/TextSettings';
import StrokeColor from './Shared/StrokeColor';
import StrokeWidth from './Shared/StrokeWidth';
import ShadowSettings from './Shared/ShadowSettings';

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
		width: 3300,
		height: 2550,
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
		name: 'Elements',
		desc: 'Select shapes and stickers',
		icon: ShapesIcon,
		component: <Elements />,
	},
	{
		name: 'Images',
		desc: 'Add or upload an image',
		icon: ImageIcon,
		component: <AddImageSettings />,
	},
	{
		name: 'Text',
		desc: 'Add body text and headings',
		icon: TypeIcon,
		component: <TextSettings />,
	},
	{
		name: 'AI',
		desc: 'Enhance your design with AI',
		icon: SparkleIcon,
	},
	{
		name: 'Poems',
		desc: 'Select a poem',
		icon: ScrollTextIcon,
		component: <PoemSettings />,
	},
	{
		name: 'BG Color',
		desc: 'Select a background color',
		icon: ComponentIcon,
		component: <BackgroundSetting />,
	},
	{
		name: 'BG Image',
		desc: 'Select a background image',
		icon: ImageUpscaleIcon,
		component: <BackgroundImageSettings />,
	},
	{
		name: 'Settings',
		desc: 'Update canvas size/background',
		icon: SettingsIcon,
	},
];

export const shapeList = [
	{
		name: 'Circle',
		icon: CircleIcon,
	},
	{
		name: 'Square',
		icon: SquareIcon,
	},
	{
		name: 'Triangle',
		icon: TriangleIcon,
	},
	{
		name: 'Line',
		icon: SlashIcon,
	},
];

export const shapesSettingsList = [
	{
		name: 'Fill',
		icon: PaletteIcon,
		component: <FillColor />,
	},
	{
		name: 'Stroke Color',
		icon: SquareIcon,
		component: <StrokeColor />,
	},
	{
		name: 'Stroke Width',
		icon: MinusIcon,
		component: <StrokeWidth />,
	},
	{
		name: 'Opacity',
		icon: BlendIcon,
	},
	{
		name: 'Rounded Corner',
		icon: SquareRoundCornerIcon,
	},
	{
		name: 'Shadow',
		icon: LayersIcon,
		component: <ShadowSettings />,
	},
	{
		name: 'Bring Front',
		icon: ArrowUpIcon,
		component: <MoveForward />,
	},
	{
		name: 'Move Back',
		icon: ArrowDownIcon,
		component: <MoveBackward />,
	},
];

export const TextSettingsList = [
	{
		name: 'Fill',
		icon: PaletteIcon,
		component: <FillColor />,
	},
	// {
	// 	name: 'Stroke Color',
	// 	icon: SquareIcon,
	// 	component: <BorderColor />,
	// },
	// {
	// 	name: 'Stroke Width',
	// 	icon: MinusIcon,
	// 	component: <BorderWidth />,
	// },
	// {
	// 	name: 'Opacity',
	// 	icon: BlendIcon,
	// 	component: <Opacity />,
	// },
	// {
	// 	name: 'Font',
	// 	icon: BookTypeIcon,
	// 	component: <FontFamily />,
	// },
	{
		name: 'Bring Front',
		icon: ArrowUpIcon,
		component: <MoveForward />,
	},
	{
		name: 'Move Back',
		icon: ArrowDownIcon,
		component: <MoveBackward />,
	},
];

export const poemList = [
	{
		name: "I'm Free",
		text: `Don't grieve for me, for now I'm free.  
				I'm following the path God laid for me.  
				I took His hand when I heard Him call;  
				I turned my back and left it all.  
				I could not stay another day  
				To laugh, to love, to work, or play.  
				Tasks left undone must stay that way;  
				I've now found peace at the end of day.  

				If my parting has left a void,  
				Then fill it with remembered joys:  
				A friendship shared, a laugh, a kiss.  
				Oh, yes, these things I, too, will miss.  

				Be not burdened with times of sorrow;  
				Look for the sunshine of tomorrow.  
				My life has been full; I savored much:  
				Good friends, good times, a loved one's touch.  

				Perhaps my time seems all too brief;  
				Don't lengthen your pain with undue grief.  
				Lift up your heart, and peace to thee.  
				God wanted me now—He has set me free.`,
	},
	{
		name: 'Afterglow',
		text: `I'd like the memory of me
				To be a happy one.
				I'd like to leave an afterglow
				Of smiles when life is done.
				I'd like to leave an echo
				Whispering softly down the ways
				Of happy times and laughing times
				And bright and summer days.
				I'd like the tears of those who grieve
				To dry before the sun
				Of happy memories that I leave
				When life is done.`,
	},
];
