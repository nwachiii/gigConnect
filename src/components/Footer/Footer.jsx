/* eslint-disable @next/next/no-img-element */
// import PropTypes from "prop-types";
import React from "react";
import { HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";

export const Footer = ({}) => {
  return (
    <VStack
      px={{ base: 5, md: 20 }}
      mt={{ base: 10, md: 24 }}
      py={12}
      borderTop={"1.5px solid #F6F7F7"}
    >
      <Stack direction={{ base: 'column', md: 'row' }} gap={{ base: 5, md: 'unset'}} mt={3} justify={'space-between'} maxW={{ base: 'full', md: '1144px' }} w={'full'} fontWeight={600} lineHeight={5}>
	  <Image src={'/img/brand/GigConnectLogo.svg'} alt='logo'  />
        <HStack gap={3}>
          <Text color={'#22262F'}>Join our community</Text>
          <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
            <FaXTwitter />
            <FaLinkedinIn />
        </HStack>
      </Stack>
      <Stack direction={{ base: 'column', md: 'row' }} gap={{base: 0, md: 5}}>
          <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-sm text-zinc-800 max-md:mt-10 max-md:max-w-full">
              <div className="text-base font-semibold leading-5 max-md:max-w-full">
                Contact Information
              </div>
              <div className="flex gap-2.5 self-start mt-3.5 text-center whitespace-nowrap leading-[129%]">
                <div className="grow justify-center px-4 py-2 border border-blue-700 border-solid backdrop-blur-xl bg-white bg-opacity-70 rounded-[48px]">
                  hello@gigconnect.com
                </div>
                <div className="grow justify-center px-4 py-2 border border-solid backdrop-blur-xl bg-white bg-opacity-70 border-gray-100 border-opacity-60 rounded-[48px]">
                  +234 0950 993 093
                </div>
              </div>
              <div className="justify-center px-4 py-2 mt-2.5 leading-6 border border-solid backdrop-blur-xl bg-white bg-opacity-70 border-gray-100 border-opacity-60 rounded-[48px] max-md:max-w-full">
                <span className="font-bold">Address:</span> No 191B jide Oki
                street off Ligali Ayorinde lane Victoria Island Lagos, Nigeria
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-sm leading-5 text-zinc-800 max-md:mt-10">
              <div className="text-base font-semibold leading-5">Company</div>
              <div className="flex gap-2.5 justify-between mt-4 text-center">
                <div className="grow justify-center px-4 py-2 border border-blue-700 border-solid backdrop-blur-xl bg-white bg-opacity-70 rounded-[48px]">
                  Join our Affiliate Program
                </div>
                <div className="grow justify-center px-4 py-2 whitespace-nowrap border border-blue-700 border-solid backdrop-blur-xl bg-white bg-opacity-70 rounded-[48px]">
                  Partnerships
                </div>
              </div>
              <div className="flex gap-2.5 mt-2.5 text-center whitespace-nowrap">
                <div className="grow justify-center px-4 py-2 border border-blue-700 border-solid backdrop-blur-xl bg-white bg-opacity-70 rounded-[48px]">
                  Trust & Safety
                </div>
                <div className="grow justify-center px-4 py-2 border border-blue-700 border-solid backdrop-blur-xl bg-white bg-opacity-70 rounded-[48px]">
                  Terms of Service
                </div>
                <div className="grow justify-center px-4 py-2 border border-blue-700 border-solid backdrop-blur-xl bg-white bg-opacity-70 rounded-[48px]">
                  Privacy Policy
                </div>
              </div>
            </div>
          </div>
        </Stack>
      <div className="mt-7 max-w-full h-px bg-blue-700 w-[1144px]" />
      <div className="mt-8 text-xs leading-6 text-center whitespace-nowrap text-neutral-400">
        © 2024 GigConnect - All Rights Reserved.
      </div>
    </VStack>
  );
};