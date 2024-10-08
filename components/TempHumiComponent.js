import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { MapPinIcon } from "react-native-heroicons/outline";

const TempHumiComponent = () => {
  const data = [
    {
      id: 1,
      temp: "24°C",
      location: "Ho Chi Minh City",
      icon: require("../assets/weather/5-2.png"),
      status: "Sunny",
    },
    {
      id: 2,
      temp: "24°C",
      location: "Ho Chi Minh City",
      icon: require("../assets/weather/5-2.png"),
      status: "Sunny",
    },
  ];

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View className="flex flex-row mt-4 w-full mb-6">
        {data.map((item) => (
          <View
            key={item.id}
            className="w-[360px] px-6 py-4 mr-4 bg-gray-200 rounded-2xl flex-row items-center justify-between"
          >
            <View>
              <View className="flex-row items-center gap-x-2 mb-6">
                <MapPinIcon size={18} color={"#000"} />
                <Text className="font-base text-lg">{item.location}</Text>
              </View>
              <Text className="font-bold text-4xl mb-2">{item.temp}</Text>
              <Text className="text-lg">{item.status}</Text>
            </View>
            <Image source={item.icon} className="w-28 h-28" />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default TempHumiComponent;
