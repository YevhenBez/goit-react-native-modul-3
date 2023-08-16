import RegistrationScreen from "../../Screens/RegistrationScreen/RegistrationScreen";

import LoginScreen from "../../Screens/LoginScreen/LoginScreen";

import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();

export const NavigationRouting = () => {
  return (
    <AuthStack.Navigator initialRouteName="LoginScreen">
      <AuthStack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
      />
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};
