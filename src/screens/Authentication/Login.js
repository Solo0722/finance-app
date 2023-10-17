import { StyleSheet } from "react-native";
import React from "react";
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
import { useState, useEffect } from "react";
import { saveToAsyncStorage } from "../../services/dataServices";
import { client } from "../../services/sanityClient";
import { useContext } from "react";
import { GlobalContext } from "../../context/ContextProvider";
import BackButton from "../../components/BackButton";

const Login = ({ navigation }) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [isLoginEnabled, setIsLoginEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setLoggedInUser } = useContext(GlobalContext);

  const handleChange = (name, value) => {
    setLoginData({ ...loginData, [name]: value });
  };

  const logUserIn = () => {
    if (isLoginEnabled) {
      setLoading(true);
      const query = `*[_type == 'user' && email == '${loginData.email.trim()}' && password == '${loginData.password.trim()}']`;
      client
        .fetch(query)
        .then(async (result) => {
          setLoggedInUser(result[0]);
          await saveToAsyncStorage(storageKeys.USER, result[0]);
          navigation.navigate(routeNames.TAB);
          setLoading(false);
        })
        .catch((err) => {
          Toast.show({
            title: "Login failed! Try again.",
          });
          setLoading(false);
          return;
        });
    }
  };

  useEffect(() => {
    if (loginData.email && loginData.password) setIsLoginEnabled(true);
  }, [loginData]);

  return (
    <ScreenWrapper>
      <Box safeArea py="8" w="100%" height="100%" flex="1">
        <Center safeArea w="100%" height={"100%"} flex="1" position="relative">
          <VStack space={5} w="full">
            <Box>
              <Heading size="lg" fontWeight="700">
                Sign in {"\n"}to your account
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
                Welcome back. We've missed you.
              </Heading>
            </Box>
          </VStack>

          <VStack space={5} mt="10" w="full">
            <FormControl>
              <Input
                name="email"
                value={loginData.email}
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
                value={loginData.password}
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
              <Link
                _text={{
                  fontSize: "xs",
                  fontWeight: "500",
                  color: "indigo.500",
                  textDecoration: "none",
                }}
                alignSelf="flex-end"
                mt="1"
              >
                Forget Password?
              </Link>
            </FormControl>
            <Button
              mt="2"
              colorScheme="indigo"
              rounded="lg"
              onPress={logUserIn}
              isLoading={loading}
              disabled={!isLoginEnabled}
            >
              Sign in
            </Button>
            <Divider variant="" thickness={0.15} bgColor={darkTheme.grayColor}>
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
              onPress={() => navigation.navigate(routeNames.TAB)}
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
              I'm a new user.
            </Text>
            <Link
              _text={{
                color: "indigo.400",
                fontWeight: "medium",
                fontSize: "sm",
                textDecoration: "none",
              }}
              onPress={() => navigation.navigate(routeNames.SIGNUP)}
            >
              Sign up
            </Link>
          </HStack>
        </Center>
      </Box>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({});
