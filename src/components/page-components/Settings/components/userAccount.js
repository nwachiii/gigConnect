import { UserIcon } from "@/assets/icons/Navbar/user-icon";
import { countries } from "@/lib";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Input,
  Select,
  Stack,
  StackDivider,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronLeft } from "react-icons/bs";

export const UserAccount = () => {
  const [editScreen, setEditScreen] = useState(false);

  const handleEdit = () => {
    setEditScreen(editScreen ? false : true);
  };
  return (
    <>
      {editScreen ? (
        <EditAccount handleEdit={handleEdit} />
      ) : (
        <AccountDetails handleEdit={handleEdit} />
      )}
    </>
  );
};

const AccountDetails = ({ handleEdit }) => {
  return (
    <Stack
      borderRadius="12px"
      border="1px solid #EDEEEF"
      w="full"
      align="start"
      bg="#FFF"
      gap={2}
    >
      <Text
        px={4}
        py={2}
        w="full"
        fontWeight={500}
        fontSize={18}
        borderBottom="1px solid #EDEEEF"
      >
        Account
      </Text>
      <VStack w="full" p={4}>
        <Stack
          borderRadius="12px"
          border="1px solid #EDEEEF"
          w="full"
          align="start"
          bg="#FFF"
          py={2}
          divider={<StackDivider />}
        >
          <Text pl={2} fontWeight={500}>
            You are a talent
          </Text>
          <Text color="#4C5361" pl={2} fontSize={14}>
            Pellentesque lobortis urna arcu, non gravida nulla vehicula
            vestibulum raesent risus massa, vestibulum.
          </Text>
        </Stack>
      </VStack>
      <VStack w="full" px={4}>
        <Text
          fontSize={12}
          textTransform="uppercase"
          color="#878C95"
          letterSpacing={"1.05px"}
          alignSelf="start"
        >
          Account Details
        </Text>
        <Stack
          borderRadius="12px"
          border="1px solid #EDEEEF"
          w="full"
          align="start"
          bg="#FFF"
          gap={2}
          px={4}
          divider={<StackDivider />}
        >
          <Flex w="full" justify="space-between">
            <VStack align="center" gap="4px" p={4}>
              <Avatar bg="#F5F5F5" icon={<UserIcon />} />
              <Text fontWeight={500}>Ola Ahmed</Text>
              <Text fontSize={14} color="#667085">
                olaahmed@gmail.com
              </Text>
            </VStack>
            <Box
              bg="#F6F7F7"
              border="1px solid #EDEEEF"
              p="12px"
              h="max-content"
              rounded="full"
              cursor="pointer"
              mt={2}
              onClick={handleEdit}
            >
              <Image src="/img/icons/edit-icon.svg" />
            </Box>
          </Flex>
          <HStack w="full" justify="space-between" maxW="690px" p={6}>
            <Stack gap={2}>
              <Text fontWeight={500} fontSize={14} color="#707581">
                Phone Number
              </Text>
              <Text>******59</Text>
            </Stack>
            <Stack gap={2}>
              <Text fontWeight={500} fontSize={14} color="#707581">
                Country
              </Text>
              <Text>Nigeria</Text>
            </Stack>
            <Stack gap={2}>
              <Text fontWeight={500} fontSize={14} color="#707581">
                Joined Date
              </Text>
              <Text>Oct 12, 2023</Text>
            </Stack>
          </HStack>
        </Stack>
      </VStack>
      <Button
        fontWeight={400}
        color="#4C5361"
        mt={12}
        p="6px 14px"
        w="200px"
        gap={2}
        ml={4}
        rounded={"12px"}
        mb={2}
        bg="#F6F7F7"
        border="1px solid #EDEEEF"
      >
        <Image src="/img/icons/settings-trash.svg" boxSize={"24px"} />
        <Text fontSize={14}>Close Talent Account</Text>
      </Button>
    </Stack>
  );
};

const EditAccount = ({ handleEdit }) => {
  const toast = useToast()
  const saveEdit = () => {
    toast({
      title: "Changes saved",
      status: "success",
      duration: 2000,
      isClosable: true,
    })
    handleEdit()
  }
  return (
    <Stack
      borderRadius="12px"
      border="1px solid #EDEEEF"
      w="full"
      align="start"
      bg="#FFF"
      gap={2}
      pb={6}
    >
      <HStack cursor='pointer' onClick={handleEdit} w="full" borderBottom="1px solid #EDEEEF" px={4} py={2}>
        <Stack
          bg={"#F6F7F7"}
          border="1px solid #EDEEEF"
          justify={"center"}
          p={1.5}
          rounded={"full"}
          
        >
          <BsChevronLeft />
        </Stack>
        <Text w="full" fontWeight={500} fontSize={18}>
          Go back to Account
        </Text>
      </HStack>
      <Heading fontSize={32} maxW={300} lineHeight={"48px"} pl={4}>
        Edit account details
      </Heading>
      <VStack w="full" px={4}>
        <Stack
          borderRadius="12px"
          border="1px solid #EDEEEF"
          w="full"
          align="start"
          bg="#FFF"
          gap={2}
          px={4}
        >
          <Flex
            align="center"
            border="1px solid #EDEEEF"
            p={"8px 28px"}
            h="100px"
            // w="165px"
            rounded={"16px"}
            gap={4}
            mt={12}
          >
            <Avatar
              boxSize={"64px"}
              bg="#F5F5F5"
              icon={<UserIcon boxSize={"32px"} />}
            />
            <Box
              bg="#F6F7F7"
              border="1px solid #EDEEEF"
              p="12px"
              // h="max-content"
              rounded="full"
              cursor="pointer"
            >
              <Image src="/img/icons/edit-icon.svg" boxSize={"20px"} />
            </Box>
          </Flex>
          <Stack w="full" justify="space-between" p={2} gap={4}>
            <Stack gap={2}>
              <Text fontSize={14} color="#707581" textShadow="sm">
                First Name
              </Text>
              <Input fontSize={14} value="Ola" />
            </Stack>
            <Stack gap={2}>
              <Text fontSize={14} color="#707581" textShadow="sm">
                Last Name
              </Text>
              <Input fontSize={14} value="Ahmed" />
            </Stack>
            <Stack gap={2}>
              <Text fontSize={14} color="#707581" textShadow="sm">
                Country
              </Text>
              <Select
                value="Nigeria"
                bg="#F2F4F7"
                rounded={"8px"}
                border="1px solid #D0D5DD"
                fontSize={14}
                color="#707581"
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </Select>
            </Stack>
            <Stack gap={2}>
              <Text fontSize={14} color="#707581" textShadow="sm">
                Phone Number
              </Text>
              <Input
                bg="#F2F4F7"
                rounded={"8px"}
                border="1px solid #D0D5DD"
                fontSize={14}
                value="****59"
                color="#707581"
              />
            </Stack>
            <Stack gap={2}>
              <Text fontSize={14} color="#707581" textShadow="sm">
                Email Address
              </Text>
              <Input
                bg="#F2F4F7"
                rounded={"8px"}
                border="1px solid #D0D5DD"
                fontSize={14}
                value="olaahmed@gmail.com"
                color="#707581"
              />
            </Stack>
          </Stack>
          <HStack w='full' justify="end" mt={8} mb={4}>
            <Button
              fontWeight={400}
              color="#4C5361"
              h='50px'
              p="12px 16px"
              gap={2}
              rounded={"12px"}
              bg="#F6F7F7"
              border="1px solid #EDEEEF"
              onClick={handleEdit}
            >
              Cancel
            </Button>
            <Button
              fontWeight={400}
              color="#FFFFFF"
              h='50px'
              p="12px 16px"
              gap={2}
              rounded={"12px"}
              bg="#053AF9"
              boxShadow='sm'
              onClick={saveEdit}
            >
              Save Changes
            </Button>
          </HStack>
        </Stack>
      </VStack>
    </Stack>
  );
};
