import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Box,
  Switch,
  Flex,
  Text,
  VStack,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { FaUserCircle, FaCog, FaSignOutAlt, FaUserPlus } from "react-icons/fa";
// import { AiOutlineUser } from '@chakra-ui/icons'
import { AiOutlineUser } from "react-icons/ai";
import { UserIcon } from "@/assets/icons/Navbar/user-icon";
import { useRouter } from "next/navigation";

export const UserProfileMenu = () => {
  const router = useRouter();
  const emailStyle = {
    color: "#7D7D7D",
    fontSize: "10px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "10px",
  };

  const userNameStyle = {
    color: "#2E2E2E",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "20px",
  };

  return (
    <Menu>
      <MenuButton p={1}>
        <Flex align="center" textAlign={"left"} gap="4px">
          <Avatar bg="#F5F5F5" icon={<UserIcon />} />
          <span>
            <Text {...userNameStyle}>Ola Ahmed</Text>
            <Text {...emailStyle}>olaahmed@gmail.com</Text>
          </span>
        </Flex>
      </MenuButton>
      <MenuList
        bg={useColorModeValue("white", "gray.700")}
        borderColor={useColorModeValue("gray.200", "gray.600")}
      >
        <Flex direction="column" align="center" p={4}>
          <Avatar bg="#F5F5F5" icon={<UserIcon />} />
          <Text mt={3} fontWeight="bold" {...userNameStyle}>
            Ola Ahmed
          </Text>
          <Text {...emailStyle}>olaahmed@gmail.com</Text>
        </Flex>
        <Box px={4} py={2}>
          <Flex align="center">
            <Text flex={1}>Enable Online</Text>
            <Switch id="online-status" />
          </Flex>
        </Box>
        <VStack
          divider={
            <Box borderColor={useColorModeValue("gray.200", "gray.600")} />
          }
          spacing={0}
        >
          <MenuItem icon={<Icon as={FaUserPlus} />}>Invite a Coworker</MenuItem>
          <MenuItem onClick={() => router.push("/settings")} icon={<Icon as={FaCog} />}>Settings</MenuItem>
          <MenuItem
            onClick={() => router.push("/auth/sign-in")}
            icon={<Icon as={FaSignOutAlt} />}
          >
            Log out
          </MenuItem>
        </VStack>
      </MenuList>
    </Menu>
  );
};

export default UserProfileMenu;
