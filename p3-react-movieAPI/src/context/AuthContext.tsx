import { PropsWithChildren, createContext, useState } from "react";
// import { User } from "../@types";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  type User,
} from "firebase/auth";
import { auth } from "../pages/firebase";
// import { Navigate } from "react-router-dom";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  signup: (email: string, password: string) => void;
}

const defaultValue: AuthContextType = {
  user: null,
  login: () => {
    throw new Error("no-provider");
  },
  logout: () => {
    throw new Error("no-provider");
  },
  signup: () => {
    throw new Error("no-provider");
  },
};

export const AuthContext = createContext(defaultValue);
export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  // const testUser = { email: "emily@email.com" };

  const signup = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const { message } = error as Error;
        console.log(message);
      });
  };
  const login = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const { message } = error as Error;
        console.log("okej", message);
      });
    // if (email === testUser.email) {
    //   setUser(testUser);
    //   console.log({ message: "success!" });
    //   navigate("/");
    // } else {
    //   console.log({ message: "failed :(" });
    // }
  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
