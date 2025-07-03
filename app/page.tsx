'use client';
import React, { useState } from 'react';
import {
	Menu,
	X,
	Play,
	ArrowRight,
	Sparkles,
	FileText,
	Video,
	Presentation,
	Globe,
	Zap,
	ImageIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { UserButton } from '@stackframe/stack';

export default function CanvaHomepage() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const templates = [
		{
			icon: <Presentation className='w-6 h-6' />,
			name: 'Bifolds',
			color: 'bg-purple-500',
		},
		{
			icon: <ImageIcon className='w-6 h-6' />,
			name: 'Trifolds',
			color: 'bg-pink-500',
		},
		{
			icon: <Video className='w-6 h-6' />,
			name: 'TY Cards',
			color: 'bg-blue-500',
		},
		{
			icon: <FileText className='w-6 h-6' />,
			name: 'Bookmarks',
			color: 'bg-green-500',
		},
		{
			icon: <Globe className='w-6 h-6' />,
			name: 'Plaques',
			color: 'bg-orange-500',
		},
		{ icon: <Zap className='w-6 h-6' />, name: 'More', color: 'bg-gray-500' },
	];

	const features = [
		{
			title: 'Visual Suite 2.0',
			description:
				'Design, collaborate, and scale your ideas with our complete suite of tools',
			icon: <Sparkles className='w-8 h-8' />,
			color: 'from-purple-600 to-pink-600',
		},
		{
			title: 'AI-Powered Design',
			description: 'Create stunning visuals with Magic Studio and AI tools',
			icon: <Zap className='w-8 h-8' />,
			color: 'from-blue-600 to-cyan-600',
		},
		{
			title: 'Team Collaboration',
			description:
				'Work together seamlessly with real-time collaboration features',
			icon: <Globe className='w-8 h-8' />,
			color: 'from-green-600 to-emerald-600',
		},
	];

	return (
		<div className='min-h-screen bg-white'>
			{/* Navigation */}
			<nav className='sticky top-0 z-50 bg-white border-b border-gray-200'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex justify-between items-center h-16'>
						{/* Logo and Desktop Nav */}
						<div className='flex items-center space-x-8'>
							<div className='flex items-center'>
								<div className='w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full'></div>
								<span className='ml-2 text-xl font-bold'>CF Memories</span>
							</div>

							<NavigationMenu className='hidden lg:flex'>
								<NavigationMenuList>
									<NavigationMenuItem>
										<NavigationMenuTrigger>
											Design spotlight
										</NavigationMenuTrigger>
										<NavigationMenuContent>
											<div className='grid gap-3 p-6 w-[400px]'>
												<NavigationMenuLink className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
													<div className='text-sm font-medium'>
														Visual Suite
													</div>
													<p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
														Explore our complete design toolkit
													</p>
												</NavigationMenuLink>
											</div>
										</NavigationMenuContent>
									</NavigationMenuItem>
									<NavigationMenuItem>
										<NavigationMenuTrigger>Business</NavigationMenuTrigger>
										<NavigationMenuContent>
											<div className='grid gap-3 p-6 w-[400px]'>
												<NavigationMenuLink className='block select-none space-y-1 rounded-md p-3'>
													<div className='text-sm font-medium'>
														CF Memories for Funeral Homes
													</div>
													<p className='text-sm text-muted-foreground'>
														Collaborate and scale your funeral home
													</p>
												</NavigationMenuLink>
											</div>
										</NavigationMenuContent>
									</NavigationMenuItem>
									<NavigationMenuItem>
										<NavigationMenuTrigger>Education</NavigationMenuTrigger>
										<NavigationMenuContent>
											<div className='grid gap-3 p-6 w-[400px]'>
												<NavigationMenuLink className='block select-none space-y-1 rounded-md p-3'>
													<div className='text-sm font-medium'>
														How does it work?
													</div>
													<p className='text-sm text-muted-foreground'>
														Learn more about our products and how to design
														keepsakes in the browser
													</p>
												</NavigationMenuLink>
											</div>
										</NavigationMenuContent>
									</NavigationMenuItem>
									<NavigationMenuItem>
										<NavigationMenuTrigger>
											Plans and pricing
										</NavigationMenuTrigger>
									</NavigationMenuItem>
								</NavigationMenuList>
							</NavigationMenu>
						</div>

						{/* Right side buttons */}
						<div className='flex items-center space-x-4'>
							<Button variant='ghost' className='hidden md:flex'>
								Log in
							</Button>
							<Button className='bg-purple-600 hover:bg-purple-700 text-white'>
								Sign up
							</Button>
							<Button
								variant='ghost'
								size='icon'
								className='lg:hidden'
								onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
								{mobileMenuOpen ? <X /> : <Menu />}
							</Button>
							<UserButton />
						</div>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className='relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32'>
					<div className='text-center space-y-8'>
						<h1 className='text-5xl lg:text-7xl font-bold tracking-tight'>
							<span className='bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
								Design Anything.
							</span>
							<br />
							<span className='text-gray-900'>We Print and Ship to YOU.</span>
						</h1>
						<p className='text-xl text-gray-600 max-w-2xl mx-auto'>
							Create stunning funeral programs in seconds with CF Memorie&apos;s
							free online design tools, with dozens of themes and templates to
							choose from.
						</p>

						{/* Search Bar */}
						{/* <div className='max-w-2xl mx-auto'>
							<div className='relative'>
								<Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
								<Input
									type='text'
									placeholder='What will you design today?'
									className='w-full pl-12 pr-4 py-4 text-lg rounded-full border-2 border-gray-200 focus:border-purple-500 focus:outline-none'
								/>
							</div>
						</div> */}

						{/* Quick Start Templates */}
						<div className='flex flex-wrap justify-center gap-4 mt-8'>
							{templates.map((template, index) => (
								<button
									key={index}
									className='flex flex-col items-center p-4 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-200 w-30'>
									<div
										className={`${template.color} p-3 rounded-full text-white mb-2`}>
										{template.icon}
									</div>
									<span className='text-sm font-medium text-gray-700'>
										{template.name}
									</span>
								</button>
							))}
						</div>
					</div>
				</div>

				{/* Decorative Elements */}
				<div className='absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full blur-3xl opacity-50'></div>
				<div className='absolute bottom-20 right-10 w-32 h-32 bg-pink-200 rounded-full blur-3xl opacity-50'></div>
			</section>

			{/* Features Section */}
			<section className='py-20 bg-gray-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl font-bold text-gray-900 mb-4'>
							Everything you need to create
						</h2>
						<p className='text-xl text-gray-600'>
							Powerful features that make design simple for everyone
						</p>
					</div>

					<div className='grid md:grid-cols-3 gap-8'>
						{features.map((feature, index) => (
							<div
								key={index}
								className='bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300'>
								<div
									className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} text-white mb-6`}>
									{feature.icon}
								</div>
								<h3 className='text-2xl font-semibold mb-3'>{feature.title}</h3>
								<p className='text-gray-600 mb-4'>{feature.description}</p>
								<Button variant='ghost' className='group'>
									Learn more
									<ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
								</Button>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white'>
				<div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
					<h2 className='text-4xl font-bold mb-6'>Start designing for free</h2>
					<p className='text-xl mb-8 opacity-90'>
						Join now to start creating with CF Memories
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Button
							size='lg'
							className='bg-white text-purple-600 hover:bg-gray-100'>
							Sign up free
						</Button>
						<Button
							size='lg'
							variant='outline'
							className='border-white text-white hover:bg-white/10'>
							<Play className='mr-2 w-4 h-4' />
							Watch demo
						</Button>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className='bg-gray-900 text-gray-300 py-12'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
						<div>
							<h4 className='font-semibold text-white mb-4'>Product</h4>
							<ul className='space-y-2'>
								<li>
									<a href='#' className='hover:text-white transition-colors'>
										Features
									</a>
								</li>
								<li>
									<a href='#' className='hover:text-white transition-colors'>
										Templates
									</a>
								</li>
								<li>
									<a href='#' className='hover:text-white transition-colors'>
										Pricing
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className='font-semibold text-white mb-4'>Company</h4>
							<ul className='space-y-2'>
								<li>
									<a href='#' className='hover:text-white transition-colors'>
										About
									</a>
								</li>
								<li>
									<a href='#' className='hover:text-white transition-colors'>
										Careers
									</a>
								</li>
								<li>
									<a href='#' className='hover:text-white transition-colors'>
										Blog
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className='font-semibold text-white mb-4'>Support</h4>
							<ul className='space-y-2'>
								<li>
									<a href='#' className='hover:text-white transition-colors'>
										Help Center
									</a>
								</li>
								<li>
									<a href='#' className='hover:text-white transition-colors'>
										Contact
									</a>
								</li>
								<li>
									<a href='#' className='hover:text-white transition-colors'>
										Status
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className='font-semibold text-white mb-4'>Legal</h4>
							<ul className='space-y-2'>
								<li>
									<a href='#' className='hover:text-white transition-colors'>
										Privacy
									</a>
								</li>
								<li>
									<a href='#' className='hover:text-white transition-colors'>
										Terms
									</a>
								</li>
								<li>
									<a href='#' className='hover:text-white transition-colors'>
										Security
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='mt-12 pt-8 border-t border-gray-800 text-center'>
						<p>&copy; 2025 Canva Clone. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
