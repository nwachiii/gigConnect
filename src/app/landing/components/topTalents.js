import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Stack,
  Button,
  Image,
} from "@chakra-ui/react";
import React from "react";

function TopTalents() {
  return (
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
          <VStack
            py={5}
            pr={{ base: 5, md: 20 }}
            pl={5}
            borderRadius={"24px"}
            bg={"rgba(255, 255, 255, 0.5)"}
            border={"1.5px solid #EDEEEF"}
            minH={"168px"}
            justify={"space-between"}
          >
            <Text
              lineHeight={7}
              fontSize={"18px"}
              fontWeight={500}
              color={"#0D0D0D"}
              textAlign={"left"}
            >
              Development & IT
            </Text>
            <Text
              px={4}
              py={2}
              borderRadius={"12px"}
              whiteSpace={"nowrap"}
              border={"1px solid rgb(237, 238, 239, 0.58)"}
              color={"#22262F"}
              backdropBlur={"24px"}
              bg={"white"}
              textAlign={"center"}
            >
              783 Talents
            </Text>
          </VStack>
          <VStack
            py={5}
            pr={{ base: 5, md: 20 }}
            pl={5}
            borderRadius={"24px"}
            bg={"#C8CACE"}
            border={"1.5px solid #C8CACE"}
            minH={"168px"}
            justify={"space-between"}
          >
            <Text
              lineHeight={7}
              fontSize={"18px"}
              fontWeight={500}
              color={"#0D0D0D"}
              textAlign={"left"}
            >
              Finance & Accounting
            </Text>
            <Text
              px={4}
              py={2}
              borderRadius={"12px"}
              whiteSpace={"nowrap"}
              border={"1px solid rgb(237, 238, 239, 0.58)"}
              color={"#22262F"}
              backdropBlur={"24px"}
              bg={"white"}
              textAlign={"center"}
            >
              783 Talents
            </Text>
          </VStack>
          <VStack
            py={5}
            pr={{ base: 5, md: 20 }}
            pl={5}
            borderRadius={"24px"}
            bg={"rgba(255, 255, 255, 0.5)"}
            border={"1.5px solid #EDEEEF"}
            minH={"168px"}
            justify={"space-between"}
          >
            <Text
              lineHeight={7}
              fontSize={"18px"}
              fontWeight={500}
              color={"#0D0D0D"}
              textAlign={"left"}
            >
              Design & Creative
            </Text>
            <Text
              px={4}
              py={2}
              borderRadius={"12px"}
              whiteSpace={"nowrap"}
              border={"1px solid rgb(237, 238, 239, 0.58)"}
              color={"#22262F"}
              backdropBlur={"24px"}
              bg={"white"}
              textAlign={"center"}
            >
              783 Talents
            </Text>
          </VStack>
          <VStack
            py={5}
            pr={{ base: 5, md: 20 }}
            pl={5}
            borderRadius={"24px"}
            bg={"rgba(255, 255, 255, 0.5)"}
            border={"1.5px solid #EDEEEF"}
            minH={"168px"}
            justify={"space-between"}
          >
            {" "}
            <Text
              lineHeight={7}
              fontSize={"18px"}
              fontWeight={500}
              color={"#0D0D0D"}
              textAlign={"left"}
            >
              Data & Analytics
            </Text>
            <Text
              px={4}
              py={2}
              borderRadius={"12px"}
              whiteSpace={"nowrap"}
              border={"1px solid rgb(237, 238, 239, 0.58)"}
              color={"#22262F"}
              backdropBlur={"24px"}
              bg={"white"}
              textAlign={"center"}
            >
              783 Talents
            </Text>
          </VStack>
          <VStack
            py={5}
            pr={{ base: 5, md: 20 }}
            pl={5}
            borderRadius={"24px"}
            bg={"rgba(255, 255, 255, 0.5)"}
            border={"1.5px solid #EDEEEF"}
            minH={"168px"}
            justify={"space-between"}
          >
            {" "}
            <Text
              lineHeight={7}
              fontSize={"18px"}
              fontWeight={500}
              color={"#0D0D0D"}
              textAlign={"left"}
            >
              Sales & Marketing
            </Text>
            <Text
              px={4}
              py={2}
              borderRadius={"12px"}
              whiteSpace={"nowrap"}
              border={"1px solid rgb(237, 238, 239, 0.58)"}
              color={"#22262F"}
              backdropBlur={"24px"}
              bg={"white"}
              textAlign={"center"}
            >
              783 Talents
            </Text>
          </VStack>
          <VStack
            py={5}
            pr={{ base: 5, md: 20 }}
            pl={5}
            borderRadius={"24px"}
            bg={"rgba(255, 255, 255, 0.5)"}
            border={"1.5px solid #EDEEEF"}
            minH={"168px"}
            justify={"space-between"}
          >
            {" "}
            <Text
              lineHeight={7}
              fontSize={"18px"}
              fontWeight={500}
              color={"#0D0D0D"}
              textAlign={"left"}
            >
              Writing & Translation
            </Text>
            <Text
              px={4}
              py={2}
              borderRadius={"12px"}
              whiteSpace={"nowrap"}
              border={"1px solid rgb(237, 238, 239, 0.58)"}
              color={"#22262F"}
              backdropBlur={"24px"}
              bg={"white"}
              textAlign={"center"}
            >
              783 Talents
            </Text>
          </VStack>
          <VStack
            py={5}
            pr={{ base: 5, md: 20 }}
            pl={5}
            borderRadius={"24px"}
            bg={"rgba(255, 255, 255, 0.5)"}
            border={"1.5px solid #EDEEEF"}
            minH={"168px"}
            justify={"space-between"}
          >
            {" "}
            <Text
              lineHeight={7}
              fontSize={"18px"}
              fontWeight={500}
              color={"#0D0D0D"}
              textAlign={"left"}
            >
              Admin & Customer Support
            </Text>
            <Text
              px={4}
              py={2}
              borderRadius={"12px"}
              whiteSpace={"nowrap"}
              border={"1px solid rgb(237, 238, 239, 0.58)"}
              color={"#22262F"}
              backdropBlur={"24px"}
              bg={"white"}
              textAlign={"center"}
            >
              783 Talents
            </Text>
          </VStack>
          <VStack
            py={5}
            pr={{ base: 5, md: 20 }}
            pl={5}
            borderRadius={"24px"}
            bg={"rgba(255, 255, 255, 0.5)"}
            border={"1.5px solid #EDEEEF"}
            minH={"168px"}
            justify={"space-between"}
          >
            {" "}
            <Text
              lineHeight={7}
              fontSize={"18px"}
              fontWeight={500}
              color={"#0D0D0D"}
              textAlign={"left"}
            >
              Engineering & Architecture
            </Text>
            <Text
              px={4}
              py={2}
              borderRadius={"12px"}
              whiteSpace={"nowrap"}
              border={"1px solid rgb(237, 238, 239, 0.58)"}
              color={"#22262F"}
              backdropBlur={"24px"}
              bg={"white"}
              textAlign={"center"}
            >
              783 Talents
            </Text>
          </VStack>
        </SimpleGrid>
        <Stack
          direction={{ base: "column", md: "row" }}
          justify={"space-between"}
          w={"full"}
          mt={6}
          align={"center"}
        >
          <Text fontSize={30} color={"#2A2E35"}>
            Looking for work?
          </Text>
          <Button
            gap={2}
            whiteSpace={"nowrap"}
            px={4}
            py={2}
            fontSize={"14px"}
            background={"#053AF9"}
            color={"white"}
            boxShadow={"sm"}
            borderRadius={"12px"}
          >
            <Text>Find Opportunities</Text>
            <Image
              alt=""
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/618600eca5e691b135d74fefe2da220e5855a26abe62081410d778cc58dfafdf?apiKey=79769cd1053a464cbdb4afd62642704d&"
              w={6}
            />
          </Button>
        </Stack>
      </VStack>
      
    </Box>
  );
}

export default TopTalents;
