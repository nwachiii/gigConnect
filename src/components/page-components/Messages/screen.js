import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CiHeart } from "react-icons/ci";
import TextEditor from "@/components/generic-components/TextEditor";
import { useState } from "react";
import parse from "html-react-parser";
import dayjs from "dayjs";

export const MessageScreen = ({ person, hideUserInfo }) => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    const time = dayjs().format("hh:mm a");
    setMessages([...messages, { message, time }]);
  };

  return (
    <Stack gap={4} p={6} flex={1}>
      {!hideUserInfo && <Flex justify={"space-between"}>
        <VStack align={"start"} gap={1}>
          <Flex gap={4} align={"start"}>
            <Image src={"/img/profilePicture.png"} boxSize={"40px"} />
            <Stack gap={0}>
              <Text fontSize={18} fontWeight={500}>
                {person.firstName + " " + person.lastName}
              </Text>
              <Text color={"#878C95"} fontSize={14}>
                {dayjs().format("hh:mm A")} - GMT+1 West Africa
              </Text>
            </Stack>
          </Flex>
        </VStack>
        <HStack gap={4}>
          <Box bg={"#F5F5F5"} p={2} rounded={"full"} cursor={"pointer"}>
            <CiHeart size={30} />
          </Box>
          <Box bg={"#F5F5F5"} p={2} rounded={"full"} cursor={"pointer"}>
            <Image src="/img/icons/phone-icon.svg" />
          </Box>
          <Box bg={"#F5F5F5"} p={2} rounded={"full"} cursor={"pointer"}>
            <Image src="/img/icons/info-circle.svg" />
          </Box>
        </HStack>
      </Flex>}
      <Stack
        justify={"end"}
        h={"100%"}
        rounded={"16px"}
        border={"1px solid #EDEEEF"}
        p={4}
      >
        <Button alignSelf={'end'} w={'176px'} bg='#202329' gap={2} p='6px' rounded='12px' _hover={{ bg: '' }} mb={4}>
          <Image boxSize={'24px'} src={"/img/icons/calendar.svg"} />
          <Text fontSize={14} color='#fff' fontWeight={400}>Schedule a Meeting</Text>
        </Button>
        <Stack align={"start"} pb={4}>
          <Box
            bg={"#F6F7F7"}
            color={"#344054"}
            p={3}
            borderRadius={"3px 15px 15px 15px"}
            border={"1px solid #EDEEEF"}
          >
            <Text>{person.lastMessage}</Text>
          </Box>
          <Text fontSize={12}>Today, {dayjs().format("hh:mma")}</Text>
        </Stack>
        {messages.map((msg, index) => (
          <Stack align={"end"} key={index} pb={4}>
            <Box
              bg={"#053AF9"}
              color={"#FFF"}
              p={3}
              borderRadius={"15px 3px 15px 15px"}
            >
              <Text>{parse(msg.message)}</Text>
            </Box>
            <HStack gap={2} color={"#878C95"} justify={"end"}>
              <Text fontSize={12}>Today, {msg.time}</Text>
              <Box w={1.5} h={1.5} bg={"#878C95"} rounded={"full"} />
              <Text fontSize={12}>Sent</Text>
            </HStack>
          </Stack>
        ))}
        <Stack w={"full"}>
          <TextEditor addMessage={addMessage} placeholder={"Type Message"} />
        </Stack>
      </Stack>
    </Stack>
  );
};
