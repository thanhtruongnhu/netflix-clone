import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDgG_eaBB9f0cPrKSCcSIeQd4niDM1Rdb8',
	authDomain: 'netflix-clone-3b80f.firebaseapp.com',
	projectId: 'netflix-clone-3b80f',
	storageBucket: 'netflix-clone-3b80f.appspot.com',
	messagingSenderId: '989895179142',
	appId: '1:989895179142:web:e544c9653f74433c968a07',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
