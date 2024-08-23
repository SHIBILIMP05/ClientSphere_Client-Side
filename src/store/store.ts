import { combineReducers, configureStore } from "@reduxjs/toolkit";
import adminSlice from "./slice/adminSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import headSlice from "./slice/headSlice";
import employeeSlice from "./slice/employeeSlice";


const rootReducer = combineReducers({
    Admin: adminSlice,
    Head:headSlice,
    Employe:employeeSlice
})

const persistConfig = {
    key: 'root',
    storage,
    version: 1
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>