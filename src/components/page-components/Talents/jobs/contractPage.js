import { conversations, techJobs } from "@/lib";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import dayjs from "dayjs";
import { StarRating } from "@/ui-lib/ui-lib-components/StarRating";
import { UserIcon } from "@/assets/icons/Navbar/user-icon";
import {
  emailStyle,
  userNameStyle,
} from "@/components/generic-components/Headers/UserProfileMenu";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { ContractOverview } from "./contract-components/overview";
import { ContractDetails } from "./contract-components/details";
import { MessageScreen } from "../../Messages/screen";

export const ContractPage = () => {
  const router = useRouter();
  const query = useParams();
  const job = techJobs.find((job) => job.id === Number(query?.id));
  const currentIndex = techJobs.indexOf(job);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Stack
      maxW="900px"
      w="full"
      padding="16px 44px"
      alignItems="center"
      justifyContent="space-between"
      spacing="36px"
      mx="auto"
    >
      {/* Main Content */}
      <Stack borderRadius={"16px"} gap={2} minW="981px" w="full" bg="#FFFFFF">
        <HStack p={4} borderBottom={"1px solid #ebebeb"} w={"full"}>
          <HStack gap={3} cursor={"pointer"} onClick={() => router.back(-1)}>
            <Stack bg={"#F6F7F7"} justify={"center"} p={3} rounded={"full"}>
              <BsChevronLeft />
            </Stack>
            <Text fontWeight={500} fontSize={18}>
              Back
            </Text>
          </HStack>
        </HStack>
        <Stack p={4}>
          <Flex align="center" textAlign={"left"} gap="4px">
            <Avatar bg="#F5F5F5" icon={<UserIcon />} />
            <span>
              <Text {...userNameStyle}>Ola Ahmed</Text>
              <Text {...emailStyle}>olaahmed@gmail.com</Text>
            </span>
          </Flex>
          <Heading fontSize={24}>{job.projectTitle}</Heading>
          <Text color={"#878C95"} fontSize={14}>
            Created on the {dayjs().format("Do [of] MMMM YYYY")}
          </Text>
          <StarRating ratingNumber={job.ratings} />
          <Tabs>
          <Flex
            borderRadius="12px"
            border="1px solid #EDEEEF"
            w="full"
            px="8px"
            pt="8px"
            h={"56px"}
            align={"center"}
          >
            <TabList
              width={"full"}
              justifyContent={"center"}
              borderBottom={"0"}
            >
              {tabs.map((tab, index) => (
                <Tab
                  _selected={{
                    color: "black",
                    fontWeight: 500
                  }}
                  color="#ADB0B6"
                  key={index}
                  index={index}
                >
                  {tab.tablist}
                </Tab>
              ))}
            </TabList>
          </Flex>
          <TabPanels>
            {tabs.map((tab, index) => (
              <TabPanel p={0} mt={4} key={index}>
                {tab.component()}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
        </Stack>
      </Stack>
    </Stack>
  );
};

const Message = () => {
  return <MessageScreen hideUserInfo person={conversations[0]}/>
}

const tabs = [
  {
      tablist: "Overview",
      component: ContractOverview
  },
  {
      tablist: "Messages",
      component: Message
  },
  {
      tablist: "Details",
      component: ContractDetails
  }
]

