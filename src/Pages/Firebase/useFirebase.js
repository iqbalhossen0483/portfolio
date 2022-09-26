import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import Initialization from "./Initialization";

Initialization();

const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const LogInWithEmain = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        alert("You singed out");
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
  }, [auth]);

  return {
    LogInWithEmain,
    user,
    loading,
    logOut,
  };
};

export default useFirebase;
