import { ErrorMessage } from "formik";
import { Text } from "@chakra-ui/react";

export const FormErrorMessage = ({ name }) => {
  return (
    <ErrorMessage name={name}>
      {(msg) => (
        <Text fontSize={12} color={"red"}>
          {msg}
        </Text>
      )}
    </ErrorMessage>
  );
};
