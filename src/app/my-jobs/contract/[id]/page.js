"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import { HeaderWithNav } from "@/components/generic-components/Headers";
import { OfferPage } from "@/components/page-components/Talents/jobs/offerPage";

export const ContractOffer = () => {
  return (
    <Box minH="100vh" bg="#F5F5F5">
      <HeaderWithNav isTalent />
      <OfferPage />
    </Box>
  );
};

export default ContractOffer