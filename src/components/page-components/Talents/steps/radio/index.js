import { Box, HStack, Image, Text } from "@chakra-ui/react";

export const RadioButton = ({
  label,
  isChecked,
  onChange,
}) => (
  <HStack
    border={"1px solid #edeeef"}
    w={"full"}
    p={4}
    rounded={"12px"}
    onClick={onChange}
  >
    <Box cursor={'pointer'}>
      {isChecked ? (
        <Image src="/img/icons/radio-checked.svg" alt="Checked" />
      ) : (
        <Image src="/img/icons/radio.svg" alt="Unchecked" />
      )}
    </Box>
    <Text fontSize={14} color={"#454C58"}>
      {label}
    </Text>
  </HStack>
);
