"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import { HeaderWithNav } from "@/components/generic-components/Headers";
import { BillingsPage } from "@/components/page-components/Reports/billings";

export const Billings = () => {
  return (
    <Box minH="100vh" bg="#F5F5F5">
      <HeaderWithNav isTalent />
      <BillingsPage />
    </Box>
  );
};

export default Billings;