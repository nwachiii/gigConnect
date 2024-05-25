import { UserIcon } from "@/assets/icons/Navbar/user-icon";
import { CreditIcon } from "@/assets/icons/settings/credit-icon";
import { SecureIcon } from "@/assets/icons/settings/secure-icon";
import {
  Button,
  Flex,
  HStack,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { UserAccount } from "./components/userAccount";

export const UserSettings = () => {
  const modalDisclosure = useDisclosure();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Stack
      maxW="1440px"
      w="full"
      padding="16px 44px"
      alignItems="center"
      justifyContent="space-between"
      spacing="36px"
      mx="auto"
    >
      {/* Banner */}
      <Flex
        h="58px"
        bg="#202329"
        align="center"
        p="13px 15px 13px 18px"
        w="full"
        borderRadius={"16px"}
        justify={"space-between"}
      >
        <Text color="#FFFFFF" fontSize={"14px"} fontWeight={"500"}>
          Complete your account setup to build trust and connect with talents
        </Text>
        <Button
          color="#4C5361"
          fontSize="14px"
          fontWeight="400"
          bg="#F6F7F7"
          w="106px"
          h="32px"
          p="6px 14px"
          borderRadius="12px"
          onClick={modalDisclosure.onOpen}
        >
          Get Started
        </Button>
      </Flex>
      {/* <Tabs variant="unstyled" w="full" tabIndex={activeIndex}>
        <HStack align='start' w="full">
          <Stack
            borderRadius="12px"
            border="1px solid #EDEEEF"
            w="full"
            p="8px"
            align="start"
            maxW="350px"
            bg="#FFF"
            gap={4}
          >
            {tabs.map((group, groupIndex) => (
              <Stack w="full" gap={1} key={groupIndex}>
                <Text fontSize={10} textTransform="uppercase" color="#878C95" letterSpacing={'1.05px'}>
                  {group.label}
                </Text>
                <TabList alignItems="start" flexDirection="column">
                  {group.tabs.map((tab) => (
                    <Flex
                      w="full"
                      rounded="12px"
                      bg={activeIndex === tab.index ? "#F6F7F7" : "#FFF"}
                      align="center"
                      p='8px'
                      gap={2}
                      key={tab.index}
                      h='48px'
                    >
                      {tab.icon({
                        color: activeIndex === tab.index ? "#4A3041" : "#707581",
                      })}
                      <Tab
                        _selected={{
                          color: "black",
                          fontWeight: 500,
                        }}
                        color="#ADB0B6"
                        index={tab.index}
                        p={0}
                        fontSize={14}
                        onClick={() => setActiveIndex(tab.index)}
                      >
                        {tab.tablist}
                      </Tab>
                    </Flex>
                  ))}
                </TabList>
              </Stack>
            ))}
          </Stack>
          <TabPanels>
            {tabs.map((group) =>
              group.tabs.map((tab, tabIndex) => (
                <TabPanel flex={1} w='full' p={0} key={tabIndex}>{tab.component()}</TabPanel>
              ))
            )}
          </TabPanels>
        </HStack>
      </Tabs> */}
    <UserAccount/>
      {/* Main Content */}
    </Stack>
  );
};

const tabs = [
  {
    label: "General",
    tabs: [
      {
        tablist: "Account",
        component: UserAccount,
        icon: UserIcon,
        index: 0
      },
    ],
  },
  {
    label: "Security and Access",
    tabs: [
      {
        tablist: "Billing & Payments",
        component: UserAccount,
        icon: CreditIcon,
        index: 1
      },
      {
        tablist: "Security",
        component: UserAccount,
        icon: SecureIcon,
        index: 2
      },
    ],
  },
];
