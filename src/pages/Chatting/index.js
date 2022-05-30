import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BubbleChat, Header, InputChat} from '../../components';
import {colors, fonts, getChatTime, getData, setDateChat} from '../../utils';
import {FIREBASE} from '../../config';
import {showMessage} from 'react-native-flash-message';
import {useCallback} from 'react';

const Chatting = ({route}) => {
  const doctor = route.params;
  const [chatContent, setChatContent] = useState('');
  const [user, setUser] = useState({});
  const [chatData, setChatData] = useState([]);

  const _getUserFromLocal = _ => {
    getData('userData').then(res => {
      if (res) {
        setUser(res);
      }
    });
  };

  const _getDataChat = useCallback(
    _ => {
      const chatId = `${user.uid}_${doctor.data.uid}`;
      const urlChat = `chats/${chatId}/allChat/`;

      FIREBASE.database()
        .ref(urlChat)
        .on('value', snapshot => {
          if (snapshot.val()) {
            const dataSnapshot = snapshot.val();
            const allDataChat = [];
            Object.keys(dataSnapshot).map(key => {
              const dataChat = dataSnapshot[key];
              const newDataChat = [];
              Object.keys(dataChat).map(itemChat => {
                newDataChat.push({
                  id: itemChat,
                  data: dataChat[itemChat],
                });
              });
              allDataChat.push({
                id: key,
                data: newDataChat,
              });
            });
            console.log('data chat => ', allDataChat);
            setChatData(allDataChat);
          }
        });
    },
    [doctor.data.uid, user.uid],
  );

  useEffect(() => {
    _getUserFromLocal();
    _getDataChat();
  }, [_getDataChat]);

  const chatSend = _ => {
    const today = new Date();

    const data = {
      sendBy: user.uid,
      chatDate: today.getTime(),
      chatTime: getChatTime(today),
      chatContent: chatContent,
    };
    const chatId = `${user.uid}_${doctor.data.uid}`;
    const urlChat = `chats/${chatId}/allChat/${setDateChat(today)}`;
    const urlMessageUser = `messages/${user.uid}/${chatId}`;
    const urlMessageDoctor = `messages/${doctor.data.uid}/${chatId}`;
    const dataHistoryChatUser = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: doctor.data.uid,
    };

    const dataHistoryChatDoctor = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: user.uid,
    };

    FIREBASE.database()
      .ref(urlChat)
      .push(data)
      .then(res => {
        setChatContent('');
        // set history chat user
        FIREBASE.database().ref(urlMessageUser).set(dataHistoryChatUser);

        // set history chat doctor
        FIREBASE.database().ref(urlMessageDoctor).set(dataHistoryChatDoctor);
        console.log('Message send');
      })
      .catch(err => {
        showMessage(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <Header
        title={doctor.data.fullName}
        category={doctor.data.category}
        photo={doctor.data.photo}
        type="dark-profile"
      />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {chatData.map(chat => {
            console.log('chat => ', chat);
            return (
              <View key={chat.id}>
                <Text style={styles.date}>{chat.id}</Text>
                {chat.data.map(item => {
                  const isMe = item.data.sendBy === user.uid;

                  return (
                    <BubbleChat
                      key={item.id}
                      isMe={isMe}
                      text={item.data.chatContent}
                      date={item.data.chatTime}
                      photo={isMe ? null : {uri: doctor.data.photo}}
                    />
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
      </View>
      <InputChat
        doctor={doctor.data.fullName}
        value={chatContent}
        onChangeText={value => setChatContent(value)}
        onPress={chatSend}
      />
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
