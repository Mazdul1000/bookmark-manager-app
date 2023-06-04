import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// web app's Firebase configuration

const firebaseConfig = {
    // apiKey: import.meta.env.REACT_APP_APIKEY,
    // authDomain: import.meta.env.REACT_APP_AUTHDOMAIN,
    // projectId: import.meta.env.REACT_APP_PROJECTID,
    // storageBucket: import.meta.env.REACT_APP_STORAGEBUCKET,
    // messagingSenderId: import.meta.env.REACT_APP_MESSAGINGSENDERID,
    // appId: import.meta.env.REACT_APP_APPID,
    apiKey: "AIzaSyAHzFF4WcBRI1hLW-tfbuqQw48DEkMBTvk",
    authDomain: "bookmark-storage-89a45.firebaseapp.com",
    projectId: "bookmark-storage-89a45",
    storageBucket: "bookmark-storage-89a45.appspot.com",
    messagingSenderId: "261539557970",
    appId: "1:261539557970:web:4a2fa53a20f0116af0658b"
};

 
const app = initializeApp(firebaseConfig);

// Export firestore database// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);