import { Image, Text, View } from "react-native";
import React from "react";

const WelcomeUser = () => {
  return (
    <View className="flex flex-row items-center justify-between mb-6">
      <View>
        <Text className="font-base text-md">Good morning</Text>
        <Text className="font-semibold text-xl">Kien Duong Trung</Text>
      </View>
      <View className="">
        <Image
          source={{
            uri: "https://cdn.dribbble.com/userupload/15606792/file/original-2ddaf82660a278f7ad924b951d2b05bc.png?resize=1504x1128",
          }}
          className="w-12 h-12 rounded-full"
        />
      </View>
    </View>
  );
};

export default WelcomeUser;
