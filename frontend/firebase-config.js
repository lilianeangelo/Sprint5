import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, User, GoogleAuthProvider, FacebookAuthProvider  } from "firebase/auth"; // Importa o módulo de autenticação
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDb5lU39-xO_RZa2sRLzbExk9EASWMTOOs",
  authDomain: "tourguide-aa203.firebaseapp.com",
  projectId: "tourguide-aa203",
  storageBucket: "tourguide-aa203.appspot.com",
  messagingSenderId: "1245327322",
  appId: "1:1245327322:web:a4d5b3b64f427c90559ae3",
  measurementId: "G-XWJK65VFJE"
};

// Inicializa a autenticação e o Analytics
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const providerFace = new FacebookAuthProvider();

export { auth, provider, providerFace }; // Exporta a autenticação
