import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { t } from 'i18next';

import BackArrow from '../components/BackArrow';
import AppInput from '../components/AppInput';
import images from '../constants/images';
import colors from '../constants/colors';
import AppButton from '../components/AppButton';

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const [show, setShow] = useState(true);

  const changeEmail = (text) => setEmail(text);
  const changePass = (text) => setPass(text);

  const toggleShowHide = () => setShow(!show);

  const navigate = () => navigation.navigate('Notifications');
  const disabled = !email || !pass;

  const Right = () => (
    <TouchableOpacity style={styles.showHideContainer} onPress={toggleShowHide}>
      <Image source={images[show ? 'show' : 'hide']} style={styles.showHide} />
    </TouchableOpacity>
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        minHeight: '100%',
        paddingBottom: 30,
      }}
    >
      <View style={styles.header}>
        <Image source={images.auth} style={styles.image} />
        <BackArrow />
      </View>

      <Text style={styles.h1}>{t('Welcome back!')}</Text>

      <View style={styles.form}>
        <AppInput
          style={styles.input}
          placeholder="example@gmail.com"
          value={email}
          onChangeText={changeEmail}
        />
        <View style={{ marginVertical: 10 }} />
        <AppInput
          style={styles.input}
          placeholder={t('Enter a password')}
          right={<Right />}
          secureTextEntry={show}
          value={pass}
          onChangeText={changePass}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {t('Have you forgotten your password?')}
        </Text>
        <AppButton text={t('Log in')} disabled={disabled} onPress={navigate} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  form: { marginHorizontal: '10%' },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 30,
  },
  footerText: {
    fontSize: 20,
    marginBottom: 15,
    color: colors.GREYISH_BROWN,
  },
  header: { width: '100%', height: 320 },
  h1: {
    maxWidth: '85%',
    fontSize: 25,
    textAlign: 'center',
    alignSelf: 'center',
    color: colors.GREYISH_BROWN,
    marginBottom: 20,
  },
  image: { width: '100%', height: '100%' },
  input: { paddingLeft: 20 },
  showHide: { width: 30, height: 30, resizeMode: 'contain' },
  showHideContainer: {
    width: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});
