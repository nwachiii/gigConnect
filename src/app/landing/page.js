import React from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const LandingPage = () => {
  return (
    <Box>
      <VStack>
        <HStack
          justify={"space-between"}
          maxW={{ base: "full", md: "1144px" }}
          fontSize={"small"}
          w={"full"}
          flexWrap={{ base: "wrap", md: "unset" }}
          p={6}
        >
          <Image
            alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e3e404e12133fa241c13c34e21a6a900abdd5368f8fc120fe4ce068a3efe869?apiKey=79769cd1053a464cbdb4afd62642704d&"
            className="max-w-full aspect-[5] w-[164px]"
          />
          <HStack align={"center"} gap={4}>
            <Text fontWeight={600} className="text-zinc-800">
              Our Socials
            </Text>
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
            <FaXTwitter />
            <FaLinkedinIn />
          </HStack>
        </HStack>
        <VStack gap={6} mt={10}>
          <Heading
            fontFamily={"Inter"}
            fontSize={"xxx-large"}
            fontWeight={800}
            w={{ base: "full", md: "500px" }}
            textAlign={"center"}
          >
            Transforming the Way You Work
          </Heading>
          <Text fontSize={"large"}>
            We connect businesses to top talents all around Africa
          </Text>
          <HStack gap={3} align={"center"}>
            <Link href="/auth/sign-in">
              <Button px={4} py={6} color={"#fff"} background={"#262626"}>
                Sign In
              </Button>
            </Link>
            <Link href="/auth/create-account">
              <Button
                background={"#1d4ed8"}
                color={"#fff"}
                borderRadius={"xl"}
                px={4}
                py={6}
                className="text-stondiv0"
              >
                Create an Account
              </Button>
            </Link>
          </HStack>
          <Image
            alt=""
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a2644f8b0751bb4953b484b30b7b19e338265b45a683726e8e0e650a44939424?apiKey=79769cd1053a464cbdb4afd62642704d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2644f8b0751bb4953b484b30b7b19e338265b45a683726e8e0e650a44939424?apiKey=79769cd1053a464cbdb4afd62642704d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2644f8b0751bb4953b484b30b7b19e338265b45a683726e8e0e650a44939424?apiKey=79769cd1053a464cbdb4afd62642704d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2644f8b0751bb4953b484b30b7b19e338265b45a683726e8e0e650a44939424?apiKey=79769cd1053a464cbdb4afd62642704d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2644f8b0751bb4953b484b30b7b19e338265b45a683726e8e0e650a44939424?apiKey=79769cd1053a464cbdb4afd62642704d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2644f8b0751bb4953b484b30b7b19e338265b45a683726e8e0e650a44939424?apiKey=79769cd1053a464cbdb4afd62642704d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2644f8b0751bb4953b484b30b7b19e338265b45a683726e8e0e650a44939424?apiKey=79769cd1053a464cbdb4afd62642704d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2644f8b0751bb4953b484b30b7b19e338265b45a683726e8e0e650a44939424?apiKey=79769cd1053a464cbdb4afd62642704d&"
            maxW={{ base: "full", md: "980px" }}
            mt={4}
          />
        </VStack>
        <HStack
          border={"1px solid #E4E4E4"}
          borderRadius={16}
          px={3}
          py={2}
          justify={"space-between"}
          minW={"450px"}
        >
          <Text my={"auto"}>Search for talents</Text>
          <Image
            alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/70897acfe1af8117c1c0fba16f148b001f0a00eceed01d81b3a033686f7d87cf?apiKey=79769cd1053a464cbdb4afd62642704d&"
            maxW={"full"}
            minW={"150px"}
          />
        </HStack>
      </VStack>
      <VStack mt={10}>
        <Text fontWeight={500} className="text-zinc-700">
          Suggested search
        </Text>
        <Flex
          gap={2}
          flexWrap={"wrap"}
          maxW={"750px"}
          align={"center"}
          justify={"center"}
          fontSize={"14px"}
        >
          <Flex border={"1px solid #EDEEEF"} px={4} py={2} borderRadius={32}>
            Software Developer
          </Flex>
          <Flex border={"1px solid #EDEEEF"} px={4} py={2} borderRadius={32}>
            Product Designer
          </Flex>
          <Flex border={"1px solid #EDEEEF"} px={4} py={2} borderRadius={32}>
            Content Writer
          </Flex>
          <Flex border={"1px solid #EDEEEF"} px={4} py={2} borderRadius={32}>
            Social Media Manager
          </Flex>
          <Flex border={"1px solid #EDEEEF"} px={4} py={2} borderRadius={32}>
            Data Analysis
          </Flex>
          <Flex border={"1px solid #EDEEEF"} px={4} py={2} borderRadius={32}>
            Video Editor
          </Flex>
          <Flex border={"1px solid #EDEEEF"} px={4} py={2} borderRadius={32}>
            Graphic Designer
          </Flex>
        </Flex>
        <Text mt={{ base: 10, md: 20 }} color={"6B7280"} textAlign={"center"}>
          Trusted by:
        </Text>
        <HStack
          flexWrap={{ base: "wrap", md: "unset" }}
          align={"center"}
          gap={5}
          maxW={"710px"}
        >
          <Image
            alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bc86019e375b0e4549420b728cf174e10984a2d236cf1a24a3e094fc523a0cd?apiKey=79769cd1053a464cbdb4afd62642704d&"
          />
          <Image
            alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/71199560a0989cf53f65cc6d11c6e6d3b4cf1cf7ae44c7e4f7094af255563d0f?apiKey=79769cd1053a464cbdb4afd62642704d&"
          />
          <Image
            alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae0db319b5290940e5f263ba199176dec922bcb0d9b6e62f8fa5d5c5c9f1e394?apiKey=79769cd1053a464cbdb4afd62642704d&"
          />
          <Image
            alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d972321053e3e139e41a8c65e1cfffd8f2579abd8d421e9cb150883dc3d440e?apiKey=79769cd1053a464cbdb4afd62642704d&"
          />
        </HStack>
        <VStack
          px={{ base: 5, md: 16 }}
          mt={{ base: 10, md: 4 }}
          py={12}
          justify={"center"}
          align={"center"}
          background={"black"}
          w={"full"}
          borderRadius={"120px"}
        >
          <VStack maxW={"1145px"} mt={{ base: 10, md: 12 }} mb={10} w={"full"}>
            <Text
              textAlign={"center"}
              color={"#FCD34D"}
              px={4}
              py={2}
              border={"1px solid #e4e4e4"}
              rounded={"32px"}
              bg={"whiteAlpha-100"}
            >
              For Client
            </Text>
            <Heading
              fontFamily={"Inter"}
              fontSize={60}
              fontWeight={500}
              letterSpacing={{ base: "51px", md: "-0.05em" }}
              color={"white"}
              mt={6}
              textAlign={"center"}
              w={'650px'}
            >
              Find the perfect talent for your project
            </Heading>
            <Text mt={9} color={'whiteAlpha-100'} textAlign={'center'} fontSize={30} lineHeight={'2.5rem'}>
              Seamlessly connect with top-tier talent, ensuring that your project is in the hands of experts who can get the job done.
            </Text>
            <div className="px-px mt-14 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
                  <Image
                    alt=""
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9814faf2d5dced769d2cf487fbb3700c91e052f445858192ef70ece5eba11bda?apiKey=79769cd1053a464cbdb4afd62642704d&"
                    className="grow w-full aspect-[2.17] max-md:mt-7 max-md:max-w-full"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
                  <Image
                    alt=""
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f72864431763a5f6fbd27471a2e286b84d44cf63cfa59837643b3658df99efde?apiKey=79769cd1053a464cbdb4afd62642704d&"
                    className="grow w-full aspect-[1.11] max-md:mt-7"
                  />
                </div>
              </div>
            </div>
            <div className="px-px mt-7 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
                  <Image
                    alt=""
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d086d7baedaed0b07906bfe184f3c7b01ac245ad7bd597df0b6d48cc6dfe1bcf?apiKey=79769cd1053a464cbdb4afd62642704d&"
                    className="grow w-full aspect-[1.11] max-md:mt-7"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
                  <Image
                    alt=""
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d2f8b590e942c3b61fa17d016091f92c206ddfab5d1d96e27a9c918090d8810?apiKey=79769cd1053a464cbdb4afd62642704d&"
                    className="grow w-full aspect-[2.17] max-md:mt-7 max-md:max-w-full"
                  />
                </div>
              </div>
            </div>
            <div className="mt-14 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-end items-start py-5 pr-20 pl-6 w-full text-sm leading-5 text-white whitespace-nowrap bg-stone-950 rounded-[32px] max-md:px-5 max-md:mt-8">
                    <Image
                      alt=""
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c32416a03253b668cb4d6e01433006e99d83b5606c802034c46dba0109e8bd7?apiKey=79769cd1053a464cbdb4afd62642704d&"
                      className="w-12 aspect-square"
                    />
                    <div className="justify-center px-4 py-1.5 mt-24 bg-blue-700 rounded-xl shadow-sm max-md:mt-10">
                      Talent Marketplace
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-end items-start py-5 pr-20 pl-6 w-full text-sm leading-5 text-white whitespace-nowrap bg-stone-950 rounded-[32px] max-md:px-5 max-md:mt-8">
                    <Image
                      alt=""
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f04539c635e05852a8af5503d97b77a637133100aa0f8a00cb3d13f124299aef?apiKey=79769cd1053a464cbdb4afd62642704d&"
                      className="w-12 aspect-square"
                    />
                    <div className="justify-center px-4 py-1.5 mt-24 bg-blue-700 rounded-xl shadow-sm max-md:mt-10">
                      Project Management
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-end items-start py-5 pr-20 pl-6 w-full text-sm leading-5 text-white bg-stone-950 rounded-[32px] max-md:px-5 max-md:mt-8">
                    <Image
                      alt=""
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2433b9a43a87c59b2aba5c8c0b4b9614da118fdd63fc566213cef35af94b7573?apiKey=79769cd1053a464cbdb4afd62642704d&"
                      className="w-12 aspect-square"
                    />
                    <div className="justify-center px-4 py-1.5 mt-24 bg-blue-700 rounded-xl shadow-sm max-md:mt-10">
                      Read More
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </VStack>
        </VStack>
        <div className='justify-center px-4 py-2 mt-28 text-lg font-medium leading-5 text-center text-blue-700 whitespace-nowrap bg-white border-solid backdrop-blur-xl border-[1.5px] border-[color:var(--Foundation-Grey-grey-50,#EDEEEF)] rounded-[32px] max-md:mt-10'>Why GigConnect</div>
			<div className='mt-6 text-6xl font-medium tracking-tighter text-center text-black leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]'>
				Why GigConnect
				<br />
				is the right choice
				<br />
				for your business
			</div>
			<div className='mt-9 w-full max-w-[1144px] max-md:max-w-full'>
				<div className='flex gap-5 max-md:flex-col max-md:gap-0 max-md:'>
					<div className='flex flex-col w-[62%] max-md:ml-0 max-md:w-full'>
						<div className='flex flex-col grow max-md:mt-6 max-md:max-w-full'>
							<div className='pb-9 pl-6 bg-neutral-100 rounded-[32px] max-md:pl-5 max-md:max-w-full'>
								<div className='flex gap-5 max-md:flex-col max-md:gap-0 max-md:'>
									<div className='flex flex-col w-[64%] max-md:ml-0 max-md:w-full'>
										<div className='flex z-10 flex-col grow mt-44 text-zinc-800 max-md:mt-10 max-md:max-w-full'>
											<div className='text-3xl font-medium tracking-tighter leading-10 max-md:max-w-full'>Access to Top Talents</div>
											<div className='mt-4 text-base leading-6 max-md:max-w-full'>
												We connect you to a diverse pool of top-tier freelancers
												<br />
												from all around Africa, ensuring that you can find professionals
												<br />
												with the right skills and expertise for your projects.
											</div>
										</div>
									</div>
									<div className='flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full'>
										<Image alt='' loading='lazy' src='https://cdn.builder.io/api/v1/image/assets/TEMP/e6d6a5a3c2bb9f32767c786e0a59b52141822a225ef43094339e75e68c58eb53?apiKey=79769cd1053a464cbdb4afd62642704d&' className='w-full aspect-[1.37]' />
									</div>
								</div>
							</div>
							<div className='mt-7 max-md:max-w-full'>
								<div className='flex gap-5 max-md:flex-col max-md:gap-0 max-md:'>
									<div className='flex flex-col w-6/12 max-md:ml-0 max-md:w-full'>
										<div className='flex flex-col grow px-6 py-11 w-full bg-neutral-100 rounded-[32px] text-zinc-800 max-md:px-5 max-md:mt-6'>
											<div className='mt-12 text-3xl font-medium tracking-tighter leading-10 max-md:mt-10'>
												Complete projects
												<br />
												within budget
											</div>
											<div className='mt-4 text-base leading-6'>
												Negotiate rates and avoid
												<br />
												the overhead costs associated
												<br />
												with traditional hiring. Pay for only
												<br />
												work you approve.
											</div>
										</div>
									</div>
									<div className='flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full'>
										<div className='flex flex-col grow px-8 py-11 w-full bg-neutral-100 rounded-[32px] text-zinc-800 max-md:px-5 max-md:mt-6'>
											<div className='mt-6 text-3xl font-medium tracking-tighter leading-10'>
												Your data
												<br />
												is safe here
											</div>
											<div className='mt-4 text-base leading-6'>
												Enjoy the peace of mind
												<br />
												that comes with our safe
												<br />
												and secure platform. Your data
												<br />
												and privacy is protected, ensuring
												<br />a worry-free experience.
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full'>
						<Image alt='' loading='lazy' src='https://cdn.builder.io/api/v1/image/assets/TEMP/409996d426fddddd02b231f56369b4d6e84c10744b484ac50f9e5716befd16ea?apiKey=79769cd1053a464cbdb4afd62642704d&' className='grow w-full aspect-[0.6] max-md:mt-6 max-md:max-w-full' />
					</div>
				</div>
			</div>
			<div className='justify-center px-4 py-2 mt-36 text-lg font-medium leading-5 text-center text-green-500 whitespace-nowrap bg-white border-solid backdrop-blur-xl border-[1.5px] border-[color:var(--Foundation-Grey-grey-50,#EDEEEF)] rounded-[32px] max-md:mt-10'>For Talent</div>
			<div className='mt-6 text-6xl font-medium tracking-tighter text-center text-black leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]'>
				Discover Exciting
				<br />
				Opportunities
			</div>
			<div className='mt-10 text-3xl leading-10 text-center text-gray-800 max-md:max-w-full'>Work with clients from around the world and broaden your professional network.</div>
			<div className='mt-10 w-full max-w-[1144px] max-md:max-w-full'>
				<div className='flex gap-5 max-md:flex-col max-md:gap-0 max-md:'>
					<div className='flex flex-col w-[38%] max-md:ml-0 max-md:w-full'>
						<div className='flex flex-col grow justify-center py-px w-full bg-neutral-100 rounded-[32px] max-md:mt-6 max-md:max-w-full'>
							<Image
								alt=''
								loading='lazy'
								srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/b9a7e10e7a50955b49fdfafbb51ea136fb4da47e08176229577156ab369b8183?apiKey=79769cd1053a464cbdb4afd62642704d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9a7e10e7a50955b49fdfafbb51ea136fb4da47e08176229577156ab369b8183?apiKey=79769cd1053a464cbdb4afd62642704d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9a7e10e7a50955b49fdfafbb51ea136fb4da47e08176229577156ab369b8183?apiKey=79769cd1053a464cbdb4afd62642704d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9a7e10e7a50955b49fdfafbb51ea136fb4da47e08176229577156ab369b8183?apiKey=79769cd1053a464cbdb4afd62642704d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9a7e10e7a50955b49fdfafbb51ea136fb4da47e08176229577156ab369b8183?apiKey=79769cd1053a464cbdb4afd62642704d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9a7e10e7a50955b49fdfafbb51ea136fb4da47e08176229577156ab369b8183?apiKey=79769cd1053a464cbdb4afd62642704d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9a7e10e7a50955b49fdfafbb51ea136fb4da47e08176229577156ab369b8183?apiKey=79769cd1053a464cbdb4afd62642704d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9a7e10e7a50955b49fdfafbb51ea136fb4da47e08176229577156ab369b8183?apiKey=79769cd1053a464cbdb4afd62642704d&'
								className='w-full aspect-[0.6] max-md:max-w-full'
							/>
						</div>
					</div>
					<div className='flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full'>
						<div className='flex flex-col grow max-md:mt-6 max-md:max-w-full'>
							<div className='pt-8 pl-7 bg-neutral-100 rounded-[32px] max-md:pl-5 max-md:max-w-full'>
								<div className='flex gap-5 max-md:flex-col max-md:gap-0 max-md:'>
									<div className='flex flex-col w-[42%] max-md:ml-0 max-md:w-full'>
										<div className='mt-48 text-2xl font-medium leading-8 text-zinc-800 max-md:mt-10'>
											Explore opportunities
											<br />
											that matches your skills
											<br />
											and expertise
										</div>
									</div>
									<div className='flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full'>
										<Image alt='' loading='lazy' src='https://cdn.builder.io/api/v1/image/assets/TEMP/bf95d25f8b8757fc9da9ae21c579621126b17fbe1e70d9260eb9a573b73a79f4?apiKey=79769cd1053a464cbdb4afd62642704d&' className='grow w-full aspect-[1.19] max-md:mt-10' />
									</div>
								</div>
							</div>
							<div className='mt-7 max-md:max-w-full'>
								<div className='flex gap-5 max-md:flex-col max-md:gap-0 max-md:'>
									<div className='flex flex-col w-6/12 max-md:ml-0 max-md:w-full'>
										<Image alt='' loading='lazy' src='https://cdn.builder.io/api/v1/image/assets/TEMP/273367c1694948d1a169475c66e7d7d6424cec2b8a0b9ed1ff91705b029715f7?apiKey=79769cd1053a464cbdb4afd62642704d&' className='grow w-full aspect-[0.99] max-md:mt-6' />
									</div>
									<div className='flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full'>
										<Image alt='' loading='lazy' src='https://cdn.builder.io/api/v1/image/assets/TEMP/c611ab0ce8bf285c3b36982cf736a9151f752edec40b40ad38bca2483edd4ee0?apiKey=79769cd1053a464cbdb4afd62642704d&' className='grow w-full aspect-[0.99] max-md:mt-6' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='flex gap-2 px-4 py-1.5 mt-10 text-sm leading-5 text-white whitespace-nowrap bg-blue-700 rounded-xl shadow-sm'>
				<div className='grow my-auto'>Find Opportunities</div>
				<Image alt='' loading='lazy' src='https://cdn.builder.io/api/v1/image/assets/TEMP/618600eca5e691b135d74fefe2da220e5855a26abe62081410d778cc58dfafdf?apiKey=79769cd1053a464cbdb4afd62642704d&' className='w-6 aspect-square' />
			</div>
			<div className='flex justify-center items-center self-stretch px-16 py-12 mt-36 w-full bg-neutral-100 rounded-[120px] max-md:px-5 max-md:mt-10 max-md:max-w-full'>
				<div className='flex flex-col mt-5 mb-10 max-w-full w-[978px]'>
					<div className='justify-center self-center px-4 py-2 text-lg font-medium leading-5 text-center text-violet-500 whitespace-nowrap bg-white border-solid backdrop-blur-xl border-[1.5px] border-[color:var(--Foundation-Grey-grey-50,#EDEEEF)] rounded-[32px]'>Hire top talents now!</div>
					<div className='self-center mt-6 text-6xl font-medium tracking-tighter text-center text-black leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]'>
						Browse by category
						<br />
						and find talents
					</div>
					<div className='mt-14 max-md:mt-10 max-md:max-w-full'>
						<div className='flex gap-5 max-md:flex-col max-md:gap-0 max-md:'>
							<div className='flex flex-col w-3/12 max-md:ml-0 max-md:w-full'>
								<div className='flex flex-col grow justify-center max-md:mt-5'>
									<div className='flex flex-col items-start py-5 pr-20 pl-5 rounded-3xl border border-solid bg-white bg-opacity-50 border-[color:var(--Foundation-Grey-grey-50,#EDEEEF)] max-md:pr-5'>
										<div className='text-lg font-medium leading-7 text-stone-950'>
											Development
											<br />& IT
										</div>
										<div className='justify-center px-4 py-2 mt-12 text-base leading-5 text-center whitespace-nowrap rounded-xl border border-solid backdrop-blur-xl bg-white bg-opacity-70 border-gray-100 border-opacity-60 text-zinc-800 max-md:mt-10'>783 Talents</div>
									</div>
								</div>
							</div>
							<div className='flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full'>
								<div className='flex flex-col grow justify-center max-md:mt-5'>
									<div className='flex flex-col items-start py-5 pr-20 pl-5 bg-gray-100 rounded-3xl border border-solid border-[color:var(--Foundation-Grey-grey-100,#C8CACE)] max-md:pr-5'>
										<div className='text-lg font-medium leading-7 text-stone-950'>Finance &Accounting</div>
										<div className='justify-center px-4 py-2 mt-12 text-base leading-5 text-center whitespace-nowrap rounded-xl border border-solid backdrop-blur-xl bg-white bg-opacity-70 border-gray-100 border-opacity-60 text-zinc-800 max-md:mt-10'>783 Talents</div>
									</div>
								</div>
							</div>
							<div className='flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full'>
								<div className='flex flex-col grow justify-center max-md:mt-5'>
									<div className='flex flex-col items-start py-5 pr-20 pl-5 rounded-3xl border border-solid bg-white bg-opacity-50 border-[color:var(--Foundation-Grey-grey-50,#EDEEEF)] max-md:pr-5'>
										<div className='text-lg font-medium leading-7 text-stone-950'>
											Design
											<br />& Creative
										</div>
										<div className='justify-center px-4 py-2 mt-12 text-base leading-5 text-center whitespace-nowrap rounded-xl border border-solid backdrop-blur-xl bg-white bg-opacity-70 border-gray-100 border-opacity-60 text-zinc-800 max-md:mt-10'>783 Talents</div>
									</div>
								</div>
							</div>
							<div className='flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full'>
								<div className='flex flex-col grow justify-center max-md:mt-5'>
									<div className='flex flex-col items-start py-5 pr-20 pl-4 rounded-3xl border border-solid bg-white bg-opacity-50 border-[color:var(--Foundation-Grey-grey-50,#EDEEEF)] max-md:pr-5'>
										<div className='text-lg font-medium leading-7 text-stone-950'>Data & Analytics</div>
										<div className='justify-center px-4 py-2 mt-12 text-base leading-5 text-center whitespace-nowrap rounded-xl border border-solid backdrop-blur-xl bg-white bg-opacity-70 border-gray-100 border-opacity-60 text-zinc-800 max-md:mt-10'>783 Talents</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='mt-5 max-md:max-w-full'>
						<div className='flex gap-5 max-md:flex-col max-md:gap-0 max-md:'>
							<div className='flex flex-col w-3/12 max-md:ml-0 max-md:w-full'>
								<div className='flex flex-col grow justify-center max-md:mt-5'>
									<div className='flex flex-col items-start py-6 pr-20 pl-5 rounded-3xl border border-solid bg-white bg-opacity-50 border-[color:var(--Foundation-Grey-grey-50,#EDEEEF)] max-md:pr-5'>
										<div className='text-lg font-medium leading-7 text-stone-950'>
											Sales
											<br />& Marketing
										</div>
										<div className='justify-center px-4 py-2 mt-12 text-base leading-5 text-center whitespace-nowrap rounded-xl border border-solid backdrop-blur-xl bg-white bg-opacity-70 border-gray-100 border-opacity-60 text-zinc-800 max-md:mt-10'>783 Talents</div>
									</div>
								</div>
							</div>
							<div className='flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full'>
								<div className='flex flex-col grow justify-center max-md:mt-5'>
									<div className='flex flex-col items-start py-5 pr-20 pl-5 rounded-3xl border border-solid bg-white bg-opacity-50 border-[color:var(--Foundation-Grey-grey-50,#EDEEEF)] max-md:pr-5'>
										<div className='text-lg font-medium leading-7 text-stone-950'>
											Writing
											<br />& Translation
										</div>
										<div className='justify-center px-4 py-2 mt-12 text-base leading-5 text-center whitespace-nowrap rounded-xl border border-solid backdrop-blur-xl bg-white bg-opacity-70 border-gray-100 border-opacity-60 text-zinc-800 max-md:mt-10'>783 Talents</div>
									</div>
								</div>
							</div>
							<div className='flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full'>
								<div className='flex flex-col grow justify-center max-md:mt-5'>
									<div className='flex flex-col py-5 pr-12 pl-5 rounded-3xl border border-solid bg-white bg-opacity-50 border-[color:var(--Foundation-Grey-grey-50,#EDEEEF)] max-md:pr-5'>
										<div className='text-lg font-medium leading-7 text-stone-950'>
											Admin & Customer
											<br />
											Support
										</div>
										<div className='justify-center px-4 py-2 mt-12 text-base leading-5 text-center rounded-xl border border-solid backdrop-blur-xl bg-white bg-opacity-70 border-gray-100 border-opacity-60 text-zinc-800 max-md:mt-10'>783 Talents</div>
									</div>
								</div>
							</div>
							<div className='flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full'>
								<div className='flex flex-col grow justify-center max-md:mt-5'>
									<div className='flex flex-col items-start py-5 pr-20 pl-5 rounded-3xl border border-solid bg-white bg-opacity-50 border-[color:var(--Foundation-Grey-grey-50,#EDEEEF)] max-md:pr-5'>
										<div className='text-lg font-medium leading-7 text-stone-950'>
											Engineering &<br />
											Architecture
										</div>
										<div className='justify-center px-4 py-2 mt-12 text-base leading-5 text-center whitespace-nowrap rounded-xl border border-solid backdrop-blur-xl bg-white bg-opacity-70 border-gray-100 border-opacity-60 text-zinc-800 max-md:mt-10'>783 Talents</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='flex gap-5 justify-between mt-11 w-full leading-[143%] max-md:flex-wrap max-md:mt-10 max-md:max-w-full'>
						<div className='flex-auto text-3xl text-gray-800'>Looking for work?</div>
						<div className='flex gap-2 justify-between px-4 py-1.5 text-sm text-white whitespace-nowrap bg-blue-700 rounded-xl shadow-sm'>
							<div className='grow my-auto'>Find Opportunities</div>
							<Image alt='' loading='lazy' src='https://cdn.builder.io/api/v1/image/assets/TEMP/618600eca5e691b135d74fefe2da220e5855a26abe62081410d778cc58dfafdf?apiKey=79769cd1053a464cbdb4afd62642704d&' className='w-6 aspect-square' />
						</div>
					</div>
				</div>
			</div>
			<div className='flex justify-center items-center px-16 pt-12 mt-28 w-full bg-neutral-100 max-w-[1144px] rounded-[32px] max-md:px-5 max-md:mt-10 max-md:max-w-full'>
				<div className='flex flex-col mt-6 max-w-full w-[872px]'>
					<div className='justify-center self-center px-4 py-2 text-lg font-medium leading-5 text-center text-blue-400 whitespace-nowrap bg-white border-solid backdrop-blur-xl border-[1.5px] border-[color:var(--Foundation-Grey-grey-50,#EDEEEF)] rounded-[32px]'>Be Mobile</div>
					<div className='mt-6 text-6xl font-medium tracking-tighter text-center text-black leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]'>
						Download the Talent app
						<br />
						and stay updated on your journey
					</div>
					<div className='flex z-10 gap-4 justify-center self-center mt-6 max-w-full w-[428px] max-md:flex-wrap'>
						<Image alt='' loading='lazy' src='https://cdn.builder.io/api/v1/image/assets/TEMP/cbf3cfdf0a58504122fbb1c39ddd593a94815c315f6c921c9295ebd15f0f18b5?apiKey=79769cd1053a464cbdb4afd62642704d&' className='flex-1 shrink-0 w-full backdrop-blur-xl aspect-[3.45] fill-white stroke-[1.5px] stroke-gray-100' />
						<Image alt='' loading='lazy' src='https://cdn.builder.io/api/v1/image/assets/TEMP/b1eb74f6d39f8af8f4ed5f6f990943b03373c9fb51c43b8706f78bd3f8819500?apiKey=79769cd1053a464cbdb4afd62642704d&' className='flex-1 shrink-0 w-full backdrop-blur-xl aspect-[3.45] fill-white stroke-[1.5px] stroke-gray-100' />
					</div>
					<Image
						alt=''
						loading='lazy'
						srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/78c7eca5a363369f1a4a694677077b53b4ad327551fa23a553baccb720c179a7?apiKey=79769cd1053a464cbdb4afd62642704d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/78c7eca5a363369f1a4a694677077b53b4ad327551fa23a553baccb720c179a7?apiKey=79769cd1053a464cbdb4afd62642704d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/78c7eca5a363369f1a4a694677077b53b4ad327551fa23a553baccb720c179a7?apiKey=79769cd1053a464cbdb4afd62642704d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/78c7eca5a363369f1a4a694677077b53b4ad327551fa23a553baccb720c179a7?apiKey=79769cd1053a464cbdb4afd62642704d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/78c7eca5a363369f1a4a694677077b53b4ad327551fa23a553baccb720c179a7?apiKey=79769cd1053a464cbdb4afd62642704d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/78c7eca5a363369f1a4a694677077b53b4ad327551fa23a553baccb720c179a7?apiKey=79769cd1053a464cbdb4afd62642704d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/78c7eca5a363369f1a4a694677077b53b4ad327551fa23a553baccb720c179a7?apiKey=79769cd1053a464cbdb4afd62642704d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/78c7eca5a363369f1a4a694677077b53b4ad327551fa23a553baccb720c179a7?apiKey=79769cd1053a464cbdb4afd62642704d&'
						className='mx-7 mt-0 max-w-full aspect-[1.09] w-[820px] max-md:mr-2.5'
					/>
				</div>
			</div>
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
      </VStack>
    </Box>
  );
};

export default LandingPage;
