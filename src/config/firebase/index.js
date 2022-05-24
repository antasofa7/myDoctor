import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

firebase.initializeApp({
  apiKey: 'AIzaSyCNQV3X37_ah-9kijJW0Esk0bJI6_ant9s',
  authDomain: 'mydoctor-fd997.firebaseapp.com',
  projectId: 'mydoctor-fd997',
  storageBucket: 'mydoctor-fd997.appspot.com',
  messagingSenderId: '1053318569521',
  appId: '1:1053318569521:web:fd54eb6415e4e6d907bf10',
  measurementId: 'G-K87GVC0266',
});

const FIREBASE = firebase;

export default FIREBASE;
