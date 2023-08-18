import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { defaultStyles } from "../../defaultStyles/defaultStyles";

import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isShowPassword, setIsShowPassword] = useState(false);

  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log(
      `Забрал с формы залогинивания мыло ${email} и пароль ${password}`
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={defaultStyles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={-330}
        >
          <View style={[defaultStyles.formwrap, styles.formwrap]}>
            <Text style={defaultStyles.header}>Увійти</Text>

            <TextInput
              placeholder="Адреса електронної пошти"
              value={email}
              onChangeText={setEmail}
              style={[defaultStyles.input]}
              placeholderTextColor={"#BDBDBD"}
            />

            <View>
              <TextInput
                placeholder="Пароль"
                value={password}
                onChangeText={setPassword}
                style={[defaultStyles.inputForPassword]}
                placeholderTextColor={"#BDBDBD"}
              />
              <View style={defaultStyles.showPassButton}>
                <Text style={defaultStyles.showPassAreaText}>
                  {!isShowPassword ? "Показати" : "Cховати"}
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={defaultStyles.button}
              onPress={handleSubmit}
            >
              <Text style={defaultStyles.buttonText}> Увійти </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={defaultStyles.isExistAccount}
              onPress={() => {
                navigation.navigate("RegistrationScreen");
              }}
            >
              <Text style={defaultStyles.isExistAccountText}>
                Немає акаунту?
                <Text style={defaultStyles.underlineText}>Зареєструватися</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  formwrap: {
    paddingTop: 32,
    paddingBottom: 132,
    backgroundColor: "#FFFFFF",
  },
});

export default LoginScreen;
