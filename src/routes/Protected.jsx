import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const Protected = ({ children }) => {
  const user = useSelector((store) => store.User);

  if (!user.isLogin) {
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
};
