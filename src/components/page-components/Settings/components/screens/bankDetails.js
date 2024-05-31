import {
  Button,
  HStack,
  Input,
  Select,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { BsChevronLeft } from "react-icons/bs";

export const BankDetails = ({ handleEdit }) => {
  const toast = useToast();
  const saveEdit = () => {
    toast({
      title: "Changes saved",
      status: "success",
      position: 'top-right',
      duration: 2000,
      isClosable: true,
    });
    handleEdit();
  };
  return (
    <Stack
      borderRadius="12px"
      border="1px solid #EDEEEF"
      w="full"
      align="start"
      bg="#FFF"
      gap={2}
    >
      <HStack
        cursor="pointer"
        onClick={handleEdit}
        w="full"
        borderBottom="1px solid #EDEEEF"
        px={4}
        py={2}
      >
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
          Add Bank Details
        </Text>
      </HStack>
      <Stack w="full" p={2}>
        <Stack
          borderRadius="12px"
          border="1px solid #EDEEEF"
          w="full"
          p={2}
          pl={4}
          justify="start"
          align="start"
        >
          <Text color="#4C5361" fontSize={14}>
            Ensure your bank account details match your account information
            accurately.
          </Text>
        </Stack>
        <Stack>
          <Stack w="full" justify="space-between" p={2} gap={4}>
            <Stack gap={2}>
              <Text fontSize={14} color="#707581" textShadow="sm">
              Bank Account
              </Text>
              <Select
                rounded={"8px"}
                fontSize={14}
                color="#707581"
                placeholder="Select Bank"
              >
                <option>Coming soon...</option>
              </Select>
            </Stack>
            <Stack gap={2}>
              <Text fontSize={14} color="#707581" textShadow="sm">
              Account Number
              </Text>
              <Input fontSize={14} placeholder="Custom" />
            </Stack>
            <Text fontSize={14} color='#707581'>Generated bank details here...</Text>
          </Stack>
          <HStack w="full" justify="end" mt={8}>
            <Button
              fontWeight={400}
              color="#4C5361"
              h="40px"
              p="8px 16px"
              gap={2}
              rounded={"12px"}
              bg="#F6F7F7"
              border="1px solid #EDEEEF"
              onClick={handleEdit}
              w='160px'
            >
              Discard
            </Button>
            <Button
              fontWeight={400}
              color="#FFFFFF"
              h="40px"
              p="8px 16px"
              gap={2}
              rounded={"12px"}
              bg="#053AF9"
              boxShadow="sm"
              w='160px'
              onClick={saveEdit}
            >
              Add Bank Details
            </Button>
          </HStack>
        </Stack>
      </Stack>
    </Stack>
  );
};
