"use client";
import React, { Suspense } from "react";
import { Box } from "@chakra-ui/react";
import { HeaderWithNav } from "@/components/generic-components/Headers";
import { ProjectList } from "@/components/page-components/Projects/ProjectList";

export const WorkPosts = () => {
  return (
    <Box minH="100vh" bg="#F5F5F5">
      <HeaderWithNav isTalent />
      <Suspense>
        <ProjectList />
      </Suspense>
    </Box>
  );
};

export default WorkPosts;
