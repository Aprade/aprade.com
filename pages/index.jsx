import Head from 'next/head';

import Header from '../components/header';
import { ArrowDiagonal } from '../components/icons/arrow_diagonal';

export default function Home() {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700;900&display=swap" rel="stylesheet" />
			</Head>
			<Header />
			<section class="flex w-screen h-screen font-inter">
				<div class="m-auto text-white">
					<h1 class="text-5xl my-7 lg:w-2/4 text-center font-black m-auto">
						It isn't about being the best but delivering the best.
					</h1>
					<h3 class="w-5/6 lg:w-2/5 text-aprd-secondary text-center font-normal m-auto">
						We're a business that believes that you don't need to sell a kidney to have something of the best, 
						that's why we have created beautiful applications that will solve your problems.
					</h3>
					<div class="flex mt-20 justify-center space-x-5 md:space-x-8 lg:space-x-14">
						<button class="py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded transition duration-300">
							See our projects
						</button>
						<a href="#projects" class="flex items-center underline hover:text-gray-500 text-white transition duration-300">
							<div class="flex">
								See our projects
								<ArrowDiagonal className="m-auto ml-3 h-4 w-4" />
							</div>
						</a>
					</div>
				</div>
			</section>
		</>
	)
}