import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAquTBJzmG7fM5lfCbITTh-SOF4rgKZre4",
  authDomain: "agino-farm-db.firebaseapp.com",
  projectId: "agino-farm-db",
  storageBucket: "agino-farm-db.appspot.com",
  messagingSenderId: "118221013047",
  appId: "1:118221013047:web:86b67120b25b715f9fbfb2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage();

export { auth, provider, db, storage };
