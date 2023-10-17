import { StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import {
  Center,
  Heading,
  Text,
  View,
  Box,
  FormControl,
  Input,
  Button,
  Link,
  HStack,
  VStack,
  Icon,
  Divider,
  Toast,
} from "native-base";
import ScreenWrapper from "../../components/ScreenWrapper";
import { darkTheme } from "../../theme/colors";
import { Iconify } from "react-native-iconify";
import { routeNames, storageKeys } from "../../constants/routeNames";
import { useState } from "react";
import { saveToAsyncStorage } from "../../services/dataServices";
import { client } from "../../services/sanityClient";
import uniqueId from "lodash/uniqueId";
import { GlobalContext } from "../../context/ContextProvider";

const Signup = ({ navigation }) => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isSignupEnabled, setIsSignupEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setLoggedInUser } = useContext(GlobalContext);

  const handleChange = (name, value) => {
    setSignupData({ ...signupData, [name]: value });
  };

  const signUserUp = () => {
    if (isSignupEnabled) {
      setLoading(true);
      const doc = {
        _id: uniqueId(),
        _type: "user",
        fullName: signupData.fullName,
        email: signupData.email,
        password: signupData.password,
        userImg: null,
      };

      client
        .createIfNotExists(doc)
        .then(async (result) => {
          setLoggedInUser(result);
          await saveToAsyncStorage(storageKeys.USER, result);
          navigation.navigate(routeNames.TAB);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          Toast.show({
            title: "Sign up failed! Try again.",
          });
          setLoading(false);
          return;
        });
    }
    setLoading(false);
  };

  useEffect(() => {
    if (
      signupData.fullName &&
      signupData.email &&
      signupData.password &&
      signupData.confirmPassword &&
      signupData.password.trim() === signupData.confirmPassword.trim()
    )
      setIsSignupEnabled(true);
  }, [signupData]);

  return (
    <ScreenWrapper>
      <Box safeArea py="8" w="100%" height="100%" flex="1">
        <Center w="100%" height={"100%"} flex="1" position="relative">
          <VStack space={5} w="full">
            <Box>
              <Heading size="lg" fontWeight="700">
                Sign up {"\n"}to an account
              </Heading>
              <Heading
                mt="2"
                _dark={{
                  color: "warmGray.200",
                }}
                color={darkTheme.grayColor}
                fontWeight="medium"
                size="xs"
              >
                Let's help you get started
              </Heading>
            </Box>
          </VStack>

          <VStack space={5} mt="10" w="full">
            <FormControl>
              <Input
                name="fullName"
                value={signupData.fullName}
                onChangeText={(e) => handleChange("fullName", e)}
                bgColor={darkTheme.accentColor3}
                borderColor={"transparent"}
                rounded={"lg"}
                color={darkTheme.textColor}
                _focus={{
                  bgColor: darkTheme.accentColor3,
                  borderColor: "transparent",
                }}
                placeholderTextColor={darkTheme.grayColor}
                InputLeftElement={
                  <Icon
                    as={
                      <Iconify
                        icon="solar:user-bold"
                        size={18}
                        strokeWidth={20}
                      />
                    }
                    size={5}
                    color={darkTheme.grayColor}
                    ml="2"
                  />
                }
                placeholder="Full Name"
              />
            </FormControl>
            <FormControl>
              <Input
                name="email"
                value={signupData.email}
                onChangeText={(e) => handleChange("email", e)}
                bgColor={darkTheme.accentColor3}
                borderColor={"transparent"}
                rounded={"lg"}
                color={darkTheme.textColor}
                _focus={{
                  bgColor: darkTheme.accentColor3,
                  borderColor: "transparent",
                }}
                placeholderTextColor={darkTheme.grayColor}
                InputLeftElement={
                  <Icon
                    as={
                      <Iconify
                        icon="solar:letter-bold"
                        size={18}
                        strokeWidth={20}
                      />
                    }
                    size={5}
                    color={darkTheme.grayColor}
                    ml="2"
                  />
                }
                placeholder="Email"
              />
            </FormControl>
            <FormControl>
              <Input
                name="password"
                value={signupData.password}
                onChangeText={(e) => handleChange("password", e)}
                type="password"
                bgColor={darkTheme.accentColor3}
                borderColor={"transparent"}
                rounded={"lg"}
                color={darkTheme.textColor}
                _focus={{
                  bgColor: darkTheme.accentColor3,
                  borderColor: "transparent",
                }}
                placeholderTextColor={darkTheme.grayColor}
                InputLeftElement={
                  <Icon
                    as={
                      <Iconify
                        icon="solar:lock-password-bold"
                        size={18}
                        strokeWidth={20}
                      />
                    }
                    size={5}
                    color={darkTheme.grayColor}
                    ml="2"
                  />
                }
                placeholder="Password"
              />
            </FormControl>
            <FormControl>
              <Input
                name="confirmPassword"
                value={signupData.confirmPassword}
                onChangeText={(e) => handleChange("confirmPassword", e)}
                type="password"
                bgColor={darkTheme.accentColor3}
                borderColor={"transparent"}
                rounded={"lg"}
                color={darkTheme.textColor}
                _focus={{
                  bgColor: darkTheme.accentColor3,
                  borderColor: "transparent",
                }}
                placeholderTextColor={darkTheme.grayColor}
                InputLeftElement={
                  <Icon
                    as={
                      <Iconify
                        icon="solar:lock-password-bold"
                        size={18}
                        strokeWidth={20}
                      />
                    }
                    size={5}
                    color={darkTheme.grayColor}
                    ml="2"
                  />
                }
                placeholder="Confirm Password"
              />
            </FormControl>
            <Button
              mt="2"
              colorScheme="indigo"
              rounded="lg"
              onPress={signUserUp}
              isLoading={loading}
              disabled={!isSignupEnabled}
            >
              Sign up
            </Button>
            <Divider thickness={0.15} bgColor={darkTheme.grayColor}>
              or
            </Divider>
            <Button
              mt="2"
              colorScheme="blueGray"
              bgColor={"coolGray.800"}
              _text={{
                color: darkTheme.lightGrayColor,
              }}
              rounded="lg"
              onPress={() => navigation.navigate(routeNames.VERIFYNUMBER)}
            >
              Continue with Google
            </Button>
          </VStack>
          <HStack
            style={{ position: "absolute", bottom: 20 }}
            justifyContent="center"
            textAlign="center"
            w="full"
          >
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              Already a user?{" "}
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
                textDecoration: "none",
              }}
              onPress={() => navigation.navigate(routeNames.SIGNIN)}
            >
              Sign in
            </Link>
          </HStack>
        </Center>
      </Box>
    </ScreenWrapper>
  );
};

export default Signup;

const styles = StyleSheet.create({});
