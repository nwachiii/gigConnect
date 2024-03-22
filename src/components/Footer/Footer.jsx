/* eslint-disable @next/next/no-img-element */
// import PropTypes from "prop-types";
import React from "react";
import {
  Button,
  Divider,
  HStack,
  Image,
  Stack,
  StackDivider,
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

export const Footer = ({}) => {
  return (
    <VStack
      px={{ base: 5, md: 20 }}
      mt={{ base: 10, md: 24 }}
      py={12}
      borderTop={"1.5px solid #F6F7F7"}
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        gap={{ base: 5, md: "unset" }}
        mt={3}
        justify={"space-between"}
        maxW={{ base: "full", md: "1144px" }}
        w={"full"}
        fontWeight={600}
        lineHeight={5}
      >
        <Image src={"/img/brand/GigConnectLogo.svg"} alt="logo" w={'full'} maxW={'165px'} />
        <HStack gap={{ base: 1, md: 3}}>
          <Text whiteSpace={'nowrap'} color={"#22262F"}>Join our community</Text>
          <Button w={10} h={10} p={2} rounded={"full"} background={"#F8F8F8"}>
            <FaInstagram color="#053AF9" />
          </Button>
          <Button w={10} h={10} p={2} rounded={"full"} background={"#F8F8F8"}>
            <FaLinkedinIn color="#053AF9" />
          </Button>
          <Button w={10} h={10} p={2} rounded={"full"} background={"#F8F8F8"}>
            <FaFacebookF color="#053AF9" />
          </Button>
          <Button w={10} h={10} p={2} rounded={"full"} background={"#F8F8F8"}>
            <FaXTwitter color="#053AF9" />
          </Button>
          <Button w={10} h={10} p={2} rounded={"full"} background={"#F8F8F8"}>
            <FaYoutube color="#053AF9" />
          </Button>
        </HStack>
      </Stack>
      <Stack
        direction={{ base: "column", md: "row" }}
        gap={{ base: 0, md: 5 }}
        w={"full"}
        maxW={{ base: "full", md: "1144px" }}
      >
        <VStack width={{ base: "full", md: "60%" }}>
          <VStack align={"start"} w={"full"} gap={3}>
            <Text color={"#22262F"} fontWeight={600} lineHeight={5}>
              Contact Information
            </Text>
            <HStack gap={{ base: 1, md: 3}} textAlign={"center"} lineHeight={"130%"}>
              <Text
                px={4}
                py={2}
                border={"1px solid #053AF9"}
                backdropBlur={"24px"}
                borderRadius={"48px"}
                bg={"rgba(255, 255, 255, 0.7)"}
                whiteSpace={'nowrap'}
              >
                hello@gigconnect.com
              </Text>
              <Text
                px={4}
                py={2}
                border={"1px solid rgba(255, 255, 255, 0.7)"}
                backdropBlur={"24px"}
                borderRadius={"48px"}
                bg={"rgba(255, 255, 255, 0.7)"}
                whiteSpace={'nowrap'}
              >
                +234 0950 993 093
              </Text>
            </HStack>
            <Text
              px={4}
              py={2}
              lineHeight={6}
              border={"1px solid rgba(255, 255, 255, 0.6)"}
              backdropBlur={"24px"}
              borderRadius={"48px"}
              bg={"rgba(255, 255, 255, 0.7)"}
            >
              <span className="font-bold">Address:</span> No 191B jide Oki
              street off Ligali Ayorinde lane Victoria Island Lagos, Nigeria
            </Text>
          </VStack>
        </VStack>
        <VStack w={{ base: "full", md: "40%" }} ml={{ base: 0, md: 5 }} >
          <VStack
            align={"start"}
            fontSize={"14px"}
            color={"#22262F"}
            mt={{ base: 10, md: 0 }}
            px={{ base: 2, md: 0}}
          >
            <Text fontWeight={600}>Company</Text>
            <HStack justify={"space-between"} mt={4} textAlign={"center"}>
              <Text
                px={4}
                py={2}
                border={"1px solid #053AF9"}
                backdropBlur={"24px"}
                borderRadius={"48px"}
                bg={"rgba(255, 255, 255, 0.7)"}
              >
                Join our Affiliate Program
              </Text>
              <Text
                px={4}
                py={2}
                border={"1px solid #053AF9"}
                backdropBlur={"24px"}
                borderRadius={"48px"}
                bg={"rgba(255, 255, 255, 0.7)"}
              >
                Partnerships
              </Text>
            </HStack>
            <HStack flexWrap={'wrap'} gap={3} mt={3} whiteSpace={"nowrap"}>
              <Text
                px={4}
                py={2}
                border={"1px solid #053AF9"}
                backdropBlur={"24px"}
                borderRadius={"48px"}
                bg={"rgba(255, 255, 255, 0.7)"}
              >
                Trust & Safety
              </Text>
              <Text
                px={4}
                py={2}
                border={"1px solid #053AF9"}
                backdropBlur={"24px"}
                borderRadius={"48px"}
                bg={"rgba(255, 255, 255, 0.7)"}
              >
                Terms of Service
              </Text>
              <Text
                px={4}
                py={2}
                border={"1px solid #053AF9"}
                backdropBlur={"24px"}
                borderRadius={"48px"}
                bg={"rgba(255, 255, 255, 0.7)"}
              >
                Privacy Policy
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </Stack>
      <Divider
        mt={4}
        borderColor={"#326DC0"}
        w={"full"}
        maxW={{ base: "full", md: "1144px" }}
      />
      <Text
        fontSize={"12px"}
        mt={4}
        lineHeight={6}
        textAlign={"center"}
        color={"#8C8C8C"}
      >
        © 2024 GigConnect - All Rights Reserved.
      </Text>
    </VStack>
  );
};
