import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from '../Sagas';
import usersReducers from "../Reducers/Users/usersReducer";
import masterReducers from "../Reducers/Masters/masterReducer";

const saga = createSagaMiddleware()
const reducer = combineReducers({
  //Master Reducer nya dibawah Comman masing" module
  masterReducers: masterReducers,
  //Users
  usersReducers: usersReducers

  //HR

  //Hotels

  //Booking

  //Resto

  //Payment

  //Purchase

});
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(saga),
});
saga.run(rootSaga)

export default store;
