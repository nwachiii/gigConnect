"use client";
import React from "react";
import { AbsoluteCenter, Box } from "@chakra-ui/react";
import { HeaderWithNav } from "@/components/generic-components/Headers";
import { ProjectList } from "@/components/page-components/Projects/ProjectList";

export const WorkPosts = () => {
  return (
    <Box minH="100vh" bg="#F5F5F5">
      <HeaderWithNav isTalent />
      <ProjectList/>
    </Box>
  );
};

export default WorkPosts;
