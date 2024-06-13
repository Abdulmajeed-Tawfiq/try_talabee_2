import { createSlice } from '@reduxjs/toolkit';
import { authStorage } from '../../auth/AuthStorage';


const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated:authStorage.getToken() ? true :false ,
    token: authStorage.getToken(),
    user:authStorage.getUser(),
  },

  reducers: {
    logout :(state) =>{
        
        authStorage.remove();
        state.user =null 
        state.token =null
        state.isAuthenticated = false
    },
    register :(state , action) =>{
        state.user = action.payload?.user
        authStorage.storeUser(action.payload?.user)

        state.token = action.payload?.token
        authStorage.storeToken(action.payload?.token)
        state.isAuthenticated = true
      
    },

    login :(state , action) =>{
      state.user = action.payload?.user
      authStorage.storeUser(action.payload?.user)

      state.token = action.payload?.token
      authStorage.storeToken(action.payload?.token)
      state.isAuthenticated = true
    }
  },
  

});

export const {logout , login  ,register } = AuthSlice.actions;
export default AuthSlice.reducer;