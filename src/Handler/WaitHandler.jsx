import { useContext } from "react";
import LoadingScreen from "../Utils/Custom/LoadingScreen";
import { AuthContext } from "./../Context/AuthContext";

const WaitHandler = ({ children }) => {
  const { loading } = useContext(AuthContext);
  return loading ? <LoadingScreen /> : children;
};

export default WaitHandler;
