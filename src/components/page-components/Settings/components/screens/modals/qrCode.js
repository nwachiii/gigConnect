import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export const QRCode = () => {
  return (
    <VStack gap={4} align={"start"} pb={4}>
      <Box bg={"#efefef"} borderRadius={"24px"} px={"6px"} py={"5px"}>
        <Box
          bg={"#fff"}
          px={3}
          py={1}
          border={"1px solid #dfdfdf"}
          borderRadius={"14px"}
        >
          <Text fontSize={14} fontWeight={500}>
            2/3
          </Text>
        </Box>
      </Box>
      <HStack gap={4} w="full" align="self-start">
        <Stack maxW={"452px"}>
          <Heading lineHeight={"48px"}>
            Continue with Google Authenticator
          </Heading>
          <Text maxW={300} fontSize={14} color={"#4C5361"}>
            Scan this code generated using the google authenticator app for your
            registered email address.
          </Text>
        </Stack>
        <Stack
          align={"start"}
          border={"1px solid #edeeef"}
          rounded={"12px"}
          p={6}
          bg="#FFFF"
        >
          <Image src="/img/qrCode.png" />
        </Stack>
      </HStack>
    </VStack>
  );
};
