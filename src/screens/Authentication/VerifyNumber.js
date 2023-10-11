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

const VerifyNumber = ({ navigation }) => {
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
                Verify {"\n"}phone number
              </Heading>
              <Heading
                mt="2"
                color={darkTheme.grayColor}
                fontWeight="medium"
                size="xs"
              >
                Enter your phone number for verification
              </Heading>
            </Box>
          </VStack>

          <VStack space={7} mt="10">
            <FormControl>
              <Input
                keyboardType="phone-pad"
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
                        icon="solar:phone-bold"
                        size={18}
                        strokeWidth={20}
                      />
                    }
                    size={5}
                    color={darkTheme.grayColor}
                    ml="2"
                  />
                }
                InputRightElement={
                  <Button
                    variant="unstyled"
                    mr="2"
                    _text={{ color: "indigo.500", fontSize: "xs" }}
                  >
                    Get code
                  </Button>
                }
                placeholder="Phone Number"
              />
            </FormControl>
            <FormControl>
              <Input
                keyboardType="phone-pad"
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
                        icon="solar:hashtag-square-bold"
                        size={18}
                        strokeWidth={20}
                      />
                    }
                    size={5}
                    color={darkTheme.grayColor}
                    ml="2"
                  />
                }
                placeholder="Code"
              />
            </FormControl>
            <Button
              mt="2"
              colorScheme="indigo"
              rounded="lg"
              onPress={() => navigation.navigate(routeNames.BANKSETUP)}
            >
              Verify Code
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
              Skip
            </Text>
          </HStack>
        </Box>
      </Center>
    </ScreenWrapper>
  );
};

export default VerifyNumber;

const styles = StyleSheet.create({});
