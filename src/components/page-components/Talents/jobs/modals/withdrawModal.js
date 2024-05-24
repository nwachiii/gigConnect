import {
  Button,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const WithdrawModal = ({ withdrawModal }) => {
  const [screen, setScreen] = useState("withdrawalScreen");

  const displayPaymentScreen = (key) => {
    switch (key) {
      case "withdrawalScreen":
        return <WithdrawalScreen handleScreen={setScreen} />;
      case "paymentSuccess":
        return <PaymentSuccessful withdrawModal={withdrawModal} />;
      default:
        return <WithdrawalScreen handleScreen={setScreen} />;
    }
  };

  return (
    <Modal isOpen={withdrawModal.isOpen} onClose={withdrawModal.onClose}>
      <ModalOverlay bg="rgba(0,0,0,0.1)" />
      {displayPaymentScreen(screen)}
    </Modal>
  );
};

const WithdrawalScreen = ({ handleScreen }) => {
  return (
    <ModalContent
      rounded={"16px"}
      maxW={"315px"}
      maxH={"345px"}
      w={"full"}
      p={4}
    >
      <VStack
        minH={"318px"}
        maxW={"295px"}
        p="10px"
        bg="#EDEEEF"
        rounded={"16px"}
        align={"center"}
        gap={4}
      >
        <Image
          src="/img/icons/wallet.svg"
          boxSize={"32px"}
          objectFit={"cover"}
        />
        <Heading
          maxW={"200px"}
          lineHeight={"32px"}
          fontSize={24}
          textAlign={"center"}
        >
          Withdraw Funds
        </Heading>
        <Text
          maxW={"175px"}
          color={"#4C5361"}
          textAlign={"center"}
          lineHeight={"18px"}
          fontSize={14}
        >
          Enter amount to withdraw to bank account
        </Text>
        <InputGroup
          maxW="165px"
          h="48px"
          rounded="14px"
          border="1px solid #EDEEEF"
          bg="#F6F7F7"
        >
          <Input
            border="none"
            placeholder="0.00"
            color="#363B45"
            fontSize={24}
            fontWeight={500}
          />
          <InputRightElement>
            <Image src="/img/icons/cardIcon.svg" />
          </InputRightElement>
        </InputGroup>
        <HStack
          bg={"#FFF"}
          rounded={"14px"}
          h="28px"
          fontWeight={400}
          p={"5px 12px"}
          color={"#4C5361"}
          border={"1px solid #EDEEEF"}
          w={"max-content"}
        >
          <Text fontSize={14} fontWeight={700}>
            $500.00
          </Text>
          <Text>Available Balance</Text>
        </HStack>
        <Button
          fontWeight={400}
          fontSize={14}
          bg="#053AF9"
          color="#FFF"
          p={"6px 14px"}
          rounded={"16px"}
          w="full"
          maxW={"195px"}
          h="32px"
          boxShadow="md"
          _hover={{
            bg: "",
          }}
          onClick={() => handleScreen("paymentSuccess")}
        >
          Request Payment
        </Button>
      </VStack>
    </ModalContent>
  );
};

const PaymentSuccessful = ({ withdrawModal }) => {
  const router = useRouter();
  return (
    <ModalContent
      rounded={"16px"}
      pt={"34px"}
      pb={"42px"}
      maxW={"315px"}
      w={"full"}
    >
      <VStack align={"center"} gap={4}>
        <Image
          src="/img/icons/check-success.gif"
          boxSize={"68px"}
          objectFit={"cover"}
        />
        <Heading
          maxW={"200px"}
          lineHeight={"32px"}
          fontSize={20}
          textAlign={"center"}
        >
          Payment request sent successfully
        </Heading>
        <Text maxW={"200px"} color={"#4C5361"} textAlign={"center"}>
          Your payment request has been sent to <b>Ola Ahmed</b>
        </Text>
        <Button
          bg={"#053AF9"}
          rounded={"12px"}
          fontWeight={400}
          p={"12px 16px"}
          h={"max-content"}
          color={"#fff"}
          border={"1px solid #EDEEEF"}
          onClick={() => {
            withdrawModal.onClose();
          }}
          w={"max-content"}
        >
          Okay
        </Button>
        <Button
          p={"6px 14px"}
          rounded={"12px"}
          border="1px solid #EDEEEF"
          bg={"#F6F7F7"}
          fontWeight={400}
          w={"max-content"}
          h="32px"
          color="#4C5361"
        >
          Message Client
        </Button>
      </VStack>
    </ModalContent>
  );
};
