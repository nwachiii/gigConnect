import { conversations } from "@/lib";
import { truncateLongText } from "@/utils/formatText";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { MessageScreen } from "./screen";

export const AllMessagesScreen = () => {
  const [conversation, setConversation] = useState();
  return (
    <Flex
      maxW="1440px"
      w="full"
      padding="16px 44px"
      alignItems="start"
      gap={4}
      mx="auto"
      h={"90vh"}
    >
      <VStack align={"start"} minW={"325px"} h={"100%"} flexGrow={1}>
        <Heading>Messages</Heading>
        <InputGroup>
          <InputLeftElement top={"4px"} left={"4px"}>
            <Image
              src="/img/icons/search-icon.svg"
              alt="search-icon"
              zIndex={1}
            />
          </InputLeftElement>
          <Input
            name="search"
            paddingLeft="25px"
            placeholder="Search messages"
            _placeholder={{
              paddingLeft: "25px",
            }}
            py={6}
            rounded={"12px"}
            bg={"#FFF"}
          />
        </InputGroup>
        <Stack
          bg={"#FFF"}
          border={"1px solid #ECECEC"}
          rounded={"16px"}
          p={6}
          w={"full"}
          flexGrow={1}
          gap={6}
        >
          <HStack
            border={"1px solid #DFDFDF"}
            p={1}
            w={"full"}
            justify={"center"}
            rounded={"14px"}
          >
            <Image
              src="/img/icons/filter_icon.svg"
              alt="filter-icon"
              zIndex={1}
            />
            <Text color={"#7D7D7D"}>Filter messages</Text>
          </HStack>
          {conversations.length > 0 ? (
            conversations.map((person, idx) => {
              return (
                <Stack
                  gap={0}
                  border={"1px solid #EDEEEF"}
                  p={4}
                  rounded={"12px"}
                  cursor={"pointer"}
                  _hover={{
                    background: "#053AF9",
                    color: "#FFFFFF !important",
                  }}
                  onClick={() => {
                    setConversation(person);
                  }}
                >
                  <Flex
                    border={"2px solid #FFF"}
                    w={3}
                    h={3}
                    rounded={"full"}
                    alignSelf={"end"}
                    bg={person.status === "read" ? "green" : "#7D7D7D"}
                  ></Flex>
                  <Flex gap={4} key={idx}>
                    <Image src="/img/profilePicture.png" boxSize={"40px"} />
                    <VStack gap={1} align={"start"}>
                      <Text fontWeight={600}>
                        {person.firstName + " " + person.lastName}
                      </Text>
                      <Text whiteSpace={"nowrap"}>{person.jobTitle}</Text>
                      <Divider dir="horizontal" borderColor={"#EDEEEF"} />
                      <Text
                        fontSize={14}
                        whiteSpace={"nowrap"}
                        _hover={{
                          color: "#FFFFFF",
                        }}
                        // color={"#7D7D7D"}
                      >
                        {truncateLongText(person.lastMessage, 20).truncatedText}
                      </Text>
                    </VStack>
                  </Flex>
                </Stack>
              );
            })
          ) : (
            <Text textAlign={"center"} color={"#7D7D7D"}>
              Conversations will appear here
            </Text>
          )}
        </Stack>
      </VStack>
      <Stack
        bg={"#FFF"}
        w={"full"}
        flexGrow={1}
        h={"100%"}
        rounded={"16px"}
        border={"1px solid #ECECEC"}
      >
        {conversation ? (
          <MessageScreen person={conversation} />
        ) : (
          <VStack
            align={"center"}
            justify={"center"}
            gap={4}
            w={"full"}
            flexGrow={1}
            h={"100%"}
            p={"12px 24px"}
          >
            <Image src="/img/icons/chat-icon.svg" />
            <Text fontWeight={600}>Welcome to Messages</Text>
            <Text
              color={"#7D7D7D"}
              textAlign={"center"}
              lineHeight={"18px"}
              maxW={"350px"}
              fontSize={14}
            >
              Once you connect with a talent you'll be able to chat and
              collaborate here
            </Text>
            <Button
              p={"6px 14px"}
              rounded={"12px"}
              border="1px solid #EDEEEF"
              bg={"#053AF9"}
              fontWeight={400}
              color={"white"}
            >
              Discover Talent
            </Button>
          </VStack>
        )}
      </Stack>
    </Flex>
  );
};
