/* eslint-disable @next/next/no-img-element */
import React from 'react';
// import {CheckboxBase} from './CheckboxBase';
import {Footer} from '@/components/Footer';
import Link from 'next/link';
import {HeaderEmpty} from '@/components/HeaderEmpty';
import {CheckboxBase} from '@/components/CheckboxBase';

export const SelectAccountType = () => {
	return (
		<div className='bg-[#ffffff] flex flex-row justify-center w-full'>
			<div className='bg-[#ffffff] w-[1440px] h-[1221px] relative'>
				<div className='absolute w-[1440px] h-[900px] top-0 left-0'>
					<div className='inline-flex flex-col items-center gap-[18px] relative top-[239px] left-[396px]'>
						<div className='inline-flex flex-col items-center gap-[8px] relative flex-[0_0_auto]'>
							<div style={{fontSize: '32px', fontStyle: 'normal', fontWeight: '700', color: '#202329'}}>Create an Account</div>
							<p style={{fontSize: '16px', fontStyle: 'normal', fontWeight: '400', color: '#4C5361'}}>Select account type to proceed</p>
						</div>
						<div className='relative w-[647px] h-[436px] bg-white rounded-[16px] overflow-hidden border border-solid border-foundationgreygrey-50'>
							<div className='inline-flex items-start gap-[48px] absolute top-[36px] left-[71px]'>
								<div className='inline-flex items-center justify-center gap-[10px] relative flex-[0_0_auto]'>
									<div className='relative w-[229px] h-[246px] bg-[#ffffff] rounded-[16px] border border-solid border-foundationgreygrey-50' />
									<div className='flex flex-col justify-center items-center gap-[24px] absolute top-[28px] text-center'>
										<img className='relative w-[58px] h-[58px]' alt='Profile' src='/img/profile-1.svg' />
										<div className='inline-flex flex-col items-center gap-[8px] relative flex-[0_0_auto]'>
											<div style={{fontSize: '16px', fontStyle: 'normal', fontWeight: '700', color: '#202329'}}>Talent</div>
											<p style={{fontSize: '12px', fontStyle: 'normal', fontWeight: '400', color: '#4C5361'}}>
												Get started as a talent
												<br />
												looking for a gig
											</p>
											<div className='relative w-[124px] h-[10px] bg-[#ffffff] border-t [border-top-style:solid] border-foundationgreygrey-50' />
											<div className='inline-flex items-center gap-[8px] relative flex-[0_0_auto]'>
												<CheckboxBase checked className='!relative' indeterminate={false} size='md' state='default' type='radio' />
												<div style={{fontSize: '14px', fontStyle: 'normal', fontWeight: '500', color: '#2A2E35'}}>Select</div>
											</div>
										</div>
									</div>
								</div>
								<div className='inline-flex items-center justify-center gap-[10px] relative flex-[0_0_auto]'>
									<div className='relative w-[229px] h-[246px] bg-[#ffffff] rounded-[16px] border border-solid border-foundationgreygrey-50' />
									<div className='inline-flex flex-col items-center gap-[24px] absolute top-[31px] text-center'>
										<img className='relative w-[58px] h-[58px]' alt='Work' src='/img/work-1.svg' />
										<div className='inline-flex flex-col items-center gap-[8px] relative flex-[0_0_auto]'>
											<div style={{fontSize: '16px', fontStyle: 'normal', fontWeight: '700', color: '#202329'}}>Client</div>
											<p style={{fontSize: '12px', fontStyle: 'normal', fontWeight: '400', color: '#4C5361'}}>
												Get started as a client
												<br />
												looking to hire a talent
											</p>
											<div className='relative w-[124px] h-[10px] bg-[#ffffff] border-t [border-top-style:solid] border-foundationgreygrey-50' />
											<div className='inline-flex items-center gap-[8px] relative flex-[0_0_auto]'>
												<CheckboxBase checked={false} className='!relative' indeterminate={false} size='md' state='default' type='radio' />
												<div style={{fontSize: '14px', fontStyle: 'normal', fontWeight: '500', color: '#2A2E35'}}>Select</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='inline-flex flex-col items-center gap-[24px] absolute top-[317px] left-[138px]'>
								<Link href='/auth/create-account'>
									<div className='flex w-[371px] items-center justify-center gap-[10px] px-[28px] py-[12px] relative flex-[0_0_auto] bg-[#0c0c0c] rounded-[10px] overflow-hidden'>
										<div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#ffffff] text-[14px] text-center tracking-[0] leading-[18px] whitespace-nowrap">Next</div>{' '}
									</div>
								</Link>
								<p className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[14px] text-center tracking-[0] leading-[18px] whitespace-nowrap">
									<span className='text-[#878a8f]'>Already have an Account? </span>
									<Link href='/auth/sign-in'>
										<span className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#0c0c0c]">Sign in</span>
									</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
				<Footer className='!absolute !left-0 !top-[909px]' divClassName='!border-[#043af8]' divClassNameOverride='!border-[#043af8]' frame='frame-3.svg' frame1='frame-4.svg' frameClassName='!border-[#043af8]' frameClassName1='!border-[#043af8]' frameClassNameOverride='!border-[#043af8]' group='image.png' group1='group-4-2.png' group2='group-2.png' href='mailto:hello@gigconnect.com' img='line-11-2.svg' line='line-12-2.svg' line1='line-12-3.svg' trustSafetyWrapperClassName='!border-[#043af8]' />
				<HeaderEmpty className='!fixed !left-[148px] !top-[26px]' />
			</div>
		</div>
	);
};

export default SelectAccountType;
