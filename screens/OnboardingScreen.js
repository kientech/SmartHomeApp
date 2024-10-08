import React from "react";
import { View, Text, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace("Main")} // Thay vì HomeScreen
      onDone={() => navigation.replace("Main")} // Thay vì HomeScreen
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: (
            <Image
              source={{
                uri: "https://cdn.dribbble.com/userupload/2794853/file/original-e5238c3c6a9c7091b6d63620e3fc7d01.png?resize=2048x1535",
              }}
              style={{ width: 200, height: 200 }}
            />
          ),
          title: "Welcome to App",
          subtitle: "This is Screen 1",
        },
        {
          backgroundColor: "#fdeb93",
          image: (
            <Image
              source={{
                uri: "https://cdn.dribbble.com/userupload/2794853/file/original-e5238c3c6a9c7091b6d63620e3fc7d01.png?resize=2048x1535",
              }}
              style={{ width: 200, height: 200 }}
            />
          ),
          title: "Onboarding Screen 2",
          subtitle: "Learn more about the features here",
        },
        {
          backgroundColor: "#e9bcbe",
          image: (
            <Image
              source={{
                uri: "https://cdn.dribbble.com/userupload/2794853/file/original-e5238c3c6a9c7091b6d63620e3fc7d01.png?resize=2048x1535",
              }}
              style={{ width: 200, height: 200 }}
            />
          ),
          title: "Onboarding Screen 3",
          subtitle: "Get started now!",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
