import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function WhyGig() {
  return (
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
        letterSpacing={{md: "tighter"}}
        textAlign="center"
        color="black"
        lineHeight={{ base: "51px", md: "64px" }}
        maxW={{ base: "300px", md: "475px" }}
      >
        Why GigConnect <br /> is the right choice for your business
      </Text>
      <Box mt={9} maxW={{ base: "full", md: "1144px" }} w={"full"}>
        <Stack direction={{ base: "column", md: "row" }} gap={5}>
          <VStack
            w={{ base: "full", md: "62%" }}
            direction={"column"}
            mt={{ base: 0, md: 6 }}
            gap={5}
            px={{ base: 5, md: 6}}
          >
            <Box
              borderRadius={"32px"}
              pb={9}
              pl={{ base: 5, md: 6 }}
              background={"#F6F7F7"}
              w={"full"}
            >
              <Flex gap={5}>
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
                    professionals with the right skills and expertise for your
                    projects.
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
                align={'start'}
              >
                <Text
                  fontWeight={500}
                  fontSize={32}
                  letterSpacing={"tighter"}
                  lineHeight={10}
                  maxW={'300px'}
                >
                  Complete projects within budget
                </Text>
                <Text>
                  Negotiate rates and avoid the overhead costs associated with
                  traditional hiring. Pay for only work you approve.
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
                align={"start"}
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
                  Enjoy the peace of mind that comes with our safe and secure
                  platform. Your data and privacy is protected, ensuring a
                  worry-free experience.
                </Text>
              </VStack>
            </Stack>
          </VStack>
          <Flex w={{ base: "full", md: "38%" }} ml={{ base: 0, md: 5 }} px={{ base: 5, md: 6}}>
            <Image
              alt=""
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/409996d426fddddd02b231f56369b4d6e84c10744b484ac50f9e5716befd16ea?apiKey=79769cd1053a464cbdb4afd62642704d&"
              w={'full'}
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
          Work with clients from around the world and broaden your professional
          network.
        </Text>
      </VStack>
      <Stack
        display={"flex"}
        maxW={{ base: "full", md: "1144px" }}
        mt={10}
        w={"full"}
      >
        <Stack flexDirection={{ base: "column", md: "row" }} gap={5} px={{ base: 5, md: 6}}>
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
                  Explore opportunities that matches your skills and expertise
                </Text>
              </Flex>
              <Flex w={{ base: "full", base: "58%" }} ml={{ base: 0, md: 5 }}>
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
          display={{base: 'none', md: "flex"}}
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
    </VStack>
  );
}

export default WhyGig;
