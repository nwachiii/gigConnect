"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import { HeaderWithNav } from "@/components/generic-components/Headers";
import { AllMessagesScreen } from "@/components/page-components/Messages";

export const Messages = () => {
  return (
    <Box minH="100vh" bg="#F5F5F5">
      <HeaderWithNav />
      <AllMessagesScreen/>
    </Box>
  );
};

export default Messages;
