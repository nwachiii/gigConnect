"use client";
import React from "react";
import {
  Box,
  Flex,
  Button,
  HStack,
  Stack,
  useDisclosure,
  Image,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerOverlay,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";
// import {useRouter} from 'next/router';
import { usePathname, useRouter } from "next/navigation";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { RiHomeLine } from "react-icons/ri";
import { GCButton } from "@/ui-lib/ui-lib-components/Button";
import JobsIcon from "@/assets/icons/Navbar/jobs-icon";
import { TalentIcon } from "@/assets/icons/Navbar/talent-icon";
import { MessagesIcon } from "@/assets/icons/Navbar/messages-icon";
import { TransactionHistoryIcon } from "@/assets/icons/Navbar/transaction-history-icon";
import { NotifIcon } from "@/assets/icons/Navbar/notification-icon";
import { sharedGCButtonProps } from "@/ui-lib/ui-lib-components/Button/Button";
import UserProfileMenu from "../UserProfileMenu";

export const HeaderWithNav = ({ isLogin }) => {
  const getPath = usePathname();
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleRouter = (url) => {
    router?.push(url);
  };

  function getActivePage(arg) {
    // Match the last part of the URL after the last forward slash or colon
    const pageUrl = getPath
      ?.match(/[/|:]([\w-]+)[^/|:]*$/)?.[1]
      .replace(/-/g, " ");
    return arg.text?.toLowerCase() === pageUrl;
  }

  const getIconVariant = (item) => {
    return navLinks.find(() => getActivePage(item)) ? "light" : "normal";
  };

  const getActiveButtonStyle = (item) => {
    return getActivePage(item)
      ? { backgroundColor: "#053AF9", color: "#FFFFFF" }
      : { backgroundColor: "transparent", color: "#202329" };
  };

  return (
    <Flex
      borderBottom="1px solid #EFEFEF"
      background="#FFF"
      display="flex"
      // maxW="1440px"
      w="full"
      padding="13px 44px"
      alignItems="center"
      justifyContent="space-between"
      gap="56px"
      h="67px"
      mx="auto"
    >
      <Box>
        <Image src="/img/brand/GigConnectLogo.svg" alt="" />
      </Box>
      <Box
        justifyContent="center"
        alignItems="center"
        size={"sm"}
        display={{ md: "none" }}
      >
        <RxHamburgerMenu fontSize={24} onClick={onOpen} />
      </Box>

     {isLogin ? null : <HStack
        as={"nav"}
        spacing={"16px"}
        display={{ base: "none", md: "flex" }}
      >
        {navLinks.map((item, idx) => {
          return item.menuList ? (
            <GCMenuComponent
              isActive={getActivePage(item)}
              key={idx}
              item={item}
              handleRouter={handleRouter}
            />
          ) : (
            <GCButton
              {...getActiveButtonStyle(item)}
              key={idx}
              leftIcon={
                <Box
                  filter={
                    getIconVariant(item) == "normal"
                      ? ""
                      : "brightness(0) invert(1)"
                  }
                >
                  {item.icon}
                </Box>
              }
              onClick={() => handleRouter(item.pageUrl)}
            >
              {item.text}
            </GCButton>
          );
        })}
      </HStack>}

      <Flex
        alignItems={"center"}
        flex={"0.3"}
        justify={!isLogin ? "space-between" : 'end'}
        gap="8px"
      >
        {!isLogin && <NotifIcon />}
        <UserProfileMenu />
      </Flex>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <RxCross1 onClick={onClose} />
          </DrawerHeader>
          <DrawerBody>
            <Stack p={"20px 10px"} display={{ md: "none" }}>
              {navLinks.map((item) => (
                <Text
                  my="10px"
                  key={item}
                  w="full"
                  fontSize={"20px"}
                  fontWeight="500"
                  lineHeight={"32px"}
                >
                  {item.text}
                </Text>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default HeaderWithNav;

export const GCMenuComponent = ({ item, handleRouter }) => {
  return (
    <Menu closeOnSelect={true}>
      <MenuButton
        as={Button}
        leftIcon={item.icon}
        rightIcon={<ChevronDownIcon />}
        {...sharedGCButtonProps}
      >
        {item.text}
      </MenuButton>

      <MenuList>
        {item.menuList.map((val) => (
          <MenuItem key={val} onClick={() => handleRouter(val.pageUrl)}>
            {val.listItem}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

const navLinks = [
  {
    text: "Workspace",
    icon: <RiHomeLine />,
    pageUrl: "/workspace",
  },
  {
    text: "Jobs",
    icon: <JobsIcon />,
    menuList: [
      {
        listItem: "Post a Job",
        pageUrl: "/jobs/post-a-job",
      },
      { listItem: "Job posts", pageUrl: "/jobs/posts" },
      { listItem: "Contracts", pageUrl: "/jobs/contracts" },
    ],
  },
  {
    text: "Talent",
    icon: <TalentIcon />,
    menuList: [
      {
        listItem: "Discover Talents",
        pageUrl: "/talent",
      },
    ],
  },
  {
    text: "Messages",
    icon: <MessagesIcon />,
    pageUrl: "/messages",
  },
  {
    text: "Transaction History",
    icon: <TransactionHistoryIcon />,
    pageUrl: "/transaction-history",
  },
];
