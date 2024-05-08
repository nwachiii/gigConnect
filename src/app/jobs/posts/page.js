"use client";
import React from "react";
import { AbsoluteCenter, Box } from "@chakra-ui/react";
import { HeaderWithNav } from "@/components/generic-components/Headers";

export const JobPosts = () => {
  return (
    <Box minH="100vh" bg="#F5F5F5">
      <HeaderWithNav />
      <AbsoluteCenter>Job Posts</AbsoluteCenter>
    </Box>
  );
};

export default JobPosts;
