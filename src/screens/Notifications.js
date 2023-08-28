import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { t } from 'i18next';

import AppButton from '../components/AppButton';
import images from '../constants/images';
import colors from '../constants/colors';

export default function Notifications() {
  return (
    <ImageBackground
      source={images.notifications}
      style={{ flex: 1, alignItems: 'center' }}
    >
      <Image source={images.bell} style={styles.logo} />
      <Text style={styles.header}>
        {t('Get notifications to boost your motivation')}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.loginText}>{t('Skip')}</Text>
        <AppButton text={t('Allow notifications')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
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
    marginHorizontal: '10%',
  },
  logo: { width: 40, height: 40, marginTop: 70, resizeMode: 'contain' },
  loginText: {
    color: colors.GREYISH_BROWN,
    fontSize: 22,
    marginVertical: 15,
  },
});
