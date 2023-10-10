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
} from "native-base";
import ScreenWrapper from "../../components/ScreenWrapper";
import { darkTheme } from "../../theme/colors";
import { Iconify } from "react-native-iconify";
import BackButton from "../../components/BackButton";
import { routeNames } from "../../constants/routeNames";

const Login = ({ navigation }) => {
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
            {/* <BackButton styles={{ width: 24, height: 24 }} /> */}
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

          <VStack space={7} mt="10">
            <FormControl>
              <Input
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
                        icon="solar:plain-3-bold"
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
                        icon="solar:plain-3-bold"
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
              {/* <Link
                _text={{
                  fontSize: "xs",
                  fontWeight: "500",
                  color: "indigo.500",
                }}
                alignSelf="flex-end"
                mt="1"
              >
                Forget Password?
              </Link> */}
            </FormControl>
            <Button mt="2" colorScheme="indigo" rounded="lg">
              Sign in
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
        </Box>
      </Center>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({});
