import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCBMQUN_hwL5cPENaBqEv88kG4OEbkbXiU",
  authDomain: "crwn-db2-4ad7d.firebaseapp.com",
  projectId: "crwn-db2-4ad7d",
  storageBucket: "crwn-db2-4ad7d.appspot.com",
  messagingSenderId: "778244821404",
  appId: "1:778244821404:web:898245ab76fea5d7da7859"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)