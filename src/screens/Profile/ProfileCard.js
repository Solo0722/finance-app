import { StyleSheet } from "react-native";
import React from "react";
import {
  Button,
  Circle,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  View,
} from "native-base";
import { darkTheme } from "../../theme/colors";

const ProfileCard = () => {
  return (
    <View
      w="full"
      minH={150}
      bgColor={darkTheme.accentColor3}
      rounded={"lg"}
      justifyContent={"center"}
      alignContent={"center"}
      p={"4"}
      position="relative"
      mt="100"
    >
      <Circle
        w={100}
        h={100}
        bgColor={darkTheme.accentColor3}
        position="absolute"
        left={"40%"}
        top={-50}
      >
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/494308298/photo/woman-with-spyglass-looking-toward-ocean.jpg?s=612x612&w=0&k=20&c=SFm1jX9hZLfv5SGdnG8YNyFmDXYsjDJPbVYuEqUvpxY=",
          }}
          alt="image"
          w={"full"}
          h={"full"}
          rounded="full"
        />
      </Circle>
      <VStack
        space="1"
        alignItems="center"
        justifyContent={"center"}
        mt={50}
        mb={2}
      >
        <Heading fontSize="md">Owusu Solomon</Heading>
        <Text fontSize="xs" color={darkTheme.grayColor}>
          owusuansahsolomon39@gmail.com
        </Text>
      </VStack>
      <HStack space="2" justifyContent="center">
        <Button
          size="xs"
          w="1/3"
          variant={"unstyled"}
          bgColor={darkTheme.grayColor}
        >
          Edit profile
        </Button>
        <Button size="xs" w="1/3" variant={"unstyled"} bgColor={"darkBlue.500"}>
          Share profile
        </Button>
        <Button size="xs" w="1/3" variant={"unstyled"} bgColor={"danger.500"}>
          Logout
        </Button>
      </HStack>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({});
