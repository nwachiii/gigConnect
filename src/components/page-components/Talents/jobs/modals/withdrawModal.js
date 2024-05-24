import { Modal, ModalOverlay } from "@chakra-ui/react";
import { useState } from "react";
import { WithdrawalScreen } from "./screens/withdraw";
import { WithdrawOTP } from "./screens/otp";
import { WithdrawSuccess } from "./screens/withdrawSuccess";

export const WithdrawModal = ({ withdrawModal }) => {
  const [screen, setScreen] = useState("withdrawalScreen");
  const [formattedValue, setFormattedValue] = useState("");
  const handleClose = () => {
    withdrawModal.onClose();
    setScreen("withdrawalScreen");
  };
  const displayPaymentScreen = (key) => {
    switch (key) {
      case "withdrawalScreen":
        return (
          <WithdrawalScreen
            formattedValue={formattedValue}
            setFormattedValue={setFormattedValue}
            handleScreen={setScreen}
            withdrawModal={withdrawModal}
          />
        );
      case "otpScreen":
        return (
          <WithdrawOTP
            formattedValue={formattedValue}
            handleScreen={setScreen}
            handleClose={handleClose}
          />
        );
      case "withdrawSuccess":
        return <WithdrawSuccess withdrawModal={withdrawModal} />;
      default:
        return (
          <WithdrawalScreen
            formattedValue={formattedValue}
            setFormattedValue={setFormattedValue}
            handleScreen={setScreen}
            withdrawModal={withdrawModal}
            handleClose={handleClose}
          />
        );
    }
  };

  return (
    <Modal isOpen={withdrawModal.isOpen} onClose={withdrawModal.onClose}>
      <ModalOverlay bg="rgba(0,0,0,0.1)" />
      {displayPaymentScreen(screen)}
    </Modal>
  );
};
