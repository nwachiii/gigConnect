/* eslint-disable @next/next/no-Image-element */
import React from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  SimpleGrid,
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
              w={"650px"}
            >
              Find the perfect talent for your project
            </Heading>
            <Text
              mt={9}
              color={"whiteAlpha-100"}
              textAlign={"center"}
              fontSize={30}
              lineHeight={"2.5rem"}
            >
              Seamlessly connect with top-tier talent, ensuring that your
              project is in the hands of experts who can get the job done.
            </Text>
            <VStack mt={{ base: 10, md: 14 }} gap={7}>
              <Stack direction={{ base: "column", md: "row" }} gap={5}>
                <Flex width={{ base: "full", md: "66%" }}>
                  <Image
                    alt=""
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9814faf2d5dced769d2cf487fbb3700c91e052f445858192ef70ece5eba11bda?apiKey=79769cd1053a464cbdb4afd62642704d&"
                    className="grow w-full aspect-[2.17] max-md:mt-7 max-md:max-w-full"
                  />
                </Flex>
                <Flex width={{ base: "full", md: "34%" }}>
                  <Image
                    alt=""
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f72864431763a5f6fbd27471a2e286b84d44cf63cfa59837643b3658df99efde?apiKey=79769cd1053a464cbdb4afd62642704d&"
                    className="grow w-full aspect-[1.11] max-md:mt-7"
                  />
                </Flex>
              </Stack>
              <Stack direction={{ base: "column", md: "row" }} gap={5}>
                <Flex width={{ base: "full", md: "34%" }}>
                  <Image
                    alt=""
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d086d7baedaed0b07906bfe184f3c7b01ac245ad7bd597df0b6d48cc6dfe1bcf?apiKey=79769cd1053a464cbdb4afd62642704d&"
                    className="grow w-full aspect-[1.11] max-md:mt-7"
                  />
                </Flex>
                <Flex width={{ base: "full", md: "66%" }}>
                  <Image
                    alt=""
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d2f8b590e942c3b61fa17d016091f92c206ddfab5d1d96e27a9c918090d8810?apiKey=79769cd1053a464cbdb4afd62642704d&"
                    className="grow w-full aspect-[2.17] max-md:mt-7 max-md:max-w-full"
                  />
                </Flex>
              </Stack>
              <Stack
                direction={{ base: "column", md: "row" }}
                gap={5}
                mt={{ base: 10, md: 14 }}
                justify={"center"}
                w={"full"}
                maxW={"900px"}
              >
                <Flex w={"full"}>
                  <VStack
                    grow
                    justify="space-between"
                    alignItems="start"
                    py="5"
                    pr={{ base: 5, md: 20 }}
                    pl={{ base: 5, md: 6 }}
                    w="full"
                    fontSize="sm"
                    lineHeight="5"
                    color="white"
                    bg="#0D0D0D"
                    rounded="32px"
                    mt={{ base: 8, md: "unset" }}
                    h={"220px"}
                  >
                    <Image
                      alt=""
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c32416a03253b668cb4d6e01433006e99d83b5606c802034c46dba0109e8bd7?apiKey=79769cd1053a464cbdb4afd62642704d&"
                      className="w-12 aspect-square"
                    />
                    <Text
                      background={"#053AF9"}
                      px={4}
                      borderRadius={"xl"}
                      boxShadow={"sm"}
                      py={2}
                    >
                      Talent Marketplace
                    </Text>
                  </VStack>
                </Flex>
                <Flex w={"full"}>
                  <VStack
                    grow
                    justify="space-between"
                    alignItems="start"
                    py="5"
                    pr={{ base: 5, md: 20 }}
                    pl={{ base: 5, md: 6 }}
                    w="full"
                    fontSize="sm"
                    lineHeight="5"
                    color="white"
                    bg="#0D0D0D"
                    rounded="32px"
                    mt={{ base: 8, md: "unset" }}
                    h={"220px"}
                  >
                    <Image
                      alt=""
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f04539c635e05852a8af5503d97b77a637133100aa0f8a00cb3d13f124299aef?apiKey=79769cd1053a464cbdb4afd62642704d&"
                      className="w-12 aspect-square"
                    />
                    <Text
                      background={"#053AF9"}
                      px={4}
                      borderRadius={"xl"}
                      boxShadow={"sm"}
                      py={2}
                    >
                      Project Management
                    </Text>
                  </VStack>
                </Flex>
                <Flex w={"full"}>
                  <VStack
                    grow
                    justify="space-between"
                    alignItems="start"
                    py={5}
                    pr={{ base: 5, md: 20 }}
                    pl={{ base: 5, md: 6 }}
                    w="full"
                    fontSize="sm"
                    lineHeight="5"
                    color="white"
                    bg="#0D0D0D"
                    rounded="32px"
                    mt={{ base: 8, md: "unset" }}
                    h={"220px"}
                  >
                    <Image
                      alt=""
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2433b9a43a87c59b2aba5c8c0b4b9614da118fdd63fc566213cef35af94b7573?apiKey=79769cd1053a464cbdb4afd62642704d&"
                      className="w-12 aspect-square"
                    />
                    <Text
                      background={"#053AF9"}
                      px={4}
                      borderRadius={"xl"}
                      boxShadow={"sm"}
                      py={2}
                    >
                      Read More
                    </Text>
                  </VStack>
                </Flex>
              </Stack>
            </VStack>
          </VStack>
        </VStack>
        <VStack>
          <Text
            textAlign={"center"}
            px={4}
            py={2}
            mt={{ base: 10, md: 20 }}
            fontSize={"large"}
            fontWeight={500}
            lineHeight={5}
            color={"#053AF9"}
            whiteSpace={"nowrap"}
            border={"1.5px solid #EDEEEF"}
            borderRadius={"2xl"}
            backdropBlur={"24px"}
          >
            Why GigConnect
          </Text>
          <Text
            mt={6}
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="medium"
            letterSpacing="tighter"
            textAlign="center"
            color="black"
            lineHeight={{ base: "51px", md: "64px" }}
            maxW={{ base: "full", md: "475px" }}
          >
            Why GigConnect is the right choice for your business
          </Text>
          <Box mt={9} maxW={{ base: "full", md: "1144px" }} w={"full"}>
            <Stack direction={{ base: "column", md: "row" }} gap={5}>
              <VStack
                w={{ base: "full", md: "62%" }}
                direction={"column"}
                mt={{ base: 0, md: 6 }}
                gap={5}
              >
                <Box
                  borderRadius={"32px"}
                  pb={9}
                  pl={{ base: 5, md: 6 }}
                  background={"#F6F7F7"}
                  w={"full"}
                >
                  <Flex gap={5} direction={{ base: "column", md: "row" }}>
                    <VStack
                      color={"#22262F"}
                      mt={{ base: 10, md: 44 }}
                      grow
                      w={"64%"}
                      align={"start"}
                    >
                      <Text
                        fontSize={"30px"}
                        letterSpacing={"tighter"}
                        fontWeight={500}
                      >
                        Access to Top Talents
                      </Text>
                      <Text mt={4} lineHeight={6}>
                        We connect you to a diverse pool of top-tier freelancers
                        from all around Africa, ensuring that you can find
                        professionals with the right skills and expertise for
                        your projects.
                      </Text>
                    </VStack>
                    <Flex w={"36%"} ml={5} direction={"column"}>
                      <Image
                        alt=""
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6d6a5a3c2bb9f32767c786e0a59b52141822a225ef43094339e75e68c58eb53?apiKey=79769cd1053a464cbdb4afd62642704d&"
                        w={"full"}
                      />
                    </Flex>
                  </Flex>
                </Box>
                <Stack direction={{ base: "column", md: "row" }} gap={5}>
                  <VStack
                    justify={"end"}
                    px={{ base: 5, md: 6 }}
                    color={"#22262F"}
                    py={{ base: 5, md: 11 }}
                    w={"full"}
                    borderRadius={"32px"}
                    background={"#F6F7F7"}
                    mt={{ base: 0, md: 6 }}
                    minH={"340px"}
                  >
                    <Text
                      fontWeight={500}
                      fontSize={"30px"}
                      letterSpacing={"tighter"}
                      lineHeight={10}
                    >
                      Complete projects within budget
                    </Text>
                    <Text>
                      Negotiate rates and avoid the overhead costs associated
                      with traditional hiring. Pay for only work you approve.
                    </Text>
                  </VStack>
                  <VStack
                    justify={"end"}
                    px={{ base: 5, md: 6 }}
                    color={"#22262F"}
                    py={{ base: 5, md: 11 }}
                    w={"full"}
                    borderRadius={"32px"}
                    background={"#F6F7F7"}
                    mt={{ base: 0, md: 6 }}
                    minH={"340px"}
                  >
                    <Text
                      fontWeight={500}
                      fontSize={"30px"}
                      letterSpacing={"tighter"}
                      lineHeight={10}
                    >
                      Your data is safe here
                    </Text>
                    <Text>
                      Enjoy the peace of mind that comes with our safe and
                      secure platform. Your data and privacy is protected,
                      ensuring a worry-free experience.
                    </Text>
                  </VStack>
                </Stack>
              </VStack>
              <Flex w={{ base: "full", md: "38%" }} ml={{ base: 0, md: 5 }}>
                <Image
                  alt=""
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/409996d426fddddd02b231f56369b4d6e84c10744b484ac50f9e5716befd16ea?apiKey=79769cd1053a464cbdb4afd62642704d&"
                  className="grow w-full aspect-[0.6] max-md:max-w-full"
                />
              </Flex>
            </Stack>
          </Box>
          <VStack gap={10}>
            <Text
              px={4}
              py={2}
              textAlign={"center"}
              fontSize={18}
              mt={{ base: 10, md: 36 }}
              color={"#27AE60"}
              whiteSpace={"nowrap"}
              border={"1.5px solid #EDEEEF"}
              backdropBlur={"24px"}
              borderRadius={"32px"}
              lineHeight={5}
            >
              For Talent
            </Text>
            <Heading
              fontFamily={"Inter"}
              fontSize={{ base: "36px", md: "60px" }}
              lineHeight={{ base: "50px", md: "64px" }}
              textAlign={"center"}
              maxW={{ base: "full", md: "600px" }}
              fontWeight={500}
            >
              Discover Exciting Opportunities
            </Heading>
            <Text
              fontSize={"30px"}
              textAlign={"center"}
              color={"#2A2E35"}
              lineHeight={10}
              maxW={{ base: "full", md: "600px" }}
            >
              Work with clients from around the world and broaden your
              professional network.
            </Text>
          </VStack>
          <Stack
            display={"flex"}
            maxW={{ base: "full", md: "1144px" }}
            mt={10}
            w={"full"}
          >
            <Stack flexDirection={{ base: "column", md: "row" }} gap={5}>
              <Flex width={{ base: "full", md: "38%" }}>
                <Image
                  alt=""
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b9a7e10e7a50955b49fdfafbb51ea136fb4da47e08176229577156ab369b8183?apiKey=79769cd1053a464cbdb4afd62642704d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9a7e10e7a50955b49fdfafbb51ea136fb4da47e08176229577156ab369b8183?apiKey=79769cd1053a464cbdb4afd62642704d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9a7e10e7a50955b49fdfafbb51ea136fb4da47e08176229577156ab369b8183?apiKey=79769cd1053a464cbdb4afd62642704d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9a7e10e7a50955b49fdfafbb51ea136fb4da47e08176229577156ab369b8183?apiKey=79769cd1053a464cbdb4afd62642704d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9a7e10e7a50955b49fdfafbb51ea136fb4da47e08176229577156ab369b8183?apiKey=79769cd1053a464cbdb4afd62642704d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9a7e10e7a50955b49fdfafbb51ea136fb4da47e08176229577156ab369b8183?apiKey=79769cd1053a464cbdb4afd62642704d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9a7e10e7a50955b49fdfafbb51ea136fb4da47e08176229577156ab369b8183?apiKey=79769cd1053a464cbdb4afd62642704d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9a7e10e7a50955b49fdfafbb51ea136fb4da47e08176229577156ab369b8183?apiKey=79769cd1053a464cbdb4afd62642704d&"
                  borderRadius={"32px"}
                  w={"full"}
                  objectFit={"cover"}
                />
              </Flex>
              <VStack
                w={{ base: "full", md: "62%" }}
                ml={{ base: 0, md: 5 }}
                gap={5}
              >
                <Stack
                  direction={{ base: "column", md: "row" }}
                  background={"#F6F7F7"}
                  pt={8}
                  pl={{ base: 5, md: 7 }}
                  borderRadius={"32px"}
                  align={"end"}
                >
                  <Flex w={{ base: "full", md: "42%" }} pb={{ base: 0, md: 4 }}>
                    <Text fontSize={24} color={"#22262F"}>
                      Explore opportunities that matches your skills and
                      expertise
                    </Text>
                  </Flex>
                  <Flex
                    w={{ base: "full", base: "58%" }}
                    ml={{ base: 0, md: 5 }}
                  >
                    <Image
                      alt=""
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf95d25f8b8757fc9da9ae21c579621126b17fbe1e70d9260eb9a573b73a79f4?apiKey=79769cd1053a464cbdb4afd62642704d&"
                      className="grow w-full aspect-[1.19] max-md:mt-10"
                    />
                  </Flex>
                </Stack>
                <Stack direction={{ base: "column", md: "row" }} gap={5}>
                  <Flex w={{ base: "full", md: "50%" }}>
                    <Image
                      alt=""
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/273367c1694948d1a169475c66e7d7d6424cec2b8a0b9ed1ff91705b029715f7?apiKey=79769cd1053a464cbdb4afd62642704d&"
                      w={"full"}
                      mt={{ base: 6, md: 0 }}
                    />
                  </Flex>
                  <Flex w={{ base: "full", md: "50%" }}>
                    <Image
                      alt=""
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c611ab0ce8bf285c3b36982cf736a9151f752edec40b40ad38bca2483edd4ee0?apiKey=79769cd1053a464cbdb4afd62642704d&"
                      w={"full"}
                      mt={{ base: 6, md: 0 }}
                    />
                  </Flex>
                </Stack>
              </VStack>
            </Stack>
            <Button
              display={"flex"}
              gap={2}
              py={2}
              px={4}
              fontSize={"small"}
              fontWeight={400}
              boxShadow={"sm"}
              borderRadius={"12px"}
              alignSelf={"center"}
              background={"#053AF9"}
            >
              <Text color={"#fff"} my={"auto"}>
                Find Opportunities
              </Text>
              <Image
                alt=""
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/618600eca5e691b135d74fefe2da220e5855a26abe62081410d778cc58dfafdf?apiKey=79769cd1053a464cbdb4afd62642704d&"
                w={6}
              />
            </Button>
          </Stack>

          {/* <div className="flex justify-center items-center px-16 pt-12 mt-28 w-full bg-neutral-100 max-w-[1144px] rounded-[32px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col mt-6 max-w-full w-[872px]">
              <div className="justify-center self-center px-4 py-2 text-lg font-medium leading-5 text-center text-blue-400 whitespace-nowrap bg-white border-solid backdrop-blur-xl border-[1.5px] border-[color:var(--Foundation-Grey-grey-50,#EDEEEF)] rounded-[32px]">
                Be Mobile
              </div>
              <div className="mt-6 text-6xl font-medium tracking-tighter text-center text-black leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
                Download the Talent app
                <br />
                and stay updated on your journey
              </div>
              <div className="flex z-10 gap-4 justify-center self-center mt-6 max-w-full w-[428px] max-md:flex-wrap">
                <Image
                  alt=""
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbf3cfdf0a58504122fbb1c39ddd593a94815c315f6c921c9295ebd15f0f18b5?apiKey=79769cd1053a464cbdb4afd62642704d&"
                  className="flex-1 shrink-0 w-full backdrop-blur-xl aspect-[3.45] fill-white stroke-[1.5px] stroke-gray-100"
                />
                <Image
                  alt=""
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1eb74f6d39f8af8f4ed5f6f990943b03373c9fb51c43b8706f78bd3f8819500?apiKey=79769cd1053a464cbdb4afd62642704d&"
                  className="flex-1 shrink-0 w-full backdrop-blur-xl aspect-[3.45] fill-white stroke-[1.5px] stroke-gray-100"
                />
              </div>
              <Image
                alt=""
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/78c7eca5a363369f1a4a694677077b53b4ad327551fa23a553baccb720c179a7?apiKey=79769cd1053a464cbdb4afd62642704d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/78c7eca5a363369f1a4a694677077b53b4ad327551fa23a553baccb720c179a7?apiKey=79769cd1053a464cbdb4afd62642704d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/78c7eca5a363369f1a4a694677077b53b4ad327551fa23a553baccb720c179a7?apiKey=79769cd1053a464cbdb4afd62642704d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/78c7eca5a363369f1a4a694677077b53b4ad327551fa23a553baccb720c179a7?apiKey=79769cd1053a464cbdb4afd62642704d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/78c7eca5a363369f1a4a694677077b53b4ad327551fa23a553baccb720c179a7?apiKey=79769cd1053a464cbdb4afd62642704d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/78c7eca5a363369f1a4a694677077b53b4ad327551fa23a553baccb720c179a7?apiKey=79769cd1053a464cbdb4afd62642704d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/78c7eca5a363369f1a4a694677077b53b4ad327551fa23a553baccb720c179a7?apiKey=79769cd1053a464cbdb4afd62642704d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/78c7eca5a363369f1a4a694677077b53b4ad327551fa23a553baccb720c179a7?apiKey=79769cd1053a464cbdb4afd62642704d&"
                className="mx-7 mt-0 max-w-full aspect-[1.09] w-[820px] max-md:mr-2.5"
              />
            </div>
          </div> */}
        </VStack>
        <Box
          px={{ base: 5, md: 16 }}
          mt={{ base: 10, md: 36 }}
          py={12}
          justify={"center"}
          align={"center"}
          background={"#F6F7F7"}
          w={"full"}
          borderRadius={"120px"}
        >
          <VStack maxW={{ base: "full", md: "980px" }} mt={5} mb={10}>
            <Text
              textAlign={"center"}
              px={4}
              py={2}
              fontSize={"18px"}
              color={"#8268F4"}
              borderRadius={"32px"}
              whiteSpace={"nowrap"}
              border={"1.5px solid #EDEEEF"}
              lineHeight={5}
            >
              Hire top talents now!
            </Text>
            <Heading
              fontFamily={"Inter"}
              fontWeight={500}
              mt={6}
              fontSize={"60px"}
              textAlign={"center"}
              letterSpacing={"tighter"}
              color={"#000"}
              lineHeight={{ base: "51px", md: "64px" }}
            >
              Browse by category and find talents
            </Heading>
            <SimpleGrid
              mt={{ base: 10, md: 14 }}
              columns={{ base: 1, md: 4 }}
              gap={5}
            >
              <VStack py={5} pr={{ base: 5, md: 20 }} pl={5} borderRadius={'24px'} bg={'rgba(255, 255, 255, 0.5)'} border={'1.5px solid #EDEEEF'}> 
			                 <Text lineHeight={7} fontSize={'18px'} fontWeight={500} color={'#0D0D0D'} textAlign={'left'}>
                  Development & IT
                </Text>
                <div className="justify-center px-4 py-2 mt-12 text-base leading-5 text-center whitespace-nowrap rounded-xl border border-solid backdrop-blur-xl bg-white bg-opacity-70 border-gray-100 border-opacity-60 text-zinc-800 max-md:mt-10">
                  783 Talents
                </div>
              </VStack>
              <VStack py={5} pr={{ base: 5, md: 20 }} pl={5} borderRadius={'24px'} bg={'rgba(255, 255, 255, 0.5)'} border={'1.5px solid #EDEEEF'}>
                <Text lineHeight={7} fontSize={'18px'} fontWeight={500} color={'#0D0D0D'} textAlign={'left'}>
                  Development & IT
                </Text>
                <div className="justify-center px-4 py-2 mt-12 text-base leading-5 text-center whitespace-nowrap rounded-xl border border-solid backdrop-blur-xl bg-white bg-opacity-70 border-gray-100 border-opacity-60 text-zinc-800 max-md:mt-10">
                  783 Talents
                </div>
              </VStack>
              <VStack py={5} pr={{ base: 5, md: 20 }} pl={5} borderRadius={'24px'} bg={'rgba(255, 255, 255, 0.5)'} border={'1.5px solid #EDEEEF'}>                <Text lineHeight={7} fontSize={'18px'} fontWeight={500} color={'#0D0D0D'} textAlign={'left'}>
                  Development & IT
                </Text>
                <div className="justify-center px-4 py-2 mt-12 text-base leading-5 text-center whitespace-nowrap rounded-xl border border-solid backdrop-blur-xl bg-white bg-opacity-70 border-gray-100 border-opacity-60 text-zinc-800 max-md:mt-10">
                  783 Talents
                </div>
              </VStack>
              <VStack py={5} pr={{ base: 5, md: 20 }} pl={5} borderRadius={'24px'} bg={'rgba(255, 255, 255, 0.5)'} border={'1.5px solid #EDEEEF'}>                <Text lineHeight={7} fontSize={'18px'} fontWeight={500} color={'#0D0D0D'} textAlign={'left'}>
                  Development & IT
                </Text>
                <div className="justify-center px-4 py-2 mt-12 text-base leading-5 text-center whitespace-nowrap rounded-xl border border-solid backdrop-blur-xl bg-white bg-opacity-70 border-gray-100 border-opacity-60 text-zinc-800 max-md:mt-10">
                  783 Talents
                </div>
              </VStack>
              <VStack py={5} pr={{ base: 5, md: 20 }} pl={5} borderRadius={'24px'} bg={'rgba(255, 255, 255, 0.5)'} border={'1.5px solid #EDEEEF'}>                <Text lineHeight={7} fontSize={'18px'} fontWeight={500} color={'#0D0D0D'} textAlign={'left'}>
                  Development & IT
                </Text>
                <div className="justify-center px-4 py-2 mt-12 text-base leading-5 text-center whitespace-nowrap rounded-xl border border-solid backdrop-blur-xl bg-white bg-opacity-70 border-gray-100 border-opacity-60 text-zinc-800 max-md:mt-10">
                  783 Talents
                </div>
              </VStack>
              <VStack py={5} pr={{ base: 5, md: 20 }} pl={5} borderRadius={'24px'} bg={'rgba(255, 255, 255, 0.5)'} border={'1.5px solid #EDEEEF'}>                <Text lineHeight={7} fontSize={'18px'} fontWeight={500} color={'#0D0D0D'} textAlign={'left'}>
                  Development & IT
                </Text>
                <div className="justify-center px-4 py-2 mt-12 text-base leading-5 text-center whitespace-nowrap rounded-xl border border-solid backdrop-blur-xl bg-white bg-opacity-70 border-gray-100 border-opacity-60 text-zinc-800 max-md:mt-10">
                  783 Talents
                </div>
              </VStack>
              <VStack py={5} pr={{ base: 5, md: 20 }} pl={5} borderRadius={'24px'} bg={'rgba(255, 255, 255, 0.5)'} border={'1.5px solid #EDEEEF'}>                <Text lineHeight={7} fontSize={'18px'} fontWeight={500} color={'#0D0D0D'} textAlign={'left'}>
                  Development & IT
                </Text>
                <div className="justify-center px-4 py-2 mt-12 text-base leading-5 text-center whitespace-nowrap rounded-xl border border-solid backdrop-blur-xl bg-white bg-opacity-70 border-gray-100 border-opacity-60 text-zinc-800 max-md:mt-10">
                  783 Talents
                </div>
              </VStack>
              <VStack py={5} pr={{ base: 5, md: 20 }} pl={5} borderRadius={'24px'} bg={'rgba(255, 255, 255, 0.5)'} border={'1.5px solid #EDEEEF'}>                <Text lineHeight={7} fontSize={'18px'} fontWeight={500} color={'#0D0D0D'} textAlign={'left'}>
                  Development & IT
                </Text>
                <div className="justify-center px-4 py-2 mt-12 text-base leading-5 text-center whitespace-nowrap rounded-xl border border-solid backdrop-blur-xl bg-white bg-opacity-70 border-gray-100 border-opacity-60 text-zinc-800 max-md:mt-10">
                  783 Talents
                </div>
              </VStack>
            </SimpleGrid>
            <div className="flex gap-5 justify-between mt-11 w-full leading-[143%] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex-auto text-3xl text-gray-800">
                Looking for work?
              </div>
              <div className="flex gap-2 justify-between px-4 py-1.5 text-sm text-white whitespace-nowrap bg-blue-700 rounded-xl shadow-sm">
                <div className="grow my-auto">Find Opportunities</div>
                <Image
                  alt=""
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/618600eca5e691b135d74fefe2da220e5855a26abe62081410d778cc58dfafdf?apiKey=79769cd1053a464cbdb4afd62642704d&"
                  className="w-6 aspect-square"
                />
              </div>
            </div>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default LandingPage;
