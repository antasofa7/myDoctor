import React from 'react';
import IsMeBubble from './IsMyBubble';
import OtherBubble from './OtherBubble';

const BubbleChat = props => {
  const {isMe, text, date, photo} = props;
  if (isMe) {
    return <IsMeBubble text={text} date={date} />;
  }
  return <OtherBubble text={text} date={date} photo={photo} />;
};

export default BubbleChat;
