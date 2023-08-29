import React, { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { t } from 'i18next';

import BackArrow from '../components/BackArrow';
import AppButton from '../components/AppButton';
import images from '../constants/images';
import colors from '../constants/colors';

export default function Name({ navigation, route }) {
  const [date, setDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const onChange = (event, selectedDate) => {
    setDatePickerVisible(false);
    setDate(selectedDate);
  };

  const formatDate = () => {
    const selectedDate = new Date(date);
    const array = selectedDate.toString().split(' ');
    return `${array[1]} ${array[2]}, ${array[3]}`;
  };

  const navigate = () => navigation.navigate('Workout');

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        minHeight: '100%',
        paddingBottom: 30,
      }}
    >
      <View style={styles.header}>
        <Image source={images.due} style={styles.image} />
        <BackArrow navigation={navigation} />
      </View>

      <Text style={styles.h1}>
        {t('When is your baby due,')} {route?.params?.name?.trim()}?
      </Text>

      <Pressable
        style={styles.datePicker}
        onPress={() => setDatePickerVisible(true)}
      >
        <Text style={{ color: '#5294fc' }}>{formatDate()}</Text>
      </Pressable>
      {datePickerVisible && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          onChange={onChange}
        />
      )}

      <View style={styles.footer}>
        <AppButton text={t('Continue')} onPress={navigate} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  datePicker: {
    width: 100,
    height: 35,
    borderRadius: 5,
    backgroundColor: '#eeeeef',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 30,
  },
  header: { width: '100%', maxHeight: 550, marginBottom: -80 },
  h1: {
    maxWidth: '85%',
    fontSize: 25,
    textAlign: 'center',
    alignSelf: 'center',
    color: colors.GREYISH_BROWN,
    marginBottom: 20,
  },
  image: { width: '100%', height: '100%' },
});
