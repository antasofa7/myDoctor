import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  //   console.log('value => ', value);
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log('err => ', e);
  }
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (e) {
    console.log('err => ', e);
  }
};

export const removeData = async key => {
  const value = await AsyncStorage.clear();
  console.log('value', value);
};
