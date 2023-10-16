import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
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
} from "native-base";
import ScreenWrapper from "../../components/ScreenWrapper";
import { darkTheme } from "../../theme/colors";
import { Iconify } from "react-native-iconify";
import BackButton from "../../components/BackButton";
import { routeNames, storageKeys } from "../../constants/routeNames";
import { registerUser } from "../../services/apiServices";
import { useState } from "react";
import { saveToAsyncStorage } from "../../services/dataServices";
import { useStore } from "../../store/Store";
import { setLoggedInUser } from "../../store/modules/auth/actions/AuthAction";

const Signup = ({ navigation }) => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isSignupEnabled, setIsSignupEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dispatch] = useStore();

  const handleChange = (name, value) => {
    setSignupData({ ...signupData, [name]: value });
  };

  const signUserUp = async () => {
    if (isSignupEnabled) {
      // setLoading(true);
      const response = registerUser(signupData);
      if (response.data) {
        console.log(response);
        await saveToAsyncStorage(storageKeys.USER, response.data);
        // dispatch(setLoggedInUser(response.data));
        // navigation.navigate(routeNames.VERIFICATIONCOMPLETE);
      }
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
      <Center w="100%" height="100%" flex="1">
        <Box
          safeArea
          p="2"
          py="8"
          w="100%"
          height={"100%"}
          flex="1"
          position="relative"
        >
          <VStack space={7}>
            <BackButton styles={{ width: 24, height: 24 }} />
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

          <VStack space={7} mt="10">
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
              _disabled={{
                color: "red.300",
              }}
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
        </Box>
      </Center>
    </ScreenWrapper>
  );
};

export default Signup;

const styles = StyleSheet.create({});
