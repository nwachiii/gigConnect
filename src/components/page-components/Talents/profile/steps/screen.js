import { Box, Button, HStack, Heading, Image, Input, Stack, Text, VStack } from "@chakra-ui/react";
import { GoPlus } from "react-icons/go";
import { HiOutlineChevronDown } from "react-icons/hi2";

export const ProfileScreenStep = () => {
  return (
    <VStack gap={4} align={"start"} w={"full"} px={6} mb={4}>
      <Box bg={"#efefef"} borderRadius={"24px"} px={"6px"} py={"5px"}>
        <Box
          bg={"#fff"}
          px={3}
          py={1}
          border={"1px solid #dfdfdf"}
          borderRadius={"14px"}
        >
          <Text fontSize={14} fontWeight={500}>
            10/10
          </Text>
        </Box>
      </Box>
      <Heading
        fontWeight={700}
        maxW={"415px"}
        fontSize={24}
        lineHeight={"32px"}
      >
        A few last details, then you can check and publish your profile.
      </Heading>
      <Text fontSize={12} color={"#4C5361"}>
        A professional photo helps you build trust with your clients. To keep
        things safe and simple, they’ll pay you through us - which is why we
        need your personal information.
      </Text>
      <VStack
        bg={"#FFF"}
        rounded={"12px"}
        border={"1px solid #edeeef"}
        align={"start"}
        gap={2}
        w={"full"}
      >
        <HStack
          borderBottom={"1px solid #edeeef"}
          justify={"space-between"}
          w={"full"}
          p={2}
        >
          <Text color={"#363B45"} fontWeight={500}>
            Profile setup
          </Text>
        </HStack>
        <VStack align={"start"} w={"full"} px={4} gap={8} mt={2}>
          <HStack w={"full"} gap={6}>
            <Image src="/img/profilePicture.png" alt="" />
            <Box
              border={"1px solid #edeeef"}
              p={2}
              w={"full"}
              maxW={"220px"}
              rounded={"12px"}
            >
              <HStack
                justify={"space-between"}
                bg={"#F6F5F5"}
                border={"1px solid #EDEAEC"}
                px={2}
                py={1}
                rounded={"8px"}
              >
                <Text fontSize={12} color={"#4C5361"}>
                  Upload Photo
                </Text>
                <Box
                  bg={"#F6F7F7"}
                  border={"1px solid #edeeef"}
                  cursor={"pointer"}
                  p={1}
                  rounded={"full"}
                >
                  <GoPlus color="#4C5361" size={15} />
                </Box>
              </HStack>
            </Box>
          </HStack>
          <VStack align={"start"} w={"full"} maxW={"370px"} gap={6}>
            <VStack align={"start"} w={"full"} maxW={"265px"}>
              <Text color="#4C5361" textShadow={"sm"}>
                Date-Of-Birth*
              </Text>
              <Button
                bg={"#fff"}
                justifyContent={"space-between"}
                w={"full"}
                border={"1px solid #edeeef"}
                borderRadius={"8px"}
                py={6}
                fontWeight={400}
              >
                <Text color="#878C95" whiteSpace={"nowrap"}>
                  dd-mm-yyyy
                </Text>
                <HiOutlineChevronDown color="#4C5361" size={20} />
              </Button>
            </VStack>
            <VStack align={"start"} w={"full"}>
              <Text color="#4C5361" textShadow={"sm"}>
                Phone Number
              </Text>
              <HStack w={"full"}>
                <Button
                  bg={"#fff"}
                  justifyContent={"space-between"}
                  w={"full"}
                  border={"1px solid #edeeef"}
                  borderRadius={"8px"}
                  py={6}
                  fontWeight={400}
                  maxW={"100px"}
                  gap={1}
                >
                  <HStack gap={0.5}>
                    <Image src="/img/icons/country flag.svg" alt="" />
                    <Text color="#4C5361" whiteSpace={"nowrap"} fontSize={14}>
                      +1
                    </Text>
                  </HStack>
                  <HiOutlineChevronDown color="#4C5361" size={20} />
                </Button>
                <Input
                  bg={"#fff"}
                  placeholder="00000000"
                  w={"full"}
                  border={"1px solid #edeeef"}
                  py={6}
                  borderRadius={"8px"}
                  fontWeight={400}
                />
              </HStack>
            </VStack>
          </VStack>
          <VStack align={"start"} w={"full"} maxW={"260px"}>
            <Text color="#4C5361" textShadow={"sm"}>
              Country*
            </Text>
            <Button
              bg={"#fff"}
              justifyContent={"space-between"}
              w={"full"}
              border={"1px solid #edeeef"}
              py={6}
              borderRadius={"8px"}
              fontWeight={400}
            >
              <Text color="#4C5361" whiteSpace={"nowrap"} fontSize={14}>
                Lekki, Lagos
              </Text>
              <HiOutlineChevronDown color="#4C5361" size={25} />
            </Button>
          </VStack>
          <VStack align={"start"} w={"full"}>
            <Text color="#4C5361" textShadow={"sm"}>
              Street Address
            </Text>
            <Input
              placeholder="Enter street address"
              py={8}
              w={"full"}
              rounded={"8px"}
            />
          </VStack>
          <Stack
            direction={{ base: "column", md: "row" }}
            w={"full"}
            maxW={"650px"}
            mb={4}
          >
            <VStack align={"start"} w={"full"}>
              <Text color="#4C5361" textShadow={"sm"}>
                Start Date*
              </Text>
              <Input
                bg={"#fff"}
                placeholder="Enter City"
                w={"full"}
                border={"1px solid #edeeef"}
                py={6}
                borderRadius={"8px"}
                fontWeight={400}
              />
            </VStack>
            <VStack align={"start"} w={"full"}>
              <Text color="#4C5361" textShadow={"sm"}>
                State/Province
              </Text>
              <Input
                bg={"#fff"}
                placeholder="Enter State/Province"
                w={"full"}
                border={"1px solid #edeeef"}
                py={6}
                borderRadius={"8px"}
                fontWeight={400}
              />
            </VStack>
            <VStack align={"start"} w={"full"}>
              <Text color="#4C5361" textShadow={"sm"}>
                ZIP/Postal code
              </Text>
              <Input
                bg={"#fff"}
                placeholder="Enter ZIP/Postal code"
                w={"full"}
                border={"1px solid #edeeef"}
                py={6}
                borderRadius={"8px"}
                fontWeight={400}
              />
            </VStack>
          </Stack>
        </VStack>
      </VStack>
      <HStack gap={2} mb={4}>
        <Button
          bg={"#053AF9"}
          color={"white"}
          rounded={"12px"}
          fontWeight={400}
          px={4}
          py={"6px"}
          fontSize={14}
          h={"max-content"}
        >
          Save profile and continue
        </Button>
      </HStack>
    </VStack>
  );
};