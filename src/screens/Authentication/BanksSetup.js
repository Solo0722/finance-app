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
  FlatList,
} from "native-base";
import ScreenWrapper from "../../components/ScreenWrapper";
import { darkTheme } from "../../theme/colors";
import { Iconify } from "react-native-iconify";
import BackButton from "../../components/BackButton";
import { routeNames } from "../../constants/routeNames";
import { bankAccounts } from "./helpers/bankAccounts";

const BanksSetup = ({ navigation }) => {
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
                Setup {"\n"}bank account(s)
              </Heading>
              <Heading
                mt="2"
                color={darkTheme.grayColor}
                fontWeight="medium"
                size="xs"
              >
                Select banks you have an account with
              </Heading>
            </Box>
          </VStack>

          <VStack space={7} mt="10">
            <FlatList
              data={bankAccounts}
              renderItem={({ item }) => (
                <Button
                  variant="unstyled"
                  rounded="lg"
                  bgColor={darkTheme.accentColor3}
                  borderColor={"transparent"}
                  color={darkTheme.textColor}
                  _text={{ fontSize: "xs" }}
                >
                  {item.name}
                </Button>
              )}
              numColumns={3}
              key="flast"
              columnWrapperStyle={{ gap: 10 }}
              ItemSeparatorComponent={<View my="2" />}
            />
            <Button
              mt="2"
              colorScheme="indigo"
              rounded="lg"
              onPress={() =>
                navigation.navigate(routeNames.VERIFICATIONCOMPLETE)
              }
            >
              Continue
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

export default BanksSetup;

const styles = StyleSheet.create({});
