"use client";
import * as Yup from "yup";
import { BsEyeSlash } from "react-icons/bs";
import { Formik, Form, Field } from "formik";
import { Footer } from "@/components/Footer";
import { useMutation } from "@tanstack/react-query";
import { GCButton } from "@/ui-lib/ui-lib-components/Button";
import {
  Box,
  Flex,
  Heading,
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Image,
  useToast,
  Link,
  Stack,
} from "@chakra-ui/react";
import { GoogleBtn } from "@/assets/icons/GoogleBtn";
import { useRouter } from "next/navigation";

// Validation Schema
const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export const sharedInputStyles = {
  borderRadius: "12px",
  fontWeight: "500",
  height: "51px",
  border: "1px solid #E0E0E0",
  background: "#FFF",
  focusBorderColor: "gray.50",
  _placeholder: {
    color: "#888A8F",
    fontSize: "12px",
    fontWeight: "400",
  },
};

export const SignIn = () => {
  const toast = useToast();
  const router = useRouter();
  // React Query Mutation for signing in
  // const mutation = useMutation((data) => console.log('Ready to sign in', data), {
  // 	onSuccess: () => {
  // 		toast({title: 'Signed in successfully', status: 'success'});
  // 	},
  // 	onError: (error) => {
  // 		toast({title: 'Sign in failed', description: error.message, status: 'error'});
  // 	},
  // });

  return (
    <Box background={"#fff"} w={"full"} justify={"center"}>
      <Flex maxW="1400px" mx="auto" px="70px">
        <Link href="/">
          <Image src={"/img/brand/GigConnectLogo.svg"} alt="logo" p={10} />
        </Link>
      </Flex>
      <Flex alignItems={"center"} justify={"center"}>
        <Box
          width={{ base: "90%", md: "460px" }}
          bg="#ffffffcc"
          borderRadius={10}
          border="1px solid #ebebeb"
          p={10}
        >
          <Heading fontWeight="800" color="#0D0D0D" fontSize="32px" mb={8}>
            Sign in to <br /> your account
          </Heading>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={SignInSchema}
            onSubmit={(values) => {
              // mutation.mutate(values);
              console.log({ ...values });
              router.push("/workspace");
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <VStack spacing={"28px"}>
                  <Field name="email">
                    {({ field }) => (
                      <VStack align={"start"} w={"full"}>
                        <Text fontWeight="500" fontSize="12px" color="#0D0D0D">
                          Email
                        </Text>
                        <Input
                          {...field}
                          type="email"
                          placeholder="Enter your email"
                          isInvalid={errors.email && touched.email}
                          {...sharedInputStyles}
                        />
                        {errors.email && touched.email ? (
                          <Text fontSize="sm" color="red.500">
                            {errors.email}
                          </Text>
                        ) : null}
                      </VStack>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field }) => (
                      <VStack align={"start"} w={"full"}>
                        <Text fontWeight="500" fontSize="12px" color="#0D0D0D">
                          Password
                        </Text>
                        <InputGroup>
                          <Input
                            {...field}
                            type="password"
                            placeholder="Enter password"
                            isInvalid={errors.password && touched.password}
                            {...sharedInputStyles}
                          />
                          <InputRightElement>
                            <BsEyeSlash size={25} color="#727272" />
                          </InputRightElement>
                        </InputGroup>
                        {errors.password && touched.password ? (
                          <Text fontSize="sm" color="red.500">
                            {errors.password}
                          </Text>
                        ) : null}
                      </VStack>
                    )}
                  </Field>
                  <Stack w="full" spacing="28px">
                    <GCButton
                      type="submit"
                      w={"full"}
                      bg="#0D0D0D"
                      py={"12px"}
                      h="42px"
                      color={"#fff"}
                    >
                      Sign in
                    </GCButton>
                    <GCButton
                      type="submit"
                      w={"full"}
                      py={"12px"}
                      h="42px"
                      color={"#0D0D0D"}
                      bg={"#F0F0F0"}
                      leftIcon={<GoogleBtn />}
                    >
                      Sign in with Google
                    </GCButton>
                    <Text
                      textAlign={"center"}
                      color="#888A8F"
                      fontSize={"14px"}
                      fontWeight={"400"}
                    >
                      Don’t have an Account?{" "}
                      <Link
                        href="/auth/create-account/select-type"
                        style={{ fontWeight: "500", color: "#0D0D0D" }}
                      >
                        Create an Account
                      </Link>
                    </Text>
                  </Stack>
                </VStack>
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};

export default SignIn;
