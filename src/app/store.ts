import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "@features/loading/loading";
import authReducer from "@features/auth/auth";

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
