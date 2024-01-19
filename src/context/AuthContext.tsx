import { PropsWithChildren, createContext, useState } from "react";
import { User } from "../@types";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

interface AuthContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
}

const defaultValue: AuthContextType = {
  user: { email: "no-provider" },
  login: () => {
    throw new Error("no-provider");
  },
  logout: () => {
    throw new Error("no-provider");
  },
};

export const AuthContext = createContext(defaultValue);
export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const testUser = { email: "emily@email.com" };
  const login = (email: string) => {
    if (email === testUser.email) {
      setUser(testUser);
      console.log({ message: "success!" });
      navigate("/");
    } else {
      console.log({ message: "failed :(" });
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
