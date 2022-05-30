import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {List, Spacer} from '../../components';
import {FIREBASE} from '../../config';
import {colors, fonts, getData} from '../../utils';

const Messages = ({navigation}) => {
  const [user, setUser] = useState({});
  const [messages, setMessages] = useState([]);

  const _getUserFromLocal = _ => {
    getData('userData').then(res => {
      if (res) {
        setUser(res);
      }
    });
  };

  const _getMessages = useCallback(
    _ => {
      const urlMessage = `messages/${user.uid}`;
      const rootDb = FIREBASE.database();
      const messageDb = rootDb.ref(urlMessage);

      messageDb.on('value', async snapshot => {
        if (snapshot.val()) {
          const oldData = snapshot.val();
          const data = [];
          const promises = await Object.keys(oldData).map(async key => {
            const urlDoctor = `doctors/${oldData[key].uidPartner}`;
            const profileDoctor = await rootDb.ref(urlDoctor).once('value');
            // console.log('doctors', profileDoctor.val());
            data.push({
              id: key,
              profileDoctor: profileDoctor.val(),
              ...oldData[key],
            });
          });

          await Promise.all(promises);

          // console.log('messages => ', data);
          setMessages(data);
        }
      });
    },
    [user.uid],
  );

  useEffect(() => {
    _getUserFromLocal();
    _getMessages();
  }, [_getMessages]);

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Spacer height={30} />
        <Text style={styles.title}>Messages</Text>
        {messages.map(item => {
          const dataDoctor = {
            id: item.profileDoctor.uid,
            data: item.profileDoctor,
          };

          return (
            <List
              key={item.id}
              photo={item.profileDoctor.photo}
              name={item.profileDoctor.fullName}
              desc={item.lastContentChat}
              onPress={() => navigation.navigate('Chatting', dataDoctor)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
  title: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 20,
    color: colors.text.primary,
    marginLeft: 16,
  },
});
