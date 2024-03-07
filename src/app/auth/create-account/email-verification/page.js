/* eslint-disable @next/next/no-img-element */
import React from 'react';
// import {CheckboxBase} from './CheckboxBase';
import {Footer} from '@/components/Footer';
import Link from 'next/link';
import {HeaderEmpty} from '@/components/HeaderEmpty';
import {CheckboxBase} from '@/components/CheckboxBase';

export const EmailVerification = () => {
	return (
		<div className='bg-[#ffffff] flex flex-row justify-center w-full'>
			<div className='bg-[#ffffff] w-[1440px] h-[1221px] relative'>
				<div className='absolute w-[1440px] h-[1223px] top-0 left-0'>
					<div className='absolute w-[1440px] h-[900px] top-0 left-0' />
					<div className='absolute w-[460px] h-[1045px] top-[178px] left-[490px] bg-[#ffffffcc] rounded-[12px] border border-solid border-[#ebebeb] backdrop-blur-[32px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(32px)_brightness(100%)]' />
					<div className="absolute w-[222px] top-[233px] left-[537px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#0c0c0c] text-[32px] tracking-[0] leading-[normal]">
						Email
						<br />
						Verification
					</div>
					<div className='inline-flex flex-col items-center gap-[28px] absolute top-[347px] left-[537px]'>
						<div className='relative w-[373px] h-[73px] mr-[-2.00px]'>
							{/*  */}
					</div>
				</div>
				<Footer className='!absolute !left-0 !top-[909px]' divClassName='!border-[#043af8]' divClassNameOverride='!border-[#043af8]' frame='frame-3.svg' frame1='frame-4.svg' frameClassName='!border-[#043af8]' frameClassName1='!border-[#043af8]' frameClassNameOverride='!border-[#043af8]' group='image.png' group1='group-4-2.png' group2='group-2.png' href='mailto:hello@gigconnect.com' img='line-11-2.svg' line='line-12-2.svg' line1='line-12-3.svg' trustSafetyWrapperClassName='!border-[#043af8]' />
				<HeaderEmpty className='!fixed !left-[148px] !top-[26px]' />
			</div>
		</div>
	);
};

export default EmailVerification;
