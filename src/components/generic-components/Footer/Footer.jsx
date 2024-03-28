/* eslint-disable @next/next/no-img-element */
// import PropTypes from "prop-types";
import React from 'react';
import {Image} from '@chakra-ui/react';

export const Footer = ({}) => {
	return (
		<div className='flex flex-col items-center self-stretch px-20 py-12 mt-24 w-full bg-white border-solid border-t-[1.5px] border-t-[color:var(--Foundation-Grey-Grey--25,#F6F7F7)] max-md:px-5 max-md:mt-10 max-md:max-w-full'>
			<div className='flex gap-5 justify-between mt-3 w-full text-base font-semibold leading-5 text-right whitespace-nowrap max-w-[1144px] text-zinc-800 max-md:flex-wrap max-md:max-w-full'>
				<Image alt='' loading='lazy' src='https://cdn.builder.io/api/v1/image/assets/TEMP/d177c14e567709c9b688719474322e5f347f4032ed75eafdd4936137502a35ee?apiKey=79769cd1053a464cbdb4afd62642704d&' className='max-w-full aspect-[5] w-[164px]' />
				<div className='flex gap-2.5 self-start'>
					<div className='grow my-auto'>Join our community</div>
					<Image alt='' loading='lazy' src='https://cdn.builder.io/api/v1/image/assets/TEMP/07c3a2d72ba7b9db03ec1e0e7522a5eb97715a2ae221f9bcb8858874ec1d2def?apiKey=79769cd1053a464cbdb4afd62642704d&' className='aspect-square w-[30px]' />
					<Image alt='' loading='lazy' src='https://cdn.builder.io/api/v1/image/assets/TEMP/422c469f945fb5ce9c3e143b35f9473275fd83209e363773e6086aa22b135328?apiKey=79769cd1053a464cbdb4afd62642704d&' className='aspect-square w-[30px]' />
					<Image alt='' loading='lazy' src='https://cdn.builder.io/api/v1/image/assets/TEMP/cebe6a146f4a9ddff03e05bf15d8f538a9755737f095e83ba5789cd6f8d153eb?apiKey=79769cd1053a464cbdb4afd62642704d&' className='aspect-square w-[30px]' />
					<Image alt='' loading='lazy' src='https://cdn.builder.io/api/v1/image/assets/TEMP/3c99f6194dcc380600c26bcf0f7f806c7ee31a474da6dd5b9c5c465a8a68c334?apiKey=79769cd1053a464cbdb4afd62642704d&' className='aspect-square w-[30px]' />
					<Image alt='' loading='lazy' src='https://cdn.builder.io/api/v1/image/assets/TEMP/604e781230c0b6a950c590a1c830ae5fd7d14c2a224cf7b4e02631a107d26c53?apiKey=79769cd1053a464cbdb4afd62642704d&' className='aspect-square w-[30px]' />
				</div>
			</div>
			<div className='mt-12 w-full max-w-[1144px] max-md:mt-10 max-md:max-w-full'>
				<div className='flex gap-5 max-md:flex-col max-md:gap-0 max-md:'>
					<div className='flex flex-col w-3/5 max-md:ml-0 max-md:w-full'>
						<div className='flex flex-col grow text-sm text-zinc-800 max-md:mt-10 max-md:max-w-full'>
							<div className='text-base font-semibold leading-5 max-md:max-w-full'>Contact Information</div>
							<div className='flex gap-2.5 self-start mt-3.5 text-center whitespace-nowrap leading-[129%]'>
								<div className='grow justify-center px-4 py-2 border border-blue-700 border-solid backdrop-blur-xl bg-white bg-opacity-70 rounded-[48px]'>hello@gigconnect.com</div>
								<div className='grow justify-center px-4 py-2 border border-solid backdrop-blur-xl bg-white bg-opacity-70 border-gray-100 border-opacity-60 rounded-[48px]'>+234 0950 993 093</div>
							</div>
							<div className='justify-center px-4 py-2 mt-2.5 leading-6 border border-solid backdrop-blur-xl bg-white bg-opacity-70 border-gray-100 border-opacity-60 rounded-[48px] max-md:max-w-full'>
								<span className='font-bold'>Address:</span> No 191B jide Oki street off Ligali Ayorinde lane Victoria Island Lagos, Nigeria
							</div>
						</div>
					</div>
					<div className='flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full'>
						<div className='flex flex-col text-sm leading-5 text-zinc-800 max-md:mt-10'>
							<div className='text-base font-semibold leading-5'>Company</div>
							<div className='flex gap-2.5 justify-between mt-4 text-center'>
								<div className='grow justify-center px-4 py-2 border border-blue-700 border-solid backdrop-blur-xl bg-white bg-opacity-70 rounded-[48px]'>Join our Affiliate Program</div>
								<div className='grow justify-center px-4 py-2 whitespace-nowrap border border-blue-700 border-solid backdrop-blur-xl bg-white bg-opacity-70 rounded-[48px]'>Partnerships</div>
							</div>
							<div className='flex gap-2.5 mt-2.5 text-center whitespace-nowrap'>
								<div className='grow justify-center px-4 py-2 border border-blue-700 border-solid backdrop-blur-xl bg-white bg-opacity-70 rounded-[48px]'>Trust & Safety</div>
								<div className='grow justify-center px-4 py-2 border border-blue-700 border-solid backdrop-blur-xl bg-white bg-opacity-70 rounded-[48px]'>Terms of Service</div>
								<div className='grow justify-center px-4 py-2 border border-blue-700 border-solid backdrop-blur-xl bg-white bg-opacity-70 rounded-[48px]'>Privacy Policy</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='mt-7 max-w-full h-px bg-blue-700 w-[1144px]' />
			<div className='mt-8 text-xs leading-6 text-center whitespace-nowrap text-neutral-400'>© 2024 GigConnect - All Rights Reserved.</div>
		</div>
	);
};

// Footer.propTypes = {
//   frame: PropTypes.string,
//   href: PropTypes.string,
// };
