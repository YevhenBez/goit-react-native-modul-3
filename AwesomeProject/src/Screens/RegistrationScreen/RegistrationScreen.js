import React, { useState } from "react";

import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import {
  formwrapForKeyboard,
  formwrapWithoutKeyboard,
  defaultStyles,
} from "../../defaultStyles/defaultStyles.js";

const RegistrationScreen = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);

  const [isOpenKeyboardForFormwrap, setIsOpenKeyboardForFormwrap] = useState(
    formwrapWithoutKeyboard
  );

  const navigation = useNavigation();

  return (
    <View style={[defaultStyles.container]}>
      <View style={[defaultStyles.formwrap, ...isOpenKeyboardForFormwrap]}>
        <Text style={defaultStyles.header}>Реєстрація</Text>

        <TextInput
          placeholder="Логін"
          style={[defaultStyles.input]}
          placeholderTextColor={"#BDBDBD"}
          onFocus={() => {
            setIsOpenKeyboard(true),
              setIsOpenKeyboardForFormwrap(formwrapForKeyboard);
          }}
          onBlur={() => {
            setIsOpenKeyboard(false),
              setIsOpenKeyboardForFormwrap(formwrapWithoutKeyboard);
          }}
        />

        <TextInput
          placeholder="Адреса електронної пошти"
          style={[defaultStyles.input]}
          placeholderTextColor={"#BDBDBD"}
          onFocus={() => {
            setIsOpenKeyboard(true),
              setIsOpenKeyboardForFormwrap(formwrapForKeyboard);
          }}
          onBlur={() => {
            setIsOpenKeyboard(false),
              setIsOpenKeyboardForFormwrap(formwrapWithoutKeyboard);
          }}
        />

        <View>
          <TextInput
            placeholder="Пароль"
            style={[defaultStyles.inputForPassword]}
            placeholderTextColor={"#BDBDBD"}
            onFocus={() => {
              setIsOpenKeyboard(true),
                setIsOpenKeyboardForFormwrap(formwrapForKeyboard);
            }}
            onBlur={() => {
              setIsOpenKeyboard(false),
                setIsOpenKeyboardForFormwrap(formwrapWithoutKeyboard);
            }}
          />
          <View style={defaultStyles.showPassButton}>
            <Text style={defaultStyles.showPassAreaText}>
              {!isShowPassword ? "Показати" : "Cховати"}
            </Text>
          </View>
        </View>

        {!isOpenKeyboard ? (
          <TouchableOpacity style={defaultStyles.button}>
            <Text style={defaultStyles.buttonText}> Зареєстуватися </Text>
          </TouchableOpacity>
        ) : (
          <View>
            <TextInput
              placeholder="Покажи кнопку"
              style={[defaultStyles.inputHidden]}
              placeholderTextColor={"#ffffff"}
              onFocus={() => setIsOpenKeyboard(false)}
            />
          </View>
        )}

        {!isOpenKeyboard && (
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
        )}
      </View>
    </View>
  );
};

export default RegistrationScreen;
