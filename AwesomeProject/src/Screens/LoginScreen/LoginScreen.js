import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  formwrapForKeyboard,
  formwrapWithoutKeyboard,
  defaultStyles,
} from "../../defaultStyles/defaultStyles";

import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);

  const [isOpenKeyboardForFormwrap, setIsOpenKeyboardForFormwrap] = useState(
    formwrapWithoutKeyboard
  );

  const navigation = useNavigation();

  return (
    <View style={defaultStyles.container}>
      <View
        style={[
          defaultStyles.formwrap,
          styles.formwrap,
          ...isOpenKeyboardForFormwrap,
        ]}
      >
        <Text style={defaultStyles.header}>Увійти</Text>

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
            <Text style={defaultStyles.buttonText}> Увійти </Text>
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
              navigation.navigate("RegistrationScreen");
            }}
          >
            <Text style={defaultStyles.isExistAccountText}>
              Немає акаунту?
              <Text style={defaultStyles.underlineText}>Зареєструватися</Text>
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
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
