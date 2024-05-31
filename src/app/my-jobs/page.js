"use client";
import React, { Suspense } from "react";
import { Box } from "@chakra-ui/react";
import { HeaderWithNav } from "@/components/generic-components/Headers";
import { JobsList } from "@/components/page-components/Talents/jobs/JobsList";

export const MyJobs = () => {
  return (
    <Box minH="100vh" bg="#F5F5F5">
      <HeaderWithNav isTalent />
      <Suspense>
        <JobsList />
      </Suspense>
    </Box>
  );
};

export default MyJobs;
