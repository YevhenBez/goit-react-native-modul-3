import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import {
  defaultStyles,
} from "../../defaultStyles/defaultStyles.js";

const RegistrationScreen = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[defaultStyles.container]}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={-50}
        >
          <View style={[defaultStyles.formwrap]}>
            <Text style={defaultStyles.header}>Реєстрація</Text>
    
            <TextInput
              placeholder="Логін"
              style={[defaultStyles.input]}
              placeholderTextColor={"#BDBDBD"}
              
            />
    
            <TextInput
              placeholder="Адреса електронної пошти"
              style={[defaultStyles.input]}
              placeholderTextColor={"#BDBDBD"}
              
            />
    
            <View>
              <TextInput
                placeholder="Пароль"
                style={[defaultStyles.inputForPassword]}
                placeholderTextColor={"#BDBDBD"}
                
              />
              <View style={defaultStyles.showPassButton}>
                <Text style={defaultStyles.showPassAreaText}>
                  {!isShowPassword ? "Показати" : "Cховати"}
                </Text>
              </View>
            </View>
    
            <TouchableOpacity style={defaultStyles.button}>
                <Text style={defaultStyles.buttonText}> Зареєстуватися </Text>
              </TouchableOpacity>
                    
            <TouchableOpacity
                style={defaultStyles.isExistAccount}
                onPress={() => {
                  navigation.navigate("LoginScreen");
                }}
              >
                <Text style={defaultStyles.isExistAccountText}>
                  Вже є акаунт? Увійти
                </Text>
              </TouchableOpacity>
                
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
