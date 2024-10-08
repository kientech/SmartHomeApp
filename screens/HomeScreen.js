import { View, SafeAreaView } from "react-native";
import React from "react";
import WelcomeUser from "../components/WelcomeUser";
import TempHumiComponent from "../components/TempHumiComponent";
import TabRoomComponent from "../components/TabRoomComponent";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="mx-4">
        <WelcomeUser />
        <TempHumiComponent />
        <TabRoomComponent />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
