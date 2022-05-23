import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input} from '../../atoms';

const InputChat = () => {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        type="chat"
        placeholder="Tulis pesan untuk Nairobi"
      />
      <Button type="btn-icon" disabled />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 26,
  },
  input: {
    flex: 1,
  },
});
