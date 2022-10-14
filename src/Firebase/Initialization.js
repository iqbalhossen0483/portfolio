import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./Firebase.confiq";

const Initialization = () => {
    return initializeApp(firebaseConfig);
};

export default Initialization;