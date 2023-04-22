import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import toast from "react-hot-toast";
import { userHandle } from "./utils";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
const app = initializeApp(firebaseConfig);
// auth oluşturuyoruz
const auth = getAuth();

//database oluşturuyoruz
const db = getFirestore(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    userHandle(user);
  } else {
    userHandle(false);
  }
});

// login işlemi yapıyoruz
export const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    toast.error(err.code);
  }
};

export const register = async ({ email, full_name, username, password }) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // users koleksiyonuna ekliyoruz
    await setDoc(doc(db, "users", response.user.uid), {
      fullName: full_name,
      username: username,
    });
    await updateProfile(auth.currentUser, {
      displayName: full_name,
    });

    return response.user;
  } catch (err) {}
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    toast.error(err.code);
  }
};
