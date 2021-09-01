import { useState } from 'react';

import { Logo } from './icons/aprade_logo';

export default function Header() {
	const [ showMobileMenu, setShowMobileMenu ] = useState(false);

	return (
		<nav class="fixed w-screen font-inter backdrop-filter backdrop-blur-lg z-10">
			<div class="max-w-6xl mx-auto px-14">
				<div class="flex justify-between">
					<div class="flex space-x-4 items-center py-5">
						<Logo />
					</div>
					<div class="hidden md:flex items-center space-x-5 text-white hover:text-gray-500 transition duration-200">
						<a href="#projects" class="py-5 px-3 hover:text-white transition duration-200">Projects</a>
						<a href="https://docs.aprade.com/" class="py-5 px-3 hover:text-white transition duration-200">Docs</a>
						<a href="https://github.com/aprade" class="py-5 px-3 hover:text-white transition duration-200">Source</a>
						<a href="" class="py-2 px-3 bg-blue-500 hover:bg-blue-600 text-white rounded transition duration-300">Sponsor Us</a>
					</div>
					<div class="md:hidden flex items-center">
						<button class="mobile-menu-button" onClick={() => setShowMobileMenu(prev => !prev)}>
							<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>
				</div>
			</div>

			{showMobileMenu ? (
				<div class="w-full relative md:hidden">
					<div class="bg-aprd-tertiary mobile-menu w-min-content text-white right absolute top-0 right-0 mx-10 rounded">
						<a href="#projects" class="block py-2 p-5 text-lg hover:opacity-25 transition duration-200">Projects</a>
						<a href="https://docs.aprade.com/" class="block py-2 p-5 text-lg hover:opacity-25 transition duration-200">Docs</a>
						<a href="https://github.com/aprade" class="block py-2 p-5 text-lg hover:opacity-25 transition duration-200">Source</a>
					</div>
				</div>
			) : null}
		</nav>
	);
}