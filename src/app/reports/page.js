"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import { HeaderWithNav } from "@/components/generic-components/Headers";
import { ReportsPage } from "@/components/page-components/Reports/reports";

export const Reports = () => {
  return (
    <Box minH="100vh" bg="#F5F5F5">
      <HeaderWithNav isTalent />
      <ReportsPage />
    </Box>
  );
};

export default Reports;