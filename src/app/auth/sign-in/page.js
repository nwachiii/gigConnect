/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {HeaderEmpty} from '@/components/HeaderEmpty';
import {FiBsEyeCrossed1} from '@/components/icons/FiBsEyeCrossed1';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

export const SignIn = () => {
	return (
		<div className='bg-[#ffffff] flex flex-row justify-center w-full'>
			<div className='bg-[#ffffff] w-[1440px] h-[1221px] relative'>
				<div className='absolute w-[1440px] h-[900px] top-0 left-0'>
					<div className='relative w-[462px] h-[626px] top-[182px] left-[490px]'>
						<div className='relative w-[460px] h-[626px] bg-[#ffffffcc] rounded-[12px] border border-solid border-[#ebebeb] backdrop-blur-[32px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(32px)_brightness(100%)]'>
							<p className="absolute w-[222px] top-[54px] left-[46px] [font-family:'Inter',Helvetica] font-extrabold text-[#0c0c0c] text-[32px] tracking-[0] leading-[normal]">Sign in to your account</p>
							<div className='inline-flex flex-col items-center gap-[28px] absolute top-[167px] left-[46px]'>
								<div className='relative w-[373px] h-[73px] mr-[-2.00px]'>
									<div className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-medium text-black text-[12px] tracking-[0] leading-[normal]">Email</div>
									<div className='flex w-[371px] items-start gap-[8px] px-[16px] py-[18px] absolute top-[22px] left-0 bg-[#ffffff] rounded-[12px] border border-solid border-[#e0e0e0]'>
										<div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#888a8f] text-[12px] tracking-[0] leading-[normal]">Enter your email</div>
									</div>
								</div>
								<div className='relative w-[373px] h-[74px] mr-[-2.00px]'>
									<div className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-medium text-black text-[12px] tracking-[0] leading-[normal]">Password</div>
									<div className='flex w-[371px] items-start gap-[236px] px-[16px] py-[18px] absolute top-[22px] left-0 bg-[#ffffff] rounded-[12px] border border-solid border-[#e0e0e0]'>
										<div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#888a8f] text-[12px] tracking-[0] leading-[normal]">Enter password</div>
										<FiBsEyeCrossed1 className='!relative !w-[16px] !h-[16px] !mr-[-2.00px]' color='#727272' />
									</div>
								</div>
								<div className='relative w-[373px] h-[24px] mr-[-2.00px]'>
									<div className='inline-flex items-center gap-[4px] absolute top-0 left-0'>
										<div className='relative w-[24px] h-[24px] bg-[#f8f8f8] rounded-[8px] border-[1.5px] border-solid border-[#e0e0e0]' />
										<div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#0c0c0c] text-[12px] text-center tracking-[0] leading-[18px] whitespace-nowrap">Keep me signed in</div>
									</div>
									<div className="absolute h-[18px] top-[3px] left-[268px] [font-family:'Inter',Helvetica] font-medium text-[#0c0c0c] text-[12px] text-right tracking-[0] leading-[18px] whitespace-nowrap">Forgot Password?</div>
								</div>
								<div className='flex w-[371px] items-center justify-center gap-[10px] px-[28px] py-[12px] relative flex-[0_0_auto] bg-[#0c0c0c] rounded-[10px] overflow-hidden'>
									<div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#ffffff] text-[14px] text-center tracking-[0] leading-[18px] whitespace-nowrap">Sign in</div>
								</div>
								<div className='flex w-[371px] items-center justify-center gap-[10px] px-[28px] py-[12px] relative flex-[0_0_auto] bg-[#f0f0f0] rounded-[10px] overflow-hidden'>
									<div className='inline-flex items-center justify-center gap-[4px] relative flex-[0_0_auto]'>
										<img className='relative w-[15.68px] h-[16px]' alt='Google g logo' src='/img/google-g-logo-1.svg' />
										<div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#0c0c0c] text-[14px] text-center tracking-[0] leading-[18px] whitespace-nowrap">Sign in with Google</div>
									</div>
								</div>
								<Link href="/auth/create-account/select-type">
								<p className="cursor-pointer relative w-fit [font-family:'Inter',Helvetica] font-normal text-transparent text-[14px] text-center tracking-[0] leading-[18px] whitespace-nowrap">
									<span className='text-[#878a8f]'>{`Don’t have an Account?`} </span>
									<span className='font-medium text-[#0c0c0c]'>Create an Account</span>
								</p>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<Footer className='!absolute !left-0 !top-[909px]' divClassName='!border-[#043af8]' divClassNameOverride='!border-[#043af8]' frame='/img/frame-1.svg' frameClassName='!border-[#043af8]' frameClassName1='!border-[#043af8]' frameClassNameOverride='!border-[#043af8]' href='mailto:hello@gigconnect.com' trustSafetyWrapperClassName='!border-[#043af8]' />
				<HeaderEmpty className='!fixed !left-[148px] !top-[26px]' />
			</div>
		</div>
	);
};

export default SignIn;
