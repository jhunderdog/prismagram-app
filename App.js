import React, { useState, useEffect } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const preLoad = async () => {
    try {
      console.log(loaded);
      await Font.loadAsync(Ionicons.font);
      await Asset.loadAsync([require("./assets/instagram.png")]);
      setLoaded(true);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    preLoad();
  }, []);
  return loaded ? (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  ) : (
    <AppLoading />
  );
}
