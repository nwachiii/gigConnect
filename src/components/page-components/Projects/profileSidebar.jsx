import { profileSteps } from "@/lib";
import {
  Button,
  HStack,
  Image,
  Progress,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export const ProfileSidebar = ({ showSteps }) => {
    return (
        <VStack
            borderRadius={"16px"}
            p={4}
            gap={4}
            //   maxW="256px"
            w="full"
            bg="#FFFFFF"
            maxH={"max-content"}
            h={"max-content"}
        >
            <VStack borderRadius="12px" border="1px solid #EDEEEF" w="full" p={4}>
                <Image src="/img/icons/userIcon.svg" />
                <Text>Ola Ahmed</Text>
                <Text>CRM Developer | Fintech</Text>
                <Button
                    p={"6px 14px"}
                    rounded={"12px"}
                    border="1px solid #EDEEEF"
                    bg={"#F6F7F7"}
                    fontWeight={400}
                >
                    Complete Profile
                </Button>
            </VStack>
            <HStack borderRadius="12px" bg="#F6F7F7" w="full" p={4}>
                <Progress
                    bg={"#C8CACE"}
                    color={"#053AF9"}
                    rounded={"full"}
                    size={"sm"}
                    width={"full"}
                    value={50}
                />
                <Text>50%</Text>
            </HStack>
            {showSteps ? (
                profileSteps.map((step, index) => {
                    return (
                        <HStack
                            borderRadius="12px"
                            border="1px solid #EDEEEF"
                            w="full"
                            p={4}
                            key={index}
                            align={"start"}
                            gap={4}
                        >
                            <Image
                                src={
                                    step.isComplete
                                        ? "/img/icons/radio-tick.svg"
                                        : "/img/icons/radio.svg"
                                }
                                mt={1}
                            />
                            <Stack gap={2}>
                                <Text fontWeight={500}>{step.title}</Text>
                                <Text fontSize={14}>{step.description}</Text>
                            </Stack>
                        </HStack>
                    );
                })
            ) : (
                <VStack>
                    <Stack
                        borderRadius="12px"
                        border="1px solid #EDEEEF"
                        w="full"
                        p={4}
                        align={"start"}
                        gap={2}
                    >
                        <Text fontWeight={500}>Applying for jobs</Text>
                        <Text fontSize={14}>Find quality work that matches your unique skillset and experience.</Text>
                    </Stack>
                    <Stack
                        borderRadius="12px"
                        border="1px solid #EDEEEF"
                        w="full"
                        p={4}
                        align={"start"}
                        gap={2}
                    >
                        <Text fontWeight={500}>Quality profile</Text>
                        <Text fontSize={14}>
                            A professional profile can help you stand out from the competition
                            and get you in front of clients you want to work with. <span style={{ color: '#053AF9' }}>Learn more</span>
                        </Text>
                    </Stack>
                </VStack>
            )}
        </VStack>
    );
}