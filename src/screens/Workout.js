import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import WheelPicker from 'react-native-wheely';
import { t } from 'i18next';

import BackArrow from '../components/BackArrow';
import AppButton from '../components/AppButton';
import images from '../constants/images';
import colors from '../constants/colors';

export default function Name({ navigation }) {
  const [frequency, setFrequency] = useState(2);

  const navigate = () => navigation.navigate('Notifications');

  const options = [
    t('Once a week'),
    `2 ${t('times a week')}`,
    `3 ${t('times a week')}`,
    `4 ${t('times a week')}`,
    `5 ${t('times a week')}`,
    `6 ${t('times a week')}`,
    `7 ${t('times a week')}`,
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={images.goal} style={styles.image} />
        <BackArrow />
        <Text style={styles.h1}>
          {t('How many times a week do you want to be active?')}
        </Text>
      </View>

      <WheelPicker
        scaleFunction={() => 0.7}
        selectedIndex={frequency}
        containerStyle={{
          marginHorizontal: '15%',
        }}
        options={options}
        onChange={(index) => setFrequency(index)}
      />

      <View style={styles.footer}>
        <AppButton text={t('Continue')} onPress={navigate} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    paddingBottom: 30,
    justifyContent: 'space-between',
  },
  footer: {
    alignItems: 'center',
  },
  header: { width: '100%', height: '55%' },
  h1: {
    fontSize: 25,
    textAlign: 'center',
    color: colors.GREYISH_BROWN,
    position: 'absolute',
    top: 70,
    left: 40,
    right: 40,
  },
  image: { width: '100%', height: '100%' },
  showHide: { width: 30, height: 30, resizeMode: 'contain' },
  showHideContainer: {
    width: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});
