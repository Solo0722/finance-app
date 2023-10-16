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

const CurrencyConverter = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <Box w="100%" height="100%" flex="1" safeArea p="2" py="8">
        <BackButton styles={{ width: 24, height: 24 }} />
        <Box
          safeArea
          w="100%"
          height={"100%"}
          flex="1"
          justifyContent={"center"}
          position="relative"
        >
          <VStack space={7}>
            <Box>
              <Heading size="lg" fontWeight="700">
                Currency {"\n"}Converter
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
                Get accurate foreign exchange conversion rates
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
                InputRightElement={
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
                    mr="2"
                  />
                }
                placeholder="From"
              />
            </FormControl>
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
                InputRightElement={
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
                    mr="2"
                  />
                }
                placeholder="To"
              />
            </FormControl>
            <Button
              mt="2"
              colorScheme="indigo"
              rounded="lg"
              onPress={() => navigation.navigate(routeNames.VERIFYNUMBER)}
            >
              Convert
            </Button>
          </VStack>
        </Box>
      </Box>
    </ScreenWrapper>
  );
};

export default CurrencyConverter;

const styles = StyleSheet.create({});
