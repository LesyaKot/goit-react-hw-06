import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "../redux/filtersSlice";
import { contactsSlice } from "../redux/contactsSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "contacts",
  storage,
};

export const persistedReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filters: filterSlice.reducer,
  },
});

export const persistor = persistStore(store);

// ??????????

// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { contactsReducer } from "../redux/contactsSlice";

// const contactsPersistConfig = {
//   key: "contacts",
//   storage,
//   whitelist: ["items"], 
// };

// const rootReducer = combineReducers({
//   contacts: persistReducer(contactsPersistConfig, contactsReducer),
  
// });

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: getDefaultMiddleware({
//     serializableCheck: false, 
//   }),
// });

// export const persistor = persistStore(store);






// import { configureStore } from "@reduxjs/toolkit";
// import { contactsReducer } from "../redux/contactsSlice";
// import { filtersReducer } from "../redux/filtersSlice";

// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'
// import rootReducer from './reducers'

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filters: filtersReducer,
//   },
// });
