import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { PhoneFA } from "./phoneFA";
import { QRCode } from "./qrCode";
import { GoogleFA } from "./googleFA";

export const TwoFAModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(2);
  const SecuritySteps = verificationSteps[step];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="rgba(0, 0,0, 0.5)" />
      <ModalContent rounded="16px" w="full" maxW={step === 1 ? 650 : 980}>
        <ModalHeader
          display={"flex"}
          paddingInline={0}
          p={2}
          justifyContent={"end"}
          borderBottom={"1px solid #EDEEEF"}
        >
          <Stack
            bg={"#F6F7F7"}
            border="1px solid #EDEEEF"
            justify={"center"}
            p={2}
            rounded={"full"}
            w="max-content"
            justifySelf={"end"}
          >
            <ModalCloseButton
              top={0}
              right={0}
              boxSize={"max-content"}
              position="relative"
              justifySelf="end"
            />
          </Stack>
        </ModalHeader>
        <ModalBody w="full">
          <Stack w="full">
            <SecuritySteps step={step} setStep={setStep} onClose={onClose} />
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const verificationSteps = [PhoneFA, QRCode, GoogleFA];
