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
  apiKey: "AIzaSyD4VgPjO66QVSWDIrIpUzcsgUp-ODlroGw",
  authDomain: "ml-bookapp-81723.firebaseapp.com",
  projectId: "ml-bookapp-81723",
  storageBucket: "ml-bookapp-81723.appspot.com",
  messagingSenderId: "375179355897",
  appId: "1:375179355897:web:9d451100e856ea9fb76428",
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
