import React from "react";
import { View } from "react-native";
import { useIsLoggedIn } from "../AuthContext";
import AuthNavigation from "../navigation/AuthNavigation";
import MainNavigation from "../navigation/MainNavigation";
export default () => {
  // const isLoggedIn = useIsLoggedIn();
  // const logIn = useLogIn();
  // const logOut = useLogOut();
  const isLoggedIn = true;
  return (
    <View style={{ flex: 1 }}>
      {/* {isLoggedIn ? (
        <TouchableOpacity onPress={logOut}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      ) : (
        <AuthNavigation />
      )} */}
      {isLoggedIn ? <MainNavigation /> : <AuthNavigation />}
    </View>
  );
};
