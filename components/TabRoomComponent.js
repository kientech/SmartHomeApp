import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import {
  EllipsisHorizontalIcon,
  PlusIcon,
  PowerIcon,
} from "react-native-heroicons/outline";

const TabRoomComponent = () => {
  const [activeTab, setActiveTab] = useState("Living Room");

  // Tabs array
  const tabs = ["Living Room", "Bathroom", "Bedroom", "Kitchen"];

  // Function to render content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "Living Room":
        return (
          <View className="my-8">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-xl font-bold mb-1">Devices</Text>
                <Text>6 Connection</Text>
              </View>
              <TouchableOpacity
                onPress={() => Alert.alert("Clicked Add Device")}
                className="flex-row items-center gap-x-2 border px-3 py-3 rounded-xl border-gray-200 bg-white"
              >
                <PlusIcon size={16} color={"#000"} />
                <Text>Add Device</Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row flex-wrap justify-between gap-y-5 my-2">
              {[1, 2, 3, 4].map((item) => (
                <View className="bg-white w-[48%] p-4 rounded-lg">
                  <View className="flex-row items-center justify-between">
                    <View className="p-3 bg-green-50 rounded-full">
                      <Image
                        source={require("../assets/app/tv.png")}
                        className="w-7 h-7"
                      />
                    </View>
                    <EllipsisHorizontalIcon color={"#000"} />
                  </View>
                  <View className="my-4">
                    <Text className="text-2xl font-bold mb-1">SmartTV</Text>
                    <Text className="font-base text-md">Kien's LG</Text>
                  </View>
                  <View>
                    <View className="flex items-center flex-row">
                      <Text>On</Text>
                      <Text>/</Text>
                      <Text>Off</Text>
                    </View>
                    <View>
                      <PowerIcon />
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        );
      case "Bathroom":
        return (
          <View>
            <Text>Bathroom</Text>
            <Text>
              A modern bathroom with a shower, sink, and toilet. Clean and
              spacious for your comfort.
            </Text>
          </View>
        );
      case "Bedroom":
        return (
          <View>
            <Text>Bedroom</Text>
            <Text>
              A peaceful room with a comfortable bed, perfect for a good night's
              sleep. Includes wardrobe and side tables.
            </Text>
          </View>
        );
      case "Kitchen":
        return (
          <View>
            <Text>Kitchen</Text>
            <Text>
              A fully equipped kitchen with modern appliances, perfect for
              preparing meals.
            </Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View>
      {/* Tab Buttons */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            className={`py-3 px-4 mr-4 rounded-2xl ${
              activeTab === tab ? "bg-blue-500" : "bg-gray-200"
            }`}
          >
            <Text
              className={`text-md ${
                activeTab === tab ? "text-white" : "text-gray-800"
              }`}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Tab Content */}
      <View>{renderContent()}</View>
    </View>
  );
};

export default TabRoomComponent;
