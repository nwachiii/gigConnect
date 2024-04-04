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
    {isChecked ? (
      <Image src="/img/icons/radio-check.svg" alt="Checked" />
    ) : (
      <Image src="/img/icons/radio.svg" alt="Unchecked" />
    )}
    <Text fontSize={14} color={"#454C58"}>
      {label}
    </Text>
  </HStack>
);
