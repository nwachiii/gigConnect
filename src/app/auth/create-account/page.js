/* eslint-disable @next/next/no-img-element */
import {Footer} from '@/components/Footer';
import {HeaderEmpty} from '@/components/HeaderEmpty';
import {FiBsEyeCrossed1} from '@/components/icons/FiBsEyeCrossed1';
import React from 'react';
import Link from 'next/link';

export const CreateAnAccount = () => {
	return (
		<div className='bg-[#ffffff] flex flex-row justify-center w-full'>
			<div className='bg-[#ffffff] w-[1440px] h-[1687px] relative'>
				<div className='absolute w-[1440px] h-[1223px] top-0 left-0'>
					<div className='absolute w-[1440px] h-[900px] top-0 left-0' />
					<div className='absolute w-[460px] h-[1045px] top-[178px] left-[490px] bg-[#ffffffcc] rounded-[12px] border border-solid border-[#ebebeb] backdrop-blur-[32px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(32px)_brightness(100%)]' />
					<div className="absolute w-[222px] top-[233px] left-[537px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#0c0c0c] text-[32px] tracking-[0] leading-[normal]">
						Create
						<br />
						an Account
					</div>
					<div className='inline-flex flex-col items-center gap-[28px] absolute top-[347px] left-[537px]'>
						<div className='relative w-[373px] h-[73px] mr-[-2.00px]'>
							<div className="absolute top-0 left-0 [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[12px] tracking-[0] leading-[normal]">First Name</div>
							<div className='flex w-[371px] items-start gap-[8px] px-[16px] py-[18px] absolute top-[22px] left-0 bg-[#ffffff] rounded-[12px] border border-solid border-[#e0e0e0]'>
								<input type='text' className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#888a8f] text-[12px] tracking-[0] leading-[normal]">
									Enter your first name
								</input>
							</div>
						</div>
						<div className='relative w-[373px] h-[73px] mr-[-2.00px]'>
							<div className="absolute top-0 left-0 [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[12px] tracking-[0] leading-[normal]">Last Name</div>
							<div className='flex w-[371px] items-start gap-[8px] px-[16px] py-[18px] absolute top-[22px] left-0 bg-[#ffffff] rounded-[12px] border border-solid border-[#e0e0e0]'>
								<input type='text' className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#888a8f] text-[12px] tracking-[0] leading-[normal]">
									Enter your last name
								</input>
							</div>
						</div>
						<div className='relative w-[373px] h-[74px] mr-[-2.00px]'>
							<div className="absolute top-0 left-0 [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[12px] tracking-[0] leading-[normal]">Phone Number</div>
							<div className='items-center gap-[8px] px-[16px] py-[11px] flex w-[371px] absolute top-[22px] left-0 bg-[#ffffff] rounded-[12px] border border-solid border-[#e0e0e0]'>
								<img className='relative w-[28px] h-[28px] object-cover' alt='Rectangle' src='/img/rectangle-33.png' />
								<div className='font-b8-regular text-[#272727] text-[length:var(--b8-regular-font-size)] leading-[var(--b8-regular-line-height)] relative w-fit font-[number:var(--b8-regular-font-weight)] tracking-[var(--b8-regular-letter-spacing)] [font-style:var(--b8-regular-font-style)]'>+234</div>
								<img className='relative w-[16px] h-[16px]' alt='Frame' src='/img/frame.svg' />
								<img className='relative w-px h-[30px]' alt='Vector' src='/img/vector-8.svg' />
								<div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-[#888a8f] text-[12px] tracking-[0] leading-[normal]">Enter phone number</div>
							</div>
						</div>
						<div className='relative w-[373px] h-[73px] mr-[-2.00px]'>
							<div className="absolute top-0 left-0 [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[12px] tracking-[0] leading-[normal]">Email</div>
							<div className='flex w-[371px] items-start gap-[8px] px-[16px] py-[18px] absolute top-[22px] left-0 bg-[#ffffff] rounded-[12px] border border-solid border-[#e0e0e0]'>
								<input type="email" className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#888a8f] text-[12px] tracking-[0] leading-[normal]">Enter your email</input>
							</div>
						</div>
						<div className='relative w-[373px] h-[74px] mr-[-2.00px]'>
							<div className="absolute top-0 left-0 [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[12px] tracking-[0] leading-[normal]">Create Password</div>
							<div className='items-start gap-[236px] px-[16px] py-[18px] flex w-[371px] absolute top-[22px] left-0 bg-[#ffffff] rounded-[12px] border border-solid border-[#e0e0e0]'>
								<input type="password" className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#888a8f] text-[12px] tracking-[0] leading-[normal]">Enter password</input>
								<FiBsEyeCrossed1 className='!relative !w-[16px] !h-[16px] !mr-[-2.00px]' color='#727272' />
							</div>
						</div>
						<div className='relative w-[373px] h-[74px] mr-[-2.00px]'>
							<div className="absolute top-0 left-0 [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[12px] tracking-[0] leading-[normal]">Confirm Password</div>
							<div className='items-start gap-[176px] px-[16px] py-[18px] flex w-[371px] absolute top-[22px] left-0 bg-[#ffffff] rounded-[12px] border border-solid border-[#e0e0e0]'>
								<div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#888a8f] text-[12px] tracking-[0] leading-[normal]">Enter password to confirm</div>
								<FiBsEyeCrossed1 className='!relative !w-[16px] !h-[16px] !mr-[-3.00px]' color='#727272' />
							</div>
						</div>
						<div className='inline-flex items-center gap-[4px] relative flex-[0_0_auto]'>
							<div className='relative w-[24px] h-[24px] bg-[#f8f8f8] rounded-[8px] border-[1.5px] border-solid border-[#e0e0e0]' />
							<p className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-[#0c0c0c] text-[12px] text-center tracking-[0] leading-[18px] whitespace-nowrap">I agree to the terms of service</p>
						</div>
						<div className='flex w-[371px] items-center justify-center gap-[10px] px-[28px] py-[12px] relative flex-[0_0_auto] bg-[#0c0c0c] rounded-[10px] overflow-hidden'>
							<div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#ffffff] text-[14px] text-center tracking-[0] leading-[18px] whitespace-nowrap">Next</div>
						</div>
						<div className='flex w-[371px] items-center justify-center gap-[10px] px-[28px] py-[12px] relative flex-[0_0_auto] bg-[#f0f0f0] rounded-[10px] overflow-hidden'>
							<div className='inline-flex items-center justify-center gap-[4px] relative flex-[0_0_auto]'>
								<img className='relative w-[15.68px] h-[16px]' alt='Google g logo' src='/img/google-g-logo-1.svg' />
								<div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#0c0c0c] text-[14px] text-center tracking-[0] leading-[18px] whitespace-nowrap">Continue with Google</div>
							</div>
						</div>
						<p className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[14px] text-center tracking-[0] leading-[18px] whitespace-nowrap">
							<span className='text-[#878a8f]'>Already have an Account? </span>
							<Link href='/auth/sign-in'>
								<span className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#0c0c0c]">Sign in</span>
							</Link>
						</p>
					</div>
				</div>
				<Footer className='!absolute !left-0 !top-[1375px]' divClassName='!border-[#043af8]' divClassNameOverride='!border-[#043af8]' frame='frame-4.svg' frame1='frame-5.svg' frameClassName='!border-[#043af8]' frameClassName1='!border-[#043af8]' frameClassNameOverride='!border-[#043af8]' group='image.png' group1='group-4-2.png' group2='group-2.png' href='mailto:hello@gigconnect.com' img='line-11-2.svg' line='line-12-2.svg' line1='line-12-3.svg' trustSafetyWrapperClassName='!border-[#043af8]' />
				<HeaderEmpty className='!fixed !left-[148px] !top-[26px]' />
			</div>
		</div>
	);
};
export default CreateAnAccount;
