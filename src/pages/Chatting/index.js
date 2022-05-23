import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {BubbleChat, Header, InputChat} from '../../components';
import {colors, fonts} from '../../utils';

const Chatting = () => {
  return (
    <View style={styles.page}>
      <Header title="Nairobi Putri Hayza" type="dark-profile" />
      <View style={styles.content}>
        <ScrollView>
          <Text style={styles.date}>Senin, 21 Maret, 2020</Text>
          <BubbleChat isMe />
          <BubbleChat />
          <BubbleChat isMe />
        </ScrollView>
      </View>
      <InputChat />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 13,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
  },
  date: {
    marginVertical: 20,
    fontFamily: fonts.primary.regular,
    fontSize: 11,
    color: colors.text.secondary,
    textAlign: 'center',
  },
});
