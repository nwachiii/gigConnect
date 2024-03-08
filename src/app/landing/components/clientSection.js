import { Flex, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

function ClientSection() {
  return (
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
          color={"#EDEEEF"}
          textAlign={"center"}
          fontSize={30}
          lineHeight={"2.5rem"}
        >
          Seamlessly connect with top-tier talent, ensuring that your project is
          in the hands of experts who can get the job done.
        </Text>
        <VStack mt={{ base: 10, md: 14 }} gap={7}>
          <Stack direction={{ base: "column", md: "row" }} gap={5}>
            <Flex width={{ base: "full", md: "66%" }}>
              <Image
                alt=""
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9814faf2d5dced769d2cf487fbb3700c91e052f445858192ef70ece5eba11bda?apiKey=79769cd1053a464cbdb4afd62642704d&"
                mt={{ base: 7, md: 0 }}
                w={"full"}
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
  );
}

export default ClientSection;
