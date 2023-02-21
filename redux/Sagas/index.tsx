import { all, takeEvery } from "redux-saga/effects";
import ActionType from "../Constant/Users/ActionType";
import ActionMasterType from "../Constant/Masters/ActionType";
import {
    handleRegions,
    handleAddRegions,
    handleUpdateRegions,
    handleDelRegions,

    handleCountry,
    handleAddCountry,
    handleUpdateCountry,
    handleDelCountry,


    handleProv,
    handleAddProv,
    handleDelProv,
    handleUpdateProv,
    
    handleAddr,
    handleAddAddr,
    handleDelAddr,
    handleUpdateAddr,


} from "./Masters/regionsSaga";
import { handleAddUsers, handleDelUsers, handleLoginUsers, handleRegisterUsers, handleUpdatePhotoUsers, handleUpdateUsers, handleUser, handleUsers } from "./Users/usersSaga";

function* watchAll(): any {
    yield all([
        //Master Reducer nya dibawah Comman masing" module
        takeEvery(ActionMasterType.GET_REGIONS, handleRegions),
        takeEvery(ActionMasterType.ADD_REGIONS, handleAddRegions),
        takeEvery(ActionMasterType.UPDATE_REGIONS, handleUpdateRegions),
        takeEvery(ActionMasterType.DEL_REGIONS, handleDelRegions),

        // ========== country ================== //
        takeEvery(ActionMasterType.GET_COUNTRY, handleCountry),
        takeEvery(ActionMasterType.ADD_COUNTRY, handleAddCountry),
        takeEvery(ActionMasterType.UPDATE_COUNTRY, handleUpdateCountry),
        takeEvery(ActionMasterType.DEL_COUNTRY, handleDelCountry),

        // ========== prov ================== //
        takeEvery(ActionMasterType.GET_PROV, handleProv),
        takeEvery(ActionMasterType.ADD_PROV, handleAddProv),
        takeEvery(ActionMasterType.UPDATE_PROV, handleUpdateProv),
        takeEvery(ActionMasterType.DEL_PROV, handleDelProv),
        
        takeEvery(ActionMasterType.GET_ADDR, handleAddr),
        takeEvery(ActionMasterType.ADD_ADDR, handleAddAddr),
        takeEvery(ActionMasterType.UPDATE_ADDR, handleUpdateAddr),
        takeEvery(ActionMasterType.DEL_ADDR, handleDelAddr),






        
        //Users
        takeEvery(ActionType.GET_USERS, handleUsers),
        takeEvery(ActionType.GET_USER, handleUser),
        takeEvery(ActionType.ADD_USERS, handleAddUsers),
        takeEvery(ActionType.UPDATE_USERS, handleUpdateUsers),
        takeEvery(ActionType.UPDATE_PHOTO_USERS, handleUpdatePhotoUsers),
        takeEvery(ActionType.DEL_USERS, handleDelUsers),
        takeEvery(ActionType.LOGIN, handleLoginUsers),
        takeEvery(ActionType.REGISTER, handleRegisterUsers)

        //HR

        //Hotels

        //Booking

        //Resto

        //Payment

        //Purchase
    ])
}

export default watchAll