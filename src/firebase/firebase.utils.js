import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBF_mJIIlS6yrRYN9imnBBWYr9DKQcb6cs',
	authDomain: 'ecomm-db-9be41.firebaseapp.com',
	databaseURL: 'https://ecomm-db-9be41.firebaseio.com',
	projectId: 'ecomm-db-9be41',
	storageBucket: 'ecomm-db-9be41.appspot.com',
	messagingSenderId: '558521405187',
	appId: '1:558521405187:web:cbd92d86232236c6f2a336'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
