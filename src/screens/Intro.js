import React, { useEffect, useState } from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next, { t } from 'i18next';
import { getLocales } from 'expo-localization';

import AppButton from '../components/AppButton';
import images from '../constants/images';
import colors from '../constants/colors';
import { switchLanguage } from '../../i18next';

export default function Intro({ navigation }) {
  const [language, setLanguage] = useState('en');

  const goToSignUp = () => navigation.navigate('SignUp');
  const goToLogin = () => navigation.navigate('Login');

  const handleLanguage = (lang) => {
    switchLanguage(lang, setLanguage);
  };

  const background = (lang) => {
    return language === lang
      ? { backgroundColor: 'rgba(105, 192, 186, 0.5)' }
      : null;
  };

  useEffect(() => {
    const localLang = getLocales()[0].languageCode;
    const translations = Object.keys(i18next.store.data);
    const isAvailable = translations.includes(localLang);
    handleLanguage(isAvailable ? localLang : 'en');

    // If we need a language outside of user's phone configuration we can use the logic below:

    //   AsyncStorage.getItem('language')
    //     .then((l) => {
    //       const language = translations.includes(l)
    //         ? l
    //         : isAvailable
    //         ? localLang
    //         : 'en';
    //       handleLanguage(language);
    //     })
    //     .catch((err) => console.log(err));
  }, []);

  return (
    <ImageBackground
      source={images.intro}
      style={{ flex: 1, alignItems: 'center' }}
    >
      <Image source={images.logo} style={styles.logo} />
      <Text style={styles.header}>{t('For a fit and relaxed pregnacy')}</Text>

      <View style={styles.footer}>
        <AppButton text={t('Get started')} onPress={goToSignUp} />
        <Text style={styles.loginText} onPress={goToLogin}>
          {t('Or login')}
        </Text>
        <View style={styles.chooseLanguage}>
          <Text>{t('Choose Language:')}</Text>
          {['en', 'de'].map((l) => (
            <Pressable
              style={[styles.langContainer, background(l)]}
              key={l}
              onPress={() => handleLanguage(l)}
            >
              <Text suppressHighlighting={false} style={styles.lang}>
                {l.toUpperCase()}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  chooseLanguage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 25,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  header: {
    fontSize: 23,
    color: colors.GREYISH_BROWN,
    marginTop: 15,
    textAlign: 'center',
    maxWidth: '60%',
  },
  lang: {
    fontSize: 15,
  },
  langContainer: {
    marginLeft: 10,
    padding: 10,
    borderRadius: 20,
  },
  logo: { width: 100, height: 120, marginTop: 70 },
  loginText: {
    color: colors.GREYISH_BROWN,
    fontSize: 22,
    marginVertical: 15,
  },
});
