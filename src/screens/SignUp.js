import React, { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Checkbox from 'expo-checkbox';
import { t } from 'i18next';

import BackArrow from '../components/BackArrow';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import images from '../constants/images';
import colors from '../constants/colors';

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const [show, setShow] = useState(true);
  const [privacy, setPrivacy] = useState(false);
  const [terms, setTerms] = useState(false);

  const changeEmail = (text) => setEmail(text);
  const changePass = (text) => setPass(text);

  const toggleShowHide = () => setShow(!show);
  const togglePrivacy = () => setPrivacy(!privacy);
  const toggleTerms = () => setTerms(!terms);

  const navigate = () => navigation.navigate('Name');
  const disabled =
    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email) ||
    !pass ||
    !privacy ||
    !terms;

  const Right = () => (
    <TouchableOpacity style={styles.showHideContainer} onPress={toggleShowHide}>
      <Image source={images[show ? 'show' : 'hide']} style={styles.showHide} />
    </TouchableOpacity>
  );

  const PrivacyPolicyRow = () => (
    <Pressable style={styles.row} onPress={togglePrivacy}>
      <Checkbox value={privacy} />
      <Text style={{ marginLeft: 10 }}>
        {t("I've read the")}{' '}
        <Text style={{ fontWeight: 'bold' }}>{t('privacy policy')}</Text>
      </Text>
    </Pressable>
  );

  const TermsAndConditionsRow = () => (
    <Pressable style={styles.row} onPress={toggleTerms}>
      <Checkbox value={terms} />
      <Text style={{ marginLeft: 10, lineHeight: 20 }}>
        {t('I accept the')}
        <Text style={{ fontWeight: 'bold' }}>
          {t('terms & conditions')}
        </Text>{' '}
        {t('and')}
        <Text style={{ fontWeight: 'bold' }}>{t("Keleya's advice")}</Text>
      </Text>
    </Pressable>
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
        <BackArrow navigation={navigation} />
      </View>

      <Text style={styles.h1}>
        {t('Add your details below to set up an account')}
      </Text>

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

        <View style={{ marginVertical: 10 }} />
        <PrivacyPolicyRow />
        <TermsAndConditionsRow />
      </View>

      <View style={styles.footer}>
        <AppButton
          text={t('Create account')}
          disabled={disabled}
          onPress={navigate}
        />
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
  row: { flexDirection: 'row', padding: 10, marginLeft: -10 },
  showHide: { width: 30, height: 30, resizeMode: 'contain' },
  showHideContainer: {
    width: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});
