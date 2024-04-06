import { Box, Button, HStack, Heading, Text, Textarea, VStack } from "@chakra-ui/react";
import { useState } from "react";

export const ProfileBioStep = ({ setStep }) => {
    const [userOverview, setUserOverview] = useState("");
    return (
      <VStack gap={4} align={"start"} w={"full"} px={6} mb={4}>
        <Box bg={"#efefef"} borderRadius={"24px"} px={"6px"} py={"5px"}>
          <Box
            bg={"#fff"}
            px={3}
            py={1}
            border={"1px solid #dfdfdf"}
            borderRadius={"14px"}
          >
            <Text fontSize={14} fontWeight={500}>
              7/10
            </Text>
          </Box>
        </Box>
        <Heading fontWeight={700} fontSize={24} lineHeight={"32px"}>
          Great. Now write a bio to tell the world about yourself.
        </Heading>
        <Text fontSize={12} color={"#4C5361"}>
          Help people get to know you at a glance. What work do you do best? Tell
          them clearly, using paragraphs or bullet points. You can always edit
          later; just make sure you proofread now.
        </Text>
        <VStack
          bg={"#FFF"}
          rounded={"12px"}
          border={"1px solid #edeeef"}
          align={"start"}
          gap={2}
          w={"full"}
        >
          <HStack
            borderBottom={"1px solid #edeeef"}
            justify={"space-between"}
            w={"full"}
            p={2}
          >
            <Text>Write an overview</Text>
          </HStack>
          <VStack align={"start"} w={"full"} px={4} gap={8} mt={2} mb={8}>
            <VStack w={"full"} maxW={"605px"} align={"start"}>
              <Text color={"#4C5361"}>Description</Text>
              <Textarea
                placeholder="Enter your top skills, experience and interest. This is one of the first things clients
                  will see on your profile."
                bg={"#fff"}
                justifyContent={"space-between"}
                w={"full"}
                border={"1px solid #edeeef"}
                borderRadius={"8px"}
                py={6}
                px={4}
                minH={"115px"}
                fontWeight={400}
                resize={"none"}
                value={userOverview}
                onChange={(e) => setUserOverview(e.target.value)}
              />
              <Text>At least 100 characters</Text>
            </VStack>
          </VStack>
        </VStack>
        <HStack gap={2} mb={4}>
          <Button
            bg={"#F6F7F7"}
            color={"#4C5361"}
            rounded={"12px"}
            fontWeight={400}
            px={4}
            py={"6px"}
            fontSize={14}
            onClick={() => setStep((prev) => prev + 1)}
            h={"max-content"}
            border={"1px solid #EDEEEF"}
          >
            Skip for now
          </Button>
          <Button
            bg={"#053AF9"}
            color={"white"}
            rounded={"12px"}
            fontWeight={400}
            px={4}
            py={"6px"}
            fontSize={14}
            onClick={() => setStep((prev) => prev + 1)}
            isDisabled={userOverview.length < 100}
            h={"max-content"}
          >
            Next, choose your categories
          </Button>
        </HStack>
      </VStack>
    );
  };