import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { t } from 'i18next';

import BackArrow from '../components/BackArrow';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import images from '../constants/images';
import colors from '../constants/colors';

export default function Name({ navigation }) {
  const [name, setName] = useState(null);

  const navigate = () => navigation.navigate('Due', { name });
  const disabled = !name;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        minHeight: Dimensions.get('window').height,
        paddingBottom: 30,
      }}
    >
      <View style={styles.header}>
        <Image source={images.couch} style={styles.image} />
        <BackArrow />
      </View>

      <Text style={styles.h1}>
        {t(
          "It's great that you're here! First things first, what should we call you?"
        )}
      </Text>

      <View style={styles.form}>
        <AppInput
          style={styles.input}
          placeholder={t('Your name')}
          value={name}
          onChangeText={(name) => setName(name)}
        />
      </View>

      <View style={styles.footer}>
        <AppButton
          text={t('Continue')}
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
  header: { width: '100%', maxHeight: 500, marginBottom: 25 },
  h1: {
    maxWidth: '85%',
    fontSize: 25,
    textAlign: 'center',
    alignSelf: 'center',
    color: colors.GREYISH_BROWN,
    marginBottom: 20,
  },
  image: { width: '100%', height: '100%' },
  input: { paddingHorizontal: 20, textAlign: 'center' },
});
