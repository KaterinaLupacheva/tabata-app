import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCj3LS1Su_hvEK8ZMXn6J0rhk-0BlfxbWc',
  authDomain: 'tabata-beff3.firebaseapp.com',
  databaseURL: 'https://tabata-beff3.firebaseio.com',
  projectId: 'tabata-beff3',
  storageBucket: 'tabata-beff3.appspot.com',
  messagingSenderId: '398944675890',
  appId: '1:398944675890:web:ca6693141156cd1da1b42b',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
