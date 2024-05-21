import {
  Button,
  Heading,
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export const OfferAccepted = ({ offerModal }) => {
  const router = useRouter();
  return (
    <Modal isOpen={offerModal.isOpen} onClose={offerModal.onClose}>
      <ModalOverlay bg="rgba(0,0,0,0.1)" />
      <ModalContent
        rounded={"16px"}
        pt={"34px"}
        pb={"42px"}
        maxW={"315px"}
        w={"full"}
      >
        <VStack align={"center"} gap={2}>
          <Image
            src="/img/icons/check-success.gif"
            boxSize={"68px"}
            objectFit={"cover"}
          />
          <Heading
            maxW={"225px"}
            lineHeight={"32px"}
            fontSize={20}
            textAlign={"center"}
          >
            Offer accepted successfully
          </Heading>
          <Text maxW={"175px"} color={"#4C5361"} textAlign={"center"}>
            You accepted this offer from <b>Ola Ahmed</b>
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
              offerModal.onClose();
              router.back(-1);
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
          >
            Message Client
          </Button>
        </VStack>
      </ModalContent>
    </Modal>
  );
};

export const OfferDeclined = ({ offerDeclineModal }) => {
  const router = useRouter();
  return (
    <Modal
      isOpen={offerDeclineModal.isOpen}
      onClose={offerDeclineModal.onClose}
    >
      <ModalOverlay bg="rgba(0,0,0,0.1)" />
      <ModalContent
        rounded={"16px"}
        pt={"34px"}
        pb={"42px"}
        maxW={"315px"}
        w={"full"}
      >
        <VStack align={"center"} gap={2}>
          <Image
            src="/img/icons/check-failure.gif"
            boxSize={"68px"}
            objectFit={"cover"}
          />
          <Heading
            maxW={"225px"}
            lineHeight={"32px"}
            fontSize={20}
            textAlign={"center"}
          >
            Offer declined successfully
          </Heading>
          <Text maxW={"175px"} color={"#4C5361"} textAlign={"center"}>
            You declined this offer from <b>Ola Ahmed</b>
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
              offerDeclineModal.onClose();
              router.back(-1);
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
          >
            Message Client
          </Button>
        </VStack>
      </ModalContent>
    </Modal>
  );
};
