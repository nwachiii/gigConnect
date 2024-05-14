import { Flex, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { CiHeart } from "react-icons/ci";
import TextEditor from "@/components/generic-components/TextEditor";
import { useState } from "react";

export const MessageScreen = ({ person }) => {
  const [messages, setMessages] = useState([])

  const addMessage = (message) => {
    const now = new Date();
    const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    setMessages([...messages, { message, time }]);
  };

  console.log(messages)

  return (
    <Stack gap={4} p={6} flex={1}>
      <Flex justify={"space-between"}>
        <VStack>
          <Flex>
            <Image src={person.avatar ?? "/img/profilePicture.png"} />
            <Text fontSize={18} fontWeight={500}>
              {person.firstName + " " + person.lastName}
            </Text>
          </Flex>
        </VStack>
        <HStack gap={6}>
          <CiHeart size={35} cursor={"pointer"} />
          <Image src="/img/icons/phone-icon.svg" />
          <Image src="/img/icons/info-circle.svg" />
        </HStack>
      </Flex>
      <Stack
        justify={"end"}
        align={"end"}
        h={"100%"}
        rounded={"16px"}
        border={"1px solid #EDEEEF"}
        p={4}
      >
        {messages.map((msg, index) => (
        <div key={index}>
          <p>{msg.message}</p>
          <p>{msg.time}</p>
        </div>
      ))}
        <Stack w={"full"}>
          <TextEditor addMessage={addMessage} placeholder={"Type Message"} />
        </Stack>
      </Stack>
    </Stack>
  );
};
