import { useSelector } from "react-redux";
import { authStorage } from "../auth/AuthStorage";

export const useAuth = () => {
  const { user, token, isAuthenticated } = useSelector(
    (state:any) => state.auth
  );
  
  const logout = () => {
    authStorage.remove()
  };

  return {
    user,
    token,
    isAuthenticated,
    logout,
    
  };
};


