export const getChatTime = date => {
  const hours = date.getHours();
  const minute = date.getMinutes();
  const minutes = minute.toString.length < 2 ? minute : `0${minute}`;
  return `${hours}:${minutes} ${hours >= 12 ? 'PM' : 'AM'}`;
};

export const setDateChat = value => {
  const year = value.getFullYear();
  const month = value.getMonth() + 1;
  const date = value.getDate();

  return `${year}-${month}-${date}`;
};
