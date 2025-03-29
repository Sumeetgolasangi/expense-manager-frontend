import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session"; // ✅ Correct session storage
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import expenseReducer from "../components/slice"; // ✅ Import the reducer

// Combine reducers
const rootReducer = combineReducers({
  expense: expenseReducer, 
});

// Persist config
const persistConfig = {
  key: "root",
  storage: storageSession, 
  whitelist: ["expense"], 
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for redux-persist
    }),
});

// Persistor
export const persistor = persistStore(store);

// Custom hooks for TypeScript support
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
