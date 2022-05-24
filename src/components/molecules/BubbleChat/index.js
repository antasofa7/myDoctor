import React from 'react';
import IsMeBubble from './IsMyBubble';
import OtherBubble from './OtherBubble';

const BubbleChat = ({isMe}) => {
  if (isMe) {
    return <IsMeBubble />;
  }
  return <OtherBubble />;
};

export default BubbleChat;
