// Import statements for TypeScript

import { TOKEN_KEY, USER_KEY } from "../config/AppKey";

// ==================== TOKEN =====================
const storeToken = (token: string | null): void => {
  localStorage.setItem(TOKEN_KEY, token || "");
};

const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

const removeToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};

// ==================== USER =====================
interface User {
  // Define the structure of your user object here
  // For example:
  // id: number;
  // username: string;
  // email: string;
}

const storeUser = (user: User | null): void => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

const getUser = (): User | null => {
  const userString = localStorage.getItem(USER_KEY) == 'undefined' ?  "": localStorage.getItem(USER_KEY) ;
  
  return userString ? JSON.parse(userString || " ") : null;
};

const removeUser = (): void => {
  localStorage.removeItem(USER_KEY);
};

// ==================== BOTH =====================
const store = (user: User | null, token: string | null): void => {
  storeUser(user);
  storeToken(token);
};

const remove = (): void => {
  removeToken();
  removeUser();
};

const get = (): { user: User | null; token: string | null } => {
  return {
    user: getUser(),
    token: getToken(),
  };
};

// ==================== EXPORT =====================
export const authStorage = {
  storeToken,
  getToken,
  removeToken,
  storeUser,
  getUser,
  removeUser,
  store,
  remove,
  get,
};
