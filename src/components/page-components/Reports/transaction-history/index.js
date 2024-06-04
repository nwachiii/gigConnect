import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ProfileSetup } from "../../Projects/job-components/modals/profileSetup";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

export const TransactionHistory = () => {
  const modalDisclosure = useDisclosure();
  const [showPrice, setShowPrice] = useState(true);

  return (
    <Stack
      maxW="1120px"
      w="full"
      padding="16px 44px"
      alignItems="center"
      justifyContent="space-between"
      spacing="20px"
      mx="auto"
    >
      {/* Banner */}
      <Flex
        h="58px"
        bg="#202329"
        align="center"
        p="13px 15px 13px 18px"
        w="full"
        borderRadius={"16px"}
        justify={"space-between"}
      >
        <Text color="#FFFFFF" fontSize={"14px"} fontWeight={"500"}>
          Complete your account setup to build trust and connect with talents
        </Text>
        <Button
          color="#4C5361"
          fontSize="14px"
          fontWeight="400"
          bg="#F6F7F7"
          w="106px"
          h="32px"
          p="6px 14px"
          borderRadius="12px"
          onClick={modalDisclosure.onOpen}
        >
          Get Started
        </Button>
      </Flex>
      <Text alignSelf="start" fontSize={24} fontWeight={600}>
        Transaction history
      </Text>
      <Stack
        bg="#FFF"
        border="1px solid #EDEEEF"
        p={4}
        w="full"
        rounded="12px"
        divider={<Divider />}
      >
        <Stack
          borderRadius="12px"
          border="1px solid #EDEEEF"
          w="full"
          p={4}
          gap={2}
          bg="#053AF9"
          color="#FFFFFF"
          align="center"
          justify="center"
          h="115px"
        >
          <Text fontSize={14}>Balance:</Text>
          <HStack gap={4}>
            <Text fontWeight={700} fontSize={20}>
              {showPrice ? "$ 0.00" : "******"}
            </Text>
            <Box cursor={"pointer"} onClick={() => setShowPrice(!showPrice)}>
              {showPrice ? <IoEyeOutline /> : <IoEyeOffOutline />}
            </Box>
          </HStack>
        </Stack>
        <Stack minH={"315px"} align={"center"} gap="12px" pt={8}>
          <HStack w="full" align="end" justify="space-between"gap='16px'>
            <Stack align="start">
              <Text textShadow="xs" fontSize={14} color="#4C5361">
                Statement period
              </Text>
              <Flex
                border="1px solid #EDEEEF"
                align="center"
                justify="center"
                w="260px"
                rounded="8px"
                p={"12px"}
                gap="8px"
                h="44px"
              >
                <Text fontSize={14} color="#878C95">
                  Oct 09, 2023 - Nov 08, 2023
                </Text>
                <Image src="/img/icons/calendar.svg" boxSize="24px" />
              </Flex>
            </Stack>
            <Stack align="start">
              <Text textShadow="xs" fontSize={14} color="#4C5361">
              Transaction category
              </Text>
              <Flex
                border="1px solid #EDEEEF"
                align="center"
                justify="space-between"
                rounded="8px"
                p={"12px"}
                gap="8px"
                h="44px"
                w='190px'
              >
                <Text fontSize={14} color="#878C95">
                  All transactions
                </Text>
                <Image src="/img/icons/dropdownArrow.svg" boxSize="24px" />
              </Flex>
            </Stack>
            <Stack align="start">
              <Text textShadow="xs" fontSize={14} color="#4C5361">
              Talent
              </Text>
              <Flex
                border="1px solid #EDEEEF"
                align="center"
                justify="space-between"
                rounded="8px"
                p={"12px"}
                gap="8px"
                h="44px"
                w='135px'
              >
                <Text fontSize={14} color="#878C95">
                  All talents
                </Text>
                <Image src="/img/icons/dropdownArrow.svg" boxSize="24px" />
              </Flex>
            </Stack>
            <Button
              fontWeight={400}
              p="8px 16px"
              color="#FFF"
              border="1px solid #EDEEEF"
              bg="#202329"
              rounded="12px"
              w="145px"
              h="40px"
            >
              Download CSV
            </Button>
            <Button
              fontWeight={400}
              p="8px 16px"
              color="#FFF"
              border="1px solid #EDEEEF"
              bg="#053AF9"
              rounded="12px"
              //   w="145px"
              h="40px"
            >
              Download Invoice
            </Button>
          </HStack>
          <Divider />
          <Stack
            minH="460px"
            align="center"
            justify="center"
            w="full"
            gap="18px"
          >
            <Image src="/img/icons/blueArrow.svg" boxSize="60px" />
            <Text
              textAlign={"center"}
              maxW={"330px"}
              lineHeight="24px"
              fontWeight={600}
            >
             No transactions
            </Text>
            <Text
              color={"#7D7D7D"}
              textAlign={"center"}
              lineHeight={"18px"}
              maxW={"350px"}
            >
              There are no transactions for the selected period
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <ProfileSetup modalDisclosure={modalDisclosure} />
    </Stack>
  );
};
