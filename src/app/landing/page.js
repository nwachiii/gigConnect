/* eslint-disable @next/next/no-Image-element */
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
import ClientSection from "./components/clientSection";
import WhyGig from "./components/whyGig";
import TopTalents from "./components/topTalents";
import { Footer } from "@/components/Footer";

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
        <ClientSection />
        <WhyGig />
        <TopTalents />
      </VStack>
      <VStack>
        <Box
          maxW={{ base: "full", md: "1144px" }}
          background={"#F6F7F7"}
          mt={{ base: 10, md: 28 }}
          pt={12}
          px={{ base: 5, md: 28 }}
          borderRadius={"32px"}
        >
          <VStack mt={6} maxW={{ base: "full", md: "875px" }} gap={6}>
            <Text
              bg={"white"}
              textAlign={"center"}
              fontWeight={500}
              lineHeight={5}
              px={4}
              py={2}
              color={"#5599FF"}
              border={"1.5px solid #EDEEEF"}
              backdropBlur={"24px"}
              fontSize={"18px"}
              borderRadius={"32px"}
            >
              Be Mobile
            </Text>
            <Heading
              fontFamily={"Inter"}
              fontSize={60}
              letterSpacing={"tighter"}
              lineHeight={{ base: "51px", md: "64px" }}
              fontWeight={500}
            >
              Download the Talent app and stay updated on your journey
            </Heading>
            <HStack
              w={{ base: "full", md: "430px" }}
              gap={4}
              flexWrap={{ base: "wrap", md: "unset" }}
            >
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
            </HStack>
            <Image
              alt=""
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/78c7eca5a363369f1a4a694677077b53b4ad327551fa23a553baccb720c179a7?apiKey=79769cd1053a464cbdb4afd62642704d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/78c7eca5a363369f1a4a694677077b53b4ad327551fa23a553baccb720c179a7?apiKey=79769cd1053a464cbdb4afd62642704d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/78c7eca5a363369f1a4a694677077b53b4ad327551fa23a553baccb720c179a7?apiKey=79769cd1053a464cbdb4afd62642704d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/78c7eca5a363369f1a4a694677077b53b4ad327551fa23a553baccb720c179a7?apiKey=79769cd1053a464cbdb4afd62642704d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/78c7eca5a363369f1a4a694677077b53b4ad327551fa23a553baccb720c179a7?apiKey=79769cd1053a464cbdb4afd62642704d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/78c7eca5a363369f1a4a694677077b53b4ad327551fa23a553baccb720c179a7?apiKey=79769cd1053a464cbdb4afd62642704d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/78c7eca5a363369f1a4a694677077b53b4ad327551fa23a553baccb720c179a7?apiKey=79769cd1053a464cbdb4afd62642704d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/78c7eca5a363369f1a4a694677077b53b4ad327551fa23a553baccb720c179a7?apiKey=79769cd1053a464cbdb4afd62642704d&"
              maxW={{ base: "full", md: "820px" }}
              mr={{ base: 3, md: 7 }}
              ml={{ base: 0, md: 7 }}
            />
          </VStack>
        </Box>
      </VStack>
      <Footer />
    </Box>
  );
};

export default LandingPage;
